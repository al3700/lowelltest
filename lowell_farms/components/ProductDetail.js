import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import base64 from 'base-64';
import HempProductDetail from './HempProductDetail';
import GearProductDetail from './GearProductDetail';
import Head from 'next/head';

class ProductDetail extends Component {
  render() {
    const {
      pageData,
      quotesData,
      products,
      gearProducts,
      newsletterData,
      stockists,
      deliveryZipCodes,
      zipCodeData,
      sitewideData,
    } = this.props;

    return (
      <div>
        <Query
          query={SINGLE_PRODUCT_QUERY}
          variables={{
            handle: this.props.handle,
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            if (!data.shop.productByHandle) <p>This item no longer exists</p>;

            // Create an object of Prismic data with the Shopify IDs as keys
            const prismicProductData = {};

            // console.log(products);
            // return <p>Test</p>;

            for (let i = 0; i < products.length; i++) {
              // console.log(products[i].data.shopify_product != null);
              const productId =
                products[i].data.shopify_product != '' &&
                products[i].data.shopify_product != null
                  ? products[i].data.shopify_product.id
                  : '';
              prismicProductData[productId] = products[i];
            }
            for (let i = 0; i < gearProducts.length; i++) {
              const productId =
                gearProducts[i].data.shopify_product != ''
                  ? gearProducts[i].data.shopify_product.id
                  : '';
              prismicProductData[productId] = gearProducts[i];
            }

            const selectedProduct = data.shop.productByHandle;

            const selectedProductCollection =
              selectedProduct.collections.edges[0].node.handle;
            const shopifyId = base64.decode(selectedProduct.id);
            const productId = /[^/]*$/.exec(shopifyId)[0];
            const productInfo = prismicProductData[productId]
              ? prismicProductData[productId].data
              : false;

            let productDetailTemplate;

            // console.log(productInfo);

            if (
              selectedProductCollection == 'cannabis' ||
              selectedProductCollection == 'cbd'
            ) {
              productDetailTemplate = (
                <HempProductDetail
                  shopifyProduct={selectedProduct}
                  productInfo={productInfo}
                  pageData={pageData}
                  quotesData={quotesData}
                  newsletterData={newsletterData}
                  stockists={stockists}
                  deliveryZipCodes={deliveryZipCodes}
                  zipCodeData={zipCodeData}
                />
              );
            } else {
              productDetailTemplate = (
                <GearProductDetail
                  shopifyProduct={selectedProduct}
                  pageData={pageData}
                  quotesData={quotesData}
                  newsletterData={newsletterData}
                  productInfo={productInfo}
                  zipCodeData={zipCodeData}
                  sitewideData={sitewideData}
                />
              );
            }

            return <div>{productDetailTemplate}</div>;
          }}
        </Query>
      </div>
    );
  }
}

export default ProductDetail;

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($handle: String!) {
    shop {
      productByHandle(handle: $handle) {
        id
        title
        handle
        description
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
`;
