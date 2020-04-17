/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// A new API request that will create in just a tick
import { getPageApi } from '../api';
// Here we are reusing our layout again
import Menu from '../components/Menu';

export default class MenuPage extends Component {
  static async getInitialProps() {
    // we get the pageId of the post so that we can
    // query the API with it
    const pageId = 'XpohphIAACIAuix5';
    const response = await getPageApi(pageId);
    return {
      page: response,
    };
  }

  render() {
    const { page, sitewideData } = this.props;
    const { data } = page;
    return (
      <Menu
        pageData={data}
        sitewideData={sitewideData.data}
      />
    );
  }
}
