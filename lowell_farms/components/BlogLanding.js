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
import Slider from "react-slick";

class BlogLanding extends Component {
  render() {
    const {
      blogEntries,
      pageData
    } = this.props;

    blogEntries.sort(function( a, b ){
      return new Date(b.data.article_date) - new Date(a.data.article_date);
    });

    let gridEntries = [];
    let carouselEntries = [];


    for (var i = 0; i < blogEntries.length; i++) {
      if (blogEntries[i].tags.includes("Featured") || blogEntries[i].tags.includes("featured")) {
        carouselEntries.push(blogEntries[i]);
      } else {
        gridEntries.push(blogEntries[i]);
      }
    }

    var settings = {
      dots: true,
      infinite: true,
      arrows: true,
      autoplay: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

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
        <Slider {...settings}>
        {carouselEntries != '' &&
        carouselEntries.map((entry, index) => {
          let blogEntry = entry.data;
          let title = blogEntry.title != '' && blogEntry.title !=  null && RichText.asText(blogEntry.title);
          let author = blogEntry.author != '' && blogEntry.author !=  null && RichText.asText(blogEntry.author);
          let detailImage = blogEntry.blog_detail_image != '' && blogEntry.blog_detail_image !=  null && blogEntry.blog_detail_image.url;
          let bodyText = blogEntry.body != '' && blogEntry.body !=  null && RichText.render(blogEntry.body);
          let landingImage = blogEntry.landing_image != '' && blogEntry.landing_image !=  null && blogEntry.landing_image.url;
          let categories = entry.tags;

          categories = categories.filter(tag => tag.toLowerCase() != 'featured');

          return (
            <Link
            href={`/post/[uid]`}
            as={`/post/${entry.uid}`}
            key={
              blogEntry.title != '' &&
              blogEntry.title != null &&
              `${RichText.asText(blogEntry.title)}`
            }
            >
            <a
            className="article"
            style={{
              background: `#ecebe9 url(${detailImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            >
            <span className="text-info">
            {categories != '' &&
            categories.map((tag, index) => {
              return (
                <h5 key={`tag-${index}`} className="category">{ tag }</h5>
              );
            })}
            <h4>{title}</h4>

            </span>
            </a>
            </Link>
          );
        })}
        </Slider>
        <div className="carousel">
          <div className="slide">

          </div>
        </div>
        <div className="entries-grid">
          {gridEntries != '' &&
          gridEntries.map((entry, index) => {
            let blogEntry = entry.data;
            let title = blogEntry.title != '' && blogEntry.title !=  null && RichText.asText(blogEntry.title);
            let author = blogEntry.author != '' && blogEntry.author !=  null && RichText.asText(blogEntry.author);
            let detailImage = blogEntry.blog_detail_image != '' && blogEntry.blog_detail_image !=  null && blogEntry.blog_detail_image.url;
            let bodyText = blogEntry.body != '' && blogEntry.body !=  null && RichText.render(blogEntry.body);
            let landingImage = blogEntry.landing_image != '' && blogEntry.landing_image !=  null && blogEntry.landing_image.url;
            let categories = entry.tags;

            return (
              <Link
              href={`/post/[uid]`}
              as={`/post/${entry.uid}`}
              key={
                blogEntry.title != '' &&
                blogEntry.title != null &&
                `${RichText.asText(blogEntry.title)}`
              }
              >
              <a
              className="article-square"
              style={{
                background: `#ecebe9 url(${landingImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              >
              <span className="text-info">
              {categories != '' &&
              categories.map((tag, index) => {
                return (
                  <h5 key={`tag-${index}`} className="category">{ tag }</h5>
                );
              })}
              <h4>{title}</h4>
              </span>
              </a>
              </Link>
            );
          })}
        </div>
        <div className="clearer"></div>
        </BlogLandingWrapper>

      </div>
    );
  }
}

export default BlogLanding;
