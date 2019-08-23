/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getPageApi, getPageByType } from '../api';
import Home from '../components/Home';

export default class HomePage extends Component {
  static async getInitialProps() {
    // Query the Prismic API with the ID of the page
    const pageId = 'XJQ3WREAAEWRl5ja';
    const response = await getPageApi(pageId);

    const productsResponse = await getPageByType('product');

    return {
      page: response,
      products: productsResponse,
    };
  }

  render() {
    const { page, newsletter, quotes, products, sitewideData } = this.props;
    const { data } = page;

    return (
      <Home
        pageData={data}
        newsletterData={newsletter}
        quotesData={quotes}
        products={products}
        sitewideData={sitewideData}
      />
    );
  }
}
