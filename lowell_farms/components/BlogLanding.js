/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { BlogLandingWrapper } from './styles/sections/blogStyles';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';

class BlogLanding extends Component {
  render() {
    const {
      blogEntries,
      pageData
    } = this.props;

    // <Link
    // href={`/post?uid=${entry.uid}`}
    // as={`/post/${entry.uid}`}
    //
    //  >
    //    <div>
    //     <h1>{RichText.asText(blogEntry.title)}</h1>
    //    </div>
    //
    // </Link>


    return (
      <div>
        <Head>
          {pageData.meta_title != null && (
            <title>{pageData.meta_title}</title>
          )}
          {pageData.meta_description != null && (
            <meta name="description" content={pageData.meta_description} />
          )}
          {pageData.keywords != null && (
            <meta name="keywords" content={pageData.keywords} />
          )}
          <link href="https://www.lowellfarms.com/blog" rel="canonical" />
        </Head>



        <BlogLandingWrapper>
          {blogEntries != '' &&
            blogEntries.map((entry, index) => {
              const blogEntry = entry.data;
              return (
                <Link
                  href={`/post?uid=${entry.uid}`}
                  key={
                    blogEntry.title != '' &&
                    blogEntry.title != null &&
                    `${RichText.asText(blogEntry.title)}`
                  }
                >
                  <a>
                    <h1>{RichText.asText(blogEntry.title)}</h1>
                  </a>
                </Link>

              );
            })}


        </BlogLandingWrapper>

      </div>
    );
  }
}

export default BlogLanding;
