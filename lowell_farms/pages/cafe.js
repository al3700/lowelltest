/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// A new API request that will create in just a tick
import { getPageApi } from '../api';
// Here we are reusing our layout again
import Cafe from '../components/Cafe';

export default class CafePage extends Component {
  static async getInitialProps() {
    // we get the pageId of the post so that we can
    // query the API with it
    const pageId = 'Xev0AhEAANVmXvaw';
    const response = await getPageApi(pageId);

    const cafeLandingId = 'XevyPhEAAHJmXu7Z';
    const cafeResponse = await getPageApi(cafeLandingId);
    return {
      page: response,
      cafeLandingPage: cafeResponse
    };
  }

  render() {
    const { page, cafeLandingPage, newsletter } = this.props;
    const { data } = page;
    const cafeData = cafeLandingPage.data;
    return (
      <Cafe
        pageData={data}
        newsletterData={newsletter}
        cafePageData={cafeData}
      />
    );
  }
}
