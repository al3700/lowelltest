import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import zipcodes from 'zipcodes';
import DeliveryStyles from './styles/DeliveryStyles';
import {
  linkResolver,
  mapStockistsToZip,
  findClosestDeliveryServices,
  findClosestRetailers,
} from '../lib/helpers';
import ZipCodeForm from './ZipCodeForm';
import Stockist from './Stockist';
import { TOGGLE_ZIP_MUTATION, ZIP_CODE_QUERY } from './ZipCodeCheck';

class Delivery extends Component {
  constructor(props) {
    super(props);

    const stockistsWithZip = mapStockistsToZip(this.props.stockists.stockists);

    this.state = {
      deliveryServices: this.props.stockists.delivery_services,
      retailers: stockistsWithZip,
    };
  }

  render() {
    const {
      deliveryZipCodes,
      pageData,
      deliveryPlaceholderText,
      deliveryButtonText,
      handle,
      stockists,
      zipCodeData,
    } = this.props;

    const deliveryClass = handle == 'CBD' ? 'cbd-delivery' : '';

    return (
      <Query query={ZIP_CODE_QUERY}>
        {({ data: { zipCode } }) => {
          // GET STATE FROM ZIP CODE
          const locationInfoByZip =
            zipCode != '' ? zipcodes.lookup(zipCode) : '';
          const zipCodeState =
            locationInfoByZip != '' ? locationInfoByZip.state : '';

          // LOGIC TO DETERMINE WHICH SCREEN SHOULD BE SHOWN
          let screen;
          let CBDExclusionZones;
          let isInExcludedZone;

          if (handle == 'CBD') {
            // RESTRICT CBD SHIPPING TO SOME STATES
            CBDExclusionZones =
              zipCodeData.cbd_exclusion_zones != '' &&
              zipCodeData.cbd_exclusion_zones != null
                ? RichText.asText(zipCodeData.cbd_exclusion_zones)
                : '';
            isInExcludedZone = CBDExclusionZones.includes(zipCodeState);
          }

          // CBD - Display stockists if in CA,
          // If outside CA -  CBD can be shipped so enable buy buttons and hide this section (default return)
          if (handle == 'CBD' && isInExcludedZone) {
            screen = 'ship';
          }

          // CANNABIS - Display stockists if in CA but not in delivery zone
          // If not in CA show not available screen
          // If in delivery zone enable buy buttons and hide this section completely (default return)
          if (
            handle == 'Cannabis' &&
            zipCodeState == 'CA' &&
            !deliveryZipCodes.includes(zipCode)
          ) {
            screen = 'stockists';
          } else if (handle == 'Cannabis' && zipCodeState != 'CA') {
            screen = 'ship';
          }

          // EMPTY ZIP CODE SCREEN
          if (zipCode == '') {
            return (
              <DeliveryStyles className={deliveryClass}>
                <div className="inner-wrapper">
                  <h2>
                    {pageData.delivery_heading != '' &&
                      RichText.asText(pageData.delivery_heading)}
                  </h2>
                  <p className="delivery-subheading">
                    {pageData.delivery_text != '' &&
                      RichText.asText(pageData.delivery_text)}
                  </p>
                  <ZipCodeForm
                    placeholderText={deliveryPlaceholderText}
                    buttonText={deliveryButtonText}
                  />

                  <div className="not-in-ca">
                    {pageData.ca_text != '' &&
                      RichText.render(pageData.ca_text, linkResolver)}
                  </div>
                </div>
              </DeliveryStyles>
            );
          }

          // WE SHIP TO YOUR LOCATION SCREEN
          if (screen == 'ship') {
            return (
              <DeliveryStyles className={deliveryClass}>
                <div className="not-available-wrapper">
                  <div className="inner-wrapper">
                    <h2>
                      {pageData.not_available_heading != null &&
                        pageData.not_available_heading != '' &&
                        RichText.asText(pageData.not_available_heading)}
                    </h2>
                    <p className="delivery-subheading">
                      {pageData.not_available_text != null &&
                        pageData.not_available_text != '' &&
                        RichText.asText(pageData.not_available_text)}
                    </p>
                    <div className="button-row">
                      {pageData.cbd_link != null && (
                        <Link
                          href={
                            pageData.cbd_link != '' &&
                            RichText.asText(pageData.cbd_link)
                          }
                        >
                          <a className="gold-btn">Lowell CBD</a>
                        </Link>
                      )}

                      <Link
                        href={
                          pageData.gear_link != '' &&
                          RichText.asText(pageData.gear_link)
                        }
                      >
                        <a
                          className={`gold-btn ${
                            pageData.cbd_link == null ? ' solo-btn' : ''
                          }`}
                        >
                          Lowell Gear
                        </a>
                      </Link>
                    </div>
                    <Mutation mutation={TOGGLE_ZIP_MUTATION}>
                      {toggleZipCodeCheck => (
                        <a
                          href="#"
                          onClick={toggleZipCodeCheck}
                          className="text-button"
                        >
                          Not in {zipCode}? Change location.
                        </a>
                      )}
                    </Mutation>
                  </div>
                </div>
              </DeliveryStyles>
            );
          }

          // STOCKISTS SCREEN ===========
          if (screen == 'stockists') {
            const closestRetailers = findClosestRetailers(
              this.state.retailers,
              zipCode,
              zipcodes
            );

            const closestDeliveryServices = findClosestDeliveryServices(
              this.state.deliveryServices,
              zipCode
            );

            const colClass =
              closestDeliveryServices.length > 0 ? 'cols-60p' : '';

            return (
              <DeliveryStyles className={`deliveryClass ${deliveryClass}`}>
                <div className="no-delivery-wrapper">
                  <div className="inner-wrapper">
                    <h2 className="delivery-section-title">
                      {pageData.stockists_heading != null &&
                        pageData.stockists_heading != '' &&
                        RichText.asText(pageData.stockists_heading)}
                    </h2>

                    <div className={`${colClass} stockists-and-retailers`}>
                      <div>
                        <h2 className="section-title">
                          {RichText.asText(stockists.retailers_heading)}
                        </h2>

                        <ul>
                          {closestRetailers != '' &&
                            closestRetailers.map((retailer, index) => {
                              if (index > 2) return null;
                              return (
                                <div className="stockist-item">
                                  <div>
                                    <span>
                                      <img
                                        src={stockists.retailers_icon.url}
                                        alt="Lowell Retailers"
                                        width="35"
                                      />
                                    </span>
                                  </div>
                                  <Stockist
                                    key={RichText.asText(
                                      retailer.stockist_name
                                    )}
                                    stockist={retailer}
                                    stockistType="retailer"
                                  />
                                </div>
                              );
                            })}
                        </ul>
                      </div>
                      {/* Show delivery services if they exist */}
                      {closestDeliveryServices.length > 0 && (
                        <div>
                          <h2 className="section-title">
                            {RichText.asText(
                              stockists.delivery_services_heading
                            )}
                          </h2>
                          <ul>
                            {closestDeliveryServices.map(
                              (deliveryService, index) => {
                                if (index > 2) return null;
                                return (
                                  <div className="stockist-item">
                                    <div>
                                      <span>
                                        <img
                                          src={
                                            stockists.delivery_services_icon.url
                                          }
                                          alt="Lowell Retailers"
                                          width="35"
                                        />
                                      </span>
                                    </div>
                                    <Stockist
                                      key={RichText.asText(
                                        deliveryService.delivery_service_name
                                      )}
                                      stockist={deliveryService}
                                      stockistType="delivery"
                                    />
                                  </div>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      )}
                    </div>

                    <Link href="/stockists">
                      <button className="dark-button" type="button">
                        {pageData.stockists_button_text != null &&
                          pageData.stockists_button_text != '' &&
                          RichText.asText(pageData.stockists_button_text)}
                      </button>
                    </Link>
                    <Mutation mutation={TOGGLE_ZIP_MUTATION}>
                      {toggleZipCodeCheck => (
                        <a
                          href="#"
                          onClick={toggleZipCodeCheck}
                          className="text-button"
                        >
                          Not in {zipCode}? Change location.
                        </a>
                      )}
                    </Mutation>
                  </div>
                </div>
              </DeliveryStyles>
            );
          }

          // CBD & Not in California
          // Cannabis & in Delivery zone
          return <div />;
        }}
      </Query>
    );
  }
}

export default Delivery;
