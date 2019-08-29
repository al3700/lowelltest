/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { getPageApi, getPageByType } from '../../api';
import CannabisPage from '../../components/CannabisSubpage';

export default class BlogPost extends Component {
  static async getInitialProps() {
    // Query the Prismic API with the ID of the page
    const pageId = 'XWcT1xAAAB8AWmIN';
    const response = await getPageApi(pageId);

    // Query the Prismic API with the ID of the page
    const cannabisPageId = 'XJQ79BEAADCUl60m';
    const cannabisResponse = await getPageApi(cannabisPageId);

    const productsResponse = await getPageByType('product');

    const stockistsId = 'XJbmbhEAAPHUozLk';
    const stockistsResponse = await getPageApi(stockistsId);

    return {
      page: response,
      cannabisPage: cannabisResponse,
      products: productsResponse,
      stockists: stockistsResponse,
    };
  }

  render() {
    const {
      page,
      cannabisPage,
      newsletter,
      quotes,
      products,
      zipCodes,
      stockists,
    } = this.props;
    const { data } = page;

    const cannabisDeliveryZones = zipCodes.cannabis_delivery_zones.map(
      zipCodeItem => zipCodeItem.zip_code
    );

    return (
      <CannabisPage
        pageData={data}
        cannabisPageData={cannabisPage.data}
        newsletterData={newsletter}
        quotesData={quotes}
        products={products}
        deliveryZipCodes={cannabisDeliveryZones}
        zipCodeData={zipCodes}
        stockists={stockists.data}
      />
    );
  }
}
