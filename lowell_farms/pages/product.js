/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getPageApi, getPageByType } from '../api';
import ProductDetail from '../components/ProductDetail';

class productDetailPage extends Component {
  static async getInitialProps() {
    // Query the Prismic API with the ID of the page
    const pageId = 'XKFQDxAAADkksUUv';
    const response = await getPageApi(pageId);

    const productsResponse = await getPageByType('product');
    const gearProductsResponse = await getPageByType('gear_product');

    const stockistsId = 'XJbmbhEAAPHUozLk';
    const stockistsResponse = await getPageApi(stockistsId);

    return {
      page: response,
      products: productsResponse,
      gearProducts: gearProductsResponse,
      stockists: stockistsResponse,
    };
  }

  render() {
    const {
      page,
      quotes,
      products,
      query,
      newsletter,
      gearProducts,
      stockists,
      zipCodes,
      sitewideData,
    } = this.props;
    const { data } = page;

    const deliveryZones = zipCodes.cannabis_delivery_zones.map(
      zipCodeItem => zipCodeItem.zip_code
    );
    return (
      <ProductDetail
        handle={query.handle}
        pageData={data}
        quotesData={quotes}
        products={products}
        gearProducts={gearProducts}
        newsletterData={newsletter}
        stockists={stockists.data}
        deliveryZipCodes={deliveryZones}
        zipCodeData={zipCodes}
        sitewideData={sitewideData.data}
      />
    );
  }
}

export default productDetailPage;
