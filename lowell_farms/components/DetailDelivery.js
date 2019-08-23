import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import zipcodes from 'zipcodes';
import {
  linkResolver,
  mapStockistsToZip,
  findClosestDeliveryServices,
  findClosestRetailers,
} from '../lib/helpers';
import ZipCodeForm from './ZipCodeForm';

import Stockist from './Stockist';
import DeliveryDetailStyles from './styles/DetailDeliveryStyles';
import AddToCart from './AddToCart';
import {
  TOGGLE_ZIP_MUTATION,
  ZIP_SCREEN_QUERY,
  ZIP_CODE_QUERY,
  UPDATE_ZIP_CODE_MUTATION,
} from './ZipCodeCheck';

class DetailDelivery extends Component {
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
      handle,
      stockists,
      shopifyProduct,
      productRoundedPrice,
      zipCodeData,
    } = this.props;

    const deliveryClass = handle == 'CBD' ? 'cbd-delivery' : '';

    return (
      <Query query={ZIP_CODE_QUERY}>
        {({ data: { zipCode } }) => {
          const locationInfoByZip =
            zipCode != '' ? zipcodes.lookup(zipCode) : '';
          const zipCodeState =
            locationInfoByZip != '' ? locationInfoByZip.state : '';

          let screen;

          const CBDExclusionZones =
            zipCodeData.cbd_exclusion_zones != '' &&
            zipCodeData.cbd_exclusion_zones != null
              ? RichText.asText(zipCodeData.cbd_exclusion_zones)
              : '';

          // Show "not available" message if zip code is in a state that is excluded from shipping
          if (
            (handle == 'CBD' && zipCodeData.cbd_shipping_launched != 'true') ||
            (handle == 'CBD' && CBDExclusionZones.includes(zipCodeState))
          ) {
            screen = 'ship';
          }

          // CANNABIS - Display stockists if in CA but not in delivery zone
          // If not in CA show not available screen
          // If in delivery zone enable buy buttons and hide this section completely (default return)
          if (
            handle == 'Cannabis' &&
            zipCodeState == 'CA' &&
            (!deliveryZipCodes.includes(zipCode) ||
              zipCodeData.delivery_service_launched != 'true')
          ) {
            screen = 'stockists';
          } else if (handle == 'Cannabis' && zipCodeState != 'CA') {
            screen = 'ship';
          }

          if (zipCode == '' && handle == 'Cannabis') {
            return (
              <DeliveryDetailStyles className={deliveryClass}>
                <h3 className="small-caps">Price: ${productRoundedPrice}</h3>
                <h2>
                  {pageData.find_lowell_near_you_heading &&
                    RichText.asText(pageData.find_lowell_near_you_heading)}
                </h2>
                <ZipCodeForm
                  placeholderText="Your Zip Code"
                  buttonText="Check My Location"
                />

                <div className="not-in-ca">
                  {pageData.not_in_ca_heading &&
                    RichText.asText(pageData.not_in_ca_heading)}
                </div>
              </DeliveryDetailStyles>
            );
          }
          if (screen == 'ship') {
            return (
              <DeliveryDetailStyles className={deliveryClass}>
                <div className="not-available-wrapper">
                  <h2>
                    {pageData.not_available_for_delivery_heading &&
                      RichText.asText(
                        pageData.not_available_for_delivery_heading
                      )}
                  </h2>
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
              </DeliveryDetailStyles>
            );
          }
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
            return (
              <DeliveryDetailStyles
                className={`deliveryClass ${deliveryClass}`}
              >
                <div className="no-delivery-wrapper">
                  <h2>Here’s where you can find Lowell near {zipCode}…</h2>

                  <div className="stockists-and-retailers">
                    {/* ============================== */}
                    {/* RETAILERS */}
                    {/* ============================== */}
                    <div>
                      <h2 className="section-title small-caps">
                        <span>
                          <img
                            src={stockists.retailers_icon.url}
                            alt="Lowell Retailers"
                            width="25"
                          />
                        </span>
                        {RichText.asText(stockists.retailers_heading)}
                      </h2>

                      <ul>
                        {closestRetailers != '' &&
                          closestRetailers.map((retailer, index) => {
                            if (index > 2) return null;
                            return (
                              <div className="stockist-item">
                                <Stockist
                                  key={RichText.asText(retailer.stockist_name)}
                                  stockist={retailer}
                                  stockistType="retailer"
                                />
                              </div>
                            );
                          })}
                      </ul>
                    </div>
                    {/* ============================== */}
                    {/* Delivery Services */}
                    {/* ============================== */}
                    {closestDeliveryServices.length > 0 && (
                      <div>
                        <h2 className="section-title small-caps">
                          <span>
                            <img
                              src={stockists.delivery_services_icon.url}
                              alt="Lowell Retailers"
                              width="25"
                            />
                          </span>
                          {RichText.asText(stockists.delivery_services_heading)}
                        </h2>

                        <ul>
                          {closestDeliveryServices.map(
                            (deliveryService, index) => {
                              if (index > 2) return null;
                              return (
                                <div className="stockist-item">
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
                    <a className="view-more">
                      VIEW MORE RETAILERS AND DELIVERY SERVICES
                    </a>
                  </Link>
                </div>
              </DeliveryDetailStyles>
            );
          }
          return (
            <AddToCart
              id={shopifyProduct.variants.edges[0].node.id}
              price={productRoundedPrice}
              availableForSale={shopifyProduct.availableForSale}
            />
          );
        }}
      </Query>
    );
  }
}

export default DetailDelivery;
