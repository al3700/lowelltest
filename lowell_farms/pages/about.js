/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getPageApi } from '../api';
import About from '../components/About';

export default class AboutPage extends Component {
  static async getInitialProps() {
    // Query the Prismic API with the ID of the page
    const pageId = 'XestyhEAAJpcW4rU';
    const response = await getPageApi(pageId);

    return {
      page: response,
    };
  }

  render() {
    const { page, newsletter, quotes } = this.props;
    const { data } = page;

    return (
      <About pageData={data} newsletterData={newsletter} quotesData={quotes} />
    );
  }
}
