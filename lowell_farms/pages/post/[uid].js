/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getPageApi, getPageByType } from '../../api';
import BlogDetail from '../../components/BlogDetail';

export default class Gear extends Component {
  static async getInitialProps() {
    const entriesResponse = await getPageByType('blog_entry');

    return {
      entries: entriesResponse
    };
  }

  render() {
    const { entries, query } = this.props;

    entries.sort(function( a, b ){
      return new Date(b.data.article_date) - new Date(a.data.article_date);
    });


    const blogEntry = entries.filter(entry => entry.uid == query.uid);

    return (
      <BlogDetail
        pageData={blogEntry[0]}
        entries={entries}
      />
    );
  }
}
