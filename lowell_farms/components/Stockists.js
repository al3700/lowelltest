/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import { Query } from 'react-apollo';
import zipcodes from 'zipcodes';
import Stockist from './Stockist';
import Quote from './Quote';
import Newsletter from './Newsletter';
import {
  mapStockistsToZip,
  findClosestDeliveryServices,
  findClosestRetailers,
} from '../lib/helpers';
import {
  StockistWrapper,
  StockistsSection,
} from './styles/sections/stockistsStyles';
import StockistsDelivery from './StockistsDelivery';
import { ZIP_CODE_QUERY } from './ZipCodeCheck';
import ButtonDark from './styles/ButtonDark';

class Stockists extends Component {
  constructor(props) {
    super(props);

    const stockistsWithZip = mapStockistsToZip(this.props.pageData.stockists);

    this.state = {
      deliveryServicesCount: 2,
      deliveryServices: this.props.pageData.delivery_services,
      retailers: stockistsWithZip,
    };
  }

  viewMoreDeliveryServices = deliveryServicesInZip => {
    // Show 6 more delivery services each time the button is clicked
    if (
      this.state.deliveryServicesCount + 6 <
      deliveryServicesInZip.length - 1
    ) {
      this.setState({
        deliveryServicesCount: this.state.deliveryServicesCount + 6,
      });
    } else {
      this.setState({
        deliveryServicesCount: deliveryServicesInZip.length - 1,
      });
    }
  };

  render() {
    const { pageData, quotesData, newsletterData, zipCodeData } = this.props;

    return (
      <div>
        <Head>
          {pageData.meta_description != null && (
            <title> {pageData.meta_title}</title>
          )}
          {pageData.meta_description != null && (
            <meta name="description" content={pageData.meta_description} />
          )}
          {pageData.keywords != null && (
            <meta name="keywords" content={pageData.keywords} />
          )}
          <link href="https://www.lowellfarms.com/stockists" rel="canonical" />
        </Head>
        <Query query={ZIP_CODE_QUERY}>
          {({ data: { zipCode } }) => {
            const locationInfoByZip =
              zipCode != '' ? zipcodes.lookup(zipCode) : '';
            const zipCodeState =
              locationInfoByZip != '' ? locationInfoByZip.state : '';

            // console.log(distance);
            // console.log(this.state.retailers[0].zip);

            // Find retailers and delivery services closest to zip code
            let closestRetailers = [];
            if (zipCode != '') {
              closestRetailers = findClosestRetailers(
                this.state.retailers,
                zipCode,
                zipcodes
              );
            } else {
              closestRetailers = this.state.retailers;
            }

            let closestDeliveryServices = [];
            if (zipCode != '') {
              closestDeliveryServices = findClosestDeliveryServices(
                this.state.deliveryServices,
                zipCode
              );
            } else {
              closestDeliveryServices = this.state.deliveryServices;
            }

            return (
              <StockistWrapper>
                <StockistsDelivery
                  pageData={pageData}
                  zipCode={zipCode}
                  zipCodeState={zipCodeState}
                  zipCodeData={zipCodeData}
                />

                {closestDeliveryServices.length > 0 && (
                  <StockistsSection className="container">
                    <h2 className="section-title">
                      <span>
                        <img
                          src={pageData.delivery_services_icon.url}
                          alt="Lowell Retailers"
                          width="35"
                        />
                      </span>
                      {RichText.asText(pageData.delivery_services_heading)}
                    </h2>
                    <ul>
                      {closestDeliveryServices.map((deliveryService, index) => {
                        if (index > this.state.deliveryServicesCount)
                          return null;
                        return (
                          <Stockist
                            key={RichText.asText(
                              deliveryService.delivery_service_name
                            )}
                            stockist={deliveryService}
                            stockistType="delivery"
                          />
                        );
                      })}
                    </ul>
                    {this.state.deliveryServicesCount <
                      closestDeliveryServices.length - 1 && (
                      <ButtonDark
                        type="button"
                        onClick={() => {
                          this.viewMoreDeliveryServices(
                            closestDeliveryServices
                          );
                        }}
                        className="view-more-btn"
                      >
                        View More
                      </ButtonDark>
                    )}
                  </StockistsSection>
                )}

                <StockistsSection className="container">
                  <h2 className="section-title">
                    <span>
                      <img
                        src={pageData.retailers_icon.url}
                        alt="Lowell Retailers"
                        width="35"
                      />
                    </span>
                    {RichText.asText(pageData.retailers_heading)}
                  </h2>
                  <ul>
                    {closestRetailers != '' &&
                      closestRetailers.map(retailer => (
                        <Stockist
                          key={RichText.asText(retailer.stockist_name)}
                          stockist={retailer}
                          stockistType="retailer"
                        />
                      ))}
                  </ul>
                </StockistsSection>
                <div className="container-sm">
                  <Quote quotesData={quotesData} index={0} />
                </div>
                <Newsletter newsletterData={newsletterData} page="stockists" />
              </StockistWrapper>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Stockists;
