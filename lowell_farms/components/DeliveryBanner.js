import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { RichText } from 'prismic-reactjs';
import zipcodes from 'zipcodes';
import { ZIP_CODE_QUERY } from './ZipCodeCheck';
import DeliveryBarStyles from './styles/DeliveryBarStyles';

const ZIP_BANNER_QUERY = gql`
  query {
    zipCodeBannerShowing @client
  }
`;

const TOGGLE_ZIP_BANNER_MUTATION = gql`
  mutation {
    toggleZipBanner @client
  }
`;

class DeliveryBanner extends Component {
  state = {
    slide: 0, // How much should the Navbar slide up or down
    lastScrollY: 0, // Keep track of current position in state
    position: 'down',
  };

  componentDidMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      this.setState({ position: 'up' });
    } else {
      this.setState({ position: 'down' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    const { zipCodeData, handle } = this.props;

    const cannabisZipCodes = zipCodeData.cannabis_delivery_zones;

    const deliveryZipCodes = cannabisZipCodes.map(
      zipCodeItem => zipCodeItem.zip_code
    );

    return (
      <Query query={ZIP_BANNER_QUERY}>
        {({ data: { zipCodeBannerShowing } }) => (
          <Query query={ZIP_CODE_QUERY}>
            {({ data: { zipCode } }) => {
              if (zipCode == '') return null;

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
              if (handle == 'CBD' && isInExcludedZone && zipCodeState == 'CA') {
                screen = 'cbd-stockists';
              } else if (
                (handle == 'CBD' &&
                  zipCodeData.cbd_shipping_launched == 'false') ||
                (handle == 'CBD' && isInExcludedZone)
              ) {
                screen = 'cbd-not-available';
              } else if (handle == 'CBD' && zipCodeState != 'CA') {
                screen = 'cbd-ship';
              }

              // console.log(screen);

              // CANNABIS - Display stockists if in CA but not in delivery zone
              // If not in CA show not available screen
              // If in delivery zone enable buy buttons and hide this section completely (default return)
              if (
                handle == 'Cannabis' &&
                zipCodeState == 'CA' &&
                (!deliveryZipCodes.includes(zipCode) ||
                  zipCodeData.delivery_service_launched != 'true')
              ) {
                screen = 'cannabis-stockists';
              } else if (handle == 'Cannabis' && zipCodeState == 'CA') {
                screen = 'cannabis-deliver';
              }

              // WE DELIVER CANNABIS TO YOUR LOCATION SCREEN
              if (screen == 'cannabis-deliver') {
                return (
                  <DeliveryBarStyles
                    zipUpdated={zipCodeBannerShowing}
                    position={this.state.position}
                  >
                    <p>
                      {zipCodeData.cannabis_delivery_zone_notification != '' &&
                        RichText.asText(
                          zipCodeData.cannabis_delivery_zone_notification
                        )}
                    </p>
                  </DeliveryBarStyles>
                );
              }

              // CANNABIS STOCKISTS SCREEN (IN CA, OUTSIDE DELIVERY ZONE)===========
              if (screen == 'cannabis-stockists') {
                return (
                  <DeliveryBarStyles
                    zipUpdated={zipCodeBannerShowing}
                    position={this.state.position}
                  >
                    <p>
                      {zipCodeData.cannabis_available_for_purchase_notificiation !=
                        '' &&
                        RichText.asText(
                          zipCodeData.cannabis_available_for_purchase_notificiation
                        )}
                    </p>
                  </DeliveryBarStyles>
                );
              }

              // STOCKISTS SCREEN (CBD IN CA) ===========
              if (screen == 'cbd-stockists') {
                return (
                  <DeliveryBarStyles
                    zipUpdated={zipCodeBannerShowing}
                    position={this.state.position}
                  >
                    <p>
                      {zipCodeData.cbd_available_for_purchase_notification !=
                        '' &&
                        RichText.asText(
                          zipCodeData.cbd_available_for_purchase_notification
                        )}
                    </p>
                  </DeliveryBarStyles>
                );
              }

              // WE SHIP TO YOUR LOCATION SCREEN (OUT OF CA)
              if (screen == 'cbd-ship') {
                return (
                  <DeliveryBarStyles
                    zipUpdated={zipCodeBannerShowing}
                    position={this.state.position}
                  >
                    <p>
                      {zipCodeData.cbd_available_for_shipping_notification !=
                        '' &&
                        RichText.asText(
                          zipCodeData.cbd_available_for_shipping_notification
                        )}
                    </p>
                  </DeliveryBarStyles>
                );
              }

              if (screen == 'cbd-not-available') {
                return (
                  <DeliveryBarStyles
                    zipUpdated={zipCodeBannerShowing}
                    position={this.state.position}
                  >
                    <p>
                      {zipCodeData.cbd_not_available_notification != '' &&
                        RichText.asText(
                          zipCodeData.cbd_not_available_notification
                        )}
                    </p>
                  </DeliveryBarStyles>
                );
              }

              // Cannabis & not in delivery zone
              return (
                <DeliveryBarStyles
                  zipUpdated={zipCodeBannerShowing}
                  style={{
                    top: `${this.state.position}`,
                  }}
                >
                  <p>
                    {zipCodeData.cannabis_not_available_notification != '' &&
                      RichText.asText(
                        zipCodeData.cannabis_not_available_notification
                      )}
                  </p>
                </DeliveryBarStyles>
              );
            }}
          </Query>
        )}
      </Query>
    );
  }
}

export default DeliveryBanner;
export { ZIP_BANNER_QUERY, TOGGLE_ZIP_BANNER_MUTATION };
