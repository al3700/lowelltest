/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// A new API request that will create in just a tick
import { getPageApi } from '../api';
// Here we are reusing our layout again
import Stockists from '../components/Stockists';

export default class StockistsPage extends Component {
  static async getInitialProps() {
    // we get the pageId of the post so that we can
    // query the API with it
    const pageId = 'Xev6bxEAABBnXxL4';
    const response = await getPageApi(pageId);
    return {
      page: response,
    };
  }

  render() {
    const { page, newsletter, quotes, zipCodes } = this.props;
    const { data } = page;
    return (
      <Stockists
        pageData={data}
        zipCodeData={zipCodes}
        newsletterData={newsletter}
        quotesData={quotes}
      />
    );
  }
}
