/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getPageApi } from '../api';
import InfoPage from '../components/InfoPage';

export default class TermsPage extends Component {
  static async getInitialProps() {
    // Query the Prismic API with the ID of the page
    const pageId = 'XqeVOBEAACQAeC4h';
    const response = await getPageApi(pageId);

    return {
      page: response,
    };
  }

  render() {
    const { page } = this.props;
    const { data } = page;

    return (
      <InfoPage pageData={data} />
    );
  }
}
