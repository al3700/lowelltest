import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import zipcodes from 'zipcodes';
import { LOCAL_STATE_QUERY } from '../components/Cart';
import { ZIP_SCREEN_QUERY } from '../components/ZipCodeCheck';
import { ZIP_CODE_BANNER_QUERY } from '../components/ZipCodeCheck';
import { MOBILE_MENU_OPEN_QUERY } from '../components/MobileMenu';
import {
  CHECKOUT_QUERY,
  CREATE_CHECKOUT_MUTATION,
} from '../components/AddToCart';

function createClient() {
  return new ApolloClient({
    uri: 'https://lowellherb.myshopify.com/api/graphql',
    request: operation => {
      operation.setContext({
        headers: {
          'X-Shopify-Storefront-Access-Token':
            '2d5fb5b288da9ef8f285ffc9bd99be26',
        },
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart(_, variables, { cache }) {
            // read the cartOpen value from the cache
            const { cartOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            const data = {
              data: { cartOpen: !cartOpen },
            };
            cache.writeData(data);
            return data;
          },
          toggleMobileMenu(_, variables, { cache }) {
            // read the cartOpen value from the cache
            const { mobileMenuOpen } = cache.readQuery({
              query: MOBILE_MENU_OPEN_QUERY,
            });
            const data = {
              data: { mobileMenuOpen: !mobileMenuOpen },
            };
            cache.writeData(data);
            return data;
          },
          toggleZipCodeCheck(_, variables, { cache }) {
            // read the zipCodeCheckOpen value from the cache
            const { zipCodeCheckOpen } = cache.readQuery({
              query: ZIP_SCREEN_QUERY,
            });

            const data = {
              data: {
                zipCodeBannerShowing: false,
                zipCodeCheckOpen: !zipCodeCheckOpen,
              },
            };

            cache.writeData(data);

            return data;
          },
          createOrUpdateCheckout(_, variables, { cache }) {
            // read the zipCodeCheckOpen value from the cache
            const { checkout } = cache.readQuery({
              query: CHECKOUT_QUERY,
            });

            console.log(checkout);

            const data = {
              data: {
                cartOpen: true,
              },
            };

            cache.writeData(data);
            return data;
          },
          updateZipCode(_, variables, { cache }) {
            // read the zipCodeCheckOpen value from the cache
            // console.log(variables);

            const data = {
              data: variables,
            };

            localStorage.setItem('zipCode', variables.zipCode);

            const locationInfoByZip = zipcodes.lookup(
              zipCode
            );

            cache.writeData({
              data: {
                zipCodeBannerShowing: true,
                zipCodeCheckOpen: false,
              },
            });

            // Hide Delivery banner after a handful of seconds
            setTimeout(function() {
              cache.writeData({
                data: {
                  zipCodeBannerShowing: false,
                },
              });
            }, 7000);

            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        cartOpen: false,
        zipCodeCheckOpen: false,
        zipCodeBannerShowing: true,
        zipCode: '',
        mobileMenuOpen: false,
        checkout: {
          id: '',
          lineItems: {
            edges: [
              {
                node: {
                  id: '',
                  quantity: 0,
                  title: '',
                  variant: {
                    id: '',
                    title: '',
                    image: {
                      src: '',
                    },
                    price: '',
                  },
                },
              },
            ],
            __typename: '',
          },
          webUrl: '',
          __typename: '',
          totalTax: '',
          totalPrice: '',
          subtotalPrice: '',
        },
        checkoutId: '',
      },
    },
  });
}

export default withApollo(createClient);
