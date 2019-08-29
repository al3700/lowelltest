import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import base64 from 'base-64';
import zipcodes from 'zipcodes';
import { RichText } from 'prismic-reactjs';
import Product from './Product';
import { ZIP_CODE_QUERY } from './ZipCodeCheck';

export default class Products extends Component {
  render() {
    const {
      handle,
      productCategory,
      products,
      limit,
      deliveryZipCodes,
      zipCodeData,
    } = this.props;

    const prismicProductData = {};

    for (let i = 0; i < products.length; i++) {
      const productId =
        products[i].data.shopify_product != null &&
        products[i].data.shopify_product != ''
          ? products[i].data.shopify_product.id
          : products[i].uid;
      prismicProductData[productId] = products[i];
    }

    return (
      <div className="container">
        <Query
          query={COLLECTION_QUERY}
          variables={{
            handle,
            limit,
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <Query query={ZIP_CODE_QUERY}>
                {({ data: { zipCode } }) => {
                  // GET STATE FROM ZIP CODE
                  const locationInfoByZip =
                    zipCode != '' ? zipcodes.lookup(zipCode) : '';
                  const zipCodeState =
                    locationInfoByZip != '' ? locationInfoByZip.state : '';
                  let showBuyButton = false;

                  if (handle !== 'Gear') {
                    // RESTRICT CBD SHIPPING TO SOME STATES
                    const CBDExclusionZones =
                      zipCodeData.cbd_exclusion_zones != '' &&
                      zipCodeData.cbd_exclusion_zones != null
                        ? RichText.asText(zipCodeData.cbd_exclusion_zones)
                        : '';
                    showBuyButton =
                      (handle == 'Cannabis' || productCategory == 'Cannabis' &&
                        zipCode != '' &&
                        deliveryZipCodes.includes(zipCode) &&
                        zipCodeData.delivery_service_launched != 'false') ||
                      (handle == 'CBD' || productCategory == 'CBD'&&
                        !CBDExclusionZones.includes(zipCodeState) &&
                        zipCodeData.cbd_shipping_launched != 'false');
                  }

                  return (
                    <div className="cols-3 cols-2-md">
                      {data.shop.collectionByHandle.products.edges.map(
                        product => {
                          const shopifyId = base64.decode(product.node.id);
                          const productId = /[^/]*$/.exec(shopifyId)[0];
                          const productInfo = prismicProductData[productId];
                          return (
                            <Product
                              product={product}
                              key={product.node.id.toString()}
                              productInfo={productInfo}
                              handle={handle}
                              productCategory={productCategory}
                              showBuyButton={showBuyButton}
                            />
                          );
                        }
                      )}
                    </div>
                  );
                }}
              </Query>
            );
          }}
        </Query>
      </div>
    );
  }
}

const COLLECTION_QUERY = gql`
  query COLLECTION_QUERY($handle: String!, $limit: Int!) {
    shop {
      collectionByHandle(handle: $handle) {
        products(first: $limit) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              title
              handle
              availableForSale
              collections(first: 1) {
                edges {
                  node {
                    handle
                  }
                }
              }
              options {
                id
                name
                values
              }
              variants(first: 250) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    id
                    title
                    weight
                    weightUnit
                    selectedOptions {
                      name
                      value
                    }
                    image {
                      src
                    }
                    price
                  }
                }
              }
              images(first: 250) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
