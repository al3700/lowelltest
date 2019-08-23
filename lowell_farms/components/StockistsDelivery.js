import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { RichText } from 'prismic-reactjs';
import DeliveryStyles, {
  StockistDeliveryStyles,
} from './styles/DeliveryStyles';
import ZipCodeForm from './ZipCodeForm';

import { TOGGLE_ZIP_MUTATION } from './ZipCodeCheck';

class StockistsDelivery extends Component {
  render() {
    const { pageData, zipCode, zipCodeState, zipCodeData } = this.props;

    // RESTRICT CBD SHIPPING TO SOME STATES
    const CBDExclusionZones =
      zipCodeData.cbd_exclusion_zones != '' &&
      zipCodeData.cbd_exclusion_zones != null
        ? RichText.asText(zipCodeData.cbd_exclusion_zones)
        : '';
    const isInExcludedZone = CBDExclusionZones.includes(zipCodeState);

    // ZIP CODE NOT ENTERED
    if (zipCode == '') {
      return (
        <StockistDeliveryStyles>
          <div>
            <h1>
              {pageData.page_heading != '' &&
                RichText.asText(pageData.page_heading)}
            </h1>
            <DeliveryStyles className="container stockists-delivery">
              <ZipCodeForm
                placeholderText="Your Zip Code:"
                buttonText={RichText.asText(pageData.find_button_text)}
              />
            </DeliveryStyles>
          </div>
        </StockistDeliveryStyles>
      );
    }

    // IN CA
    if (zipCode != '' && zipCodeState == 'CA') {
      return (
        <StockistDeliveryStyles>
          <div className="near-you-section">
            <h1>
              {pageData.near_you_heading != '' &&
                RichText.asText(pageData.near_you_heading)}
            </h1>
            <Mutation mutation={TOGGLE_ZIP_MUTATION}>
              {toggleZipCodeCheck => (
                <button
                  onClick={toggleZipCodeCheck}
                  type="button"
                  className="text-button"
                >
                  Not in {zipCode}? Change location.
                </button>
              )}
            </Mutation>
          </div>
        </StockistDeliveryStyles>
      );
    }
    // OUT OF CA
    if (zipCode != '' && zipCodeState != 'CA') {
      return (
        <StockistDeliveryStyles>
          <div className="not-near-you-section container">
            <h1>
              {pageData.not_near_you_heading != '' &&
                RichText.asText(pageData.not_near_you_heading)}
            </h1>
            <p className="delivery-subheading">
              {pageData.not_near_you_subheading != '' &&
                RichText.asText(pageData.not_near_you_subheading)}
            </p>
            <Mutation mutation={TOGGLE_ZIP_MUTATION}>
              {toggleZipCodeCheck => (
                <button
                  onClick={toggleZipCodeCheck}
                  type="button"
                  className="text-button"
                >
                  Not in {zipCode}? Change location.
                </button>
              )}
            </Mutation>

            <hr />

            <p className="delivery-subheading">
              {isInExcludedZone &&
                pageData.we_ship_to_your_area_no_cbd != '' &&
                RichText.asText(pageData.we_ship_to_your_area_no_cbd)}
              {!isInExcludedZone &&
                pageData.we_ship_to_your_area != '' &&
                RichText.asText(pageData.we_ship_to_your_area)}
            </p>
            <div className="button-row">
              {!isInExcludedZone && (
                <a
                  href={
                    pageData.cbd_button_link != '' &&
                    RichText.asText(pageData.cbd_button_link)
                  }
                  className="gold-btn"
                >
                  Lowell CBD
                </a>
              )}

              <a
                href={
                  pageData.gear_link != '' &&
                  RichText.asText(pageData.gear_link)
                }
                className={`gold-btn ${isInExcludedZone ? ' solo-btn' : ''}`}
              >
                Lowell Gear
              </a>
            </div>
          </div>
        </StockistDeliveryStyles>
      );
    }
    return <div />;
  }
}

export default StockistsDelivery;
