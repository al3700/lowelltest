


/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getPageApi, getPageByType } from '../api';
import BlogDetail from '../components/BlogDetail';

export default class BlogDetailPage extends Component {
  static async getInitialProps(props) {

  }

  render() {
    return (
      <BlogDetail query="test" />
    );
  }
}
