/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { getPageApi, getPageByType } from '../../api';
import SubLandingPage from '../../components/CannabisSubpage';

export default class BlogPost extends Component {
  static async getInitialProps() {
    // Query the Prismic API with the ID of the page
    const pageId = 'XesmLREAAJpcW2kK';
    const response = await getPageApi(pageId);

    const productsResponse = await getPageByType('product');

    // Query the Prismic API with the ID of the page
    const deliverySectionId = 'XeslNREAABpeW2S5';
    const deliverySectionResponse = await getPageApi(deliverySectionId);

    const stockistsId = 'Xev6bxEAABBnXxL4';
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
      deliverySectionContent,
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
      <SubLandingPage
        pageData={data}
        deliverySectionData={deliverySectionContent.data}
        collectionHandle="Smokes"
        productCategory="Cannabis"
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
