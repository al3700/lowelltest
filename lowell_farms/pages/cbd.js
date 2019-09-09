/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getPageApi, getPageByType } from '../api';
import CBD from '../components/CBD';

export default class CBDPage extends Component {
  static async getInitialProps() {
    // Query the Prismic API with the ID of the page
    const pageId = 'XJbjcREAAPPUoyXB';
    const response = await getPageApi(pageId);

    const productsResponse = await getPageByType('product');

    // Delivery section (enter your zip code)
    const deliverySectionId = 'XXa8dhMAACEAK3v3';
    const deliverySectionResponse = await getPageApi(deliverySectionId);

    const stockistsId = 'XJbmbhEAAPHUozLk';
    const stockistsResponse = await getPageApi(stockistsId);

    return {
      page: response,
      products: productsResponse,
      stockists: stockistsResponse,
      deliverySectionContent: deliverySectionResponse,
    };
  }

  render() {
    const {
      page,
      newsletter,
      quotes,
      products,
      stockists,
      zipCodes,
      deliverySectionContent,
    } = this.props;
    const { data } = page;

    const cannabisDeliveryZones = zipCodes.cannabis_delivery_zones.map(
      zipCodeItem => zipCodeItem.zip_code
    );
    return (
      <CBD
        pageData={data}
        newsletterData={newsletter}
        quotesData={quotes}
        products={products}
        stockists={stockists.data}
        zipCodeData={zipCodes}
        deliveryZipCodes={cannabisDeliveryZones}
        deliverySectionData={deliverySectionContent.data}
      />
    );
  }
}
