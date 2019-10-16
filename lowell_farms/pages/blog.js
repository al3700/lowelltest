/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getPageApi, getPageByType } from '../api';
import BlogLanding from '../components/BlogLanding';

export default class Gear extends Component {
  static async getInitialProps() {
    // Query the Prismic API with the ID of the page
    const pageId = 'XZ5CYxAAACkAnv3j';
    const response = await getPageApi(pageId);

    const entriesResponse = await getPageByType('blog_entry');

    return {
      entries: entriesResponse,
      pageData: response
    };
  }

  render() {
    const { entries, pageData } = this.props;

    return (
      <BlogLanding
        blogEntries={entries}
        pageData={pageData}
      />
    );
  }
}
