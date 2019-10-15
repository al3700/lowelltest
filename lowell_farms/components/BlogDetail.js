/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import BlogDetailWrapper from './styles/sections/blogStyles';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';

class BlogDetail extends Component {
  render() {
    const {
      query
    } = this.props;
    console.log(query)

    return (
      <div>
        <h1>Hello!</h1>

      </div>
    );
  }
}

export default BlogDetail;
