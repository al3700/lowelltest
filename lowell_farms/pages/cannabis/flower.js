/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { getPageApi, getPageByType } from '../../api';
import SubLandingPage from '../../components/CannabisSubpage';

export default class BlogPost extends Component {
  static async getInitialProps() {
    // Query the Prismic API with the ID of the page
    const pageId = 'XXGmNBMAACAAFV_B';
    const response = await getPageApi(pageId);

    const productsResponse = await getPageByType('product');

    // Delivery section (enter your zip code)
    const deliverySectionId = 'XXax2RMAACEAK00p';
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
      zipCodes,
      deliverySectionContent,
      stockists,
    } = this.props;
    const { data } = page;

    const cannabisDeliveryZones = zipCodes.cannabis_delivery_zones.map(
      zipCodeItem => zipCodeItem.zip_code
    );

    return (
      <SubLandingPage
        pageData={data}
        collectionHandle="Flower"
        productCategory="Cannabis"
        newsletterData={newsletter}
        quotesData={quotes}
        products={products}
        deliveryZipCodes={cannabisDeliveryZones}
        zipCodeData={zipCodes}
        deliverySectionData={deliverySectionContent.data}
        stockists={stockists.data}
      />
    );
  }
}
