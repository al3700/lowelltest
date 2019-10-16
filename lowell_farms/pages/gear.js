/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getPageApi, getPageByType } from '../api';
import GearPage from '../components/Gear';

export default class Gear extends Component {
  static async getInitialProps() {
    // Query the Prismic API with the ID of the page
    const pageId = 'XKVAvxAAAB2iwm_U';
    const response = await getPageApi(pageId);

    const productsResponse = await getPageByType('gear_product');

    return {
      page: response,
      products: productsResponse,
    };
  }

  render() {
    const { page, newsletter, quotes, products } = this.props;
    const { data } = page;



    return (
      <GearPage
        pageData={data}
        newsletterData={newsletter}
        quotesData={quotes}
        products={products}
      />
    );
  }
}
