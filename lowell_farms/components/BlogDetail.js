/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { BlogDetailWrapper } from './styles/sections/blogStyles';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import { Mutation, Query } from 'react-apollo';

class BlogDetail extends Component {
  render() {
    const { pageData, entries } = this.props;
    const entry = pageData.data;

    let relatedEntries = entries.filter(blogEntry => blogEntry.uid != pageData.uid);

    const title = entry.title != '' && entry.title !=  null && RichText.asText(entry.title);
    const author = entry.author != '' && entry.author !=  null && RichText.asText(entry.author);
    const detailImage = entry.blog_detail_image != '' && entry.blog_detail_image !=  null && entry.blog_detail_image.url;
    const bodyText = entry.body != '' && entry.body !=  null && RichText.render(entry.body);
    const landingImage = entry.landing_image != '' && entry.landing_image !=  null && entry.landing_image.url;
    let categories = pageData.tags;

    categories = categories.filter(tag => tag.toLowerCase() != 'featured');

    // If user has chosen related articles, get data for those articles. Otherwise pick the latest three articles.
    let relatedArticles = [];
    if (entry.related_articles != '' && entry.related_articles.length > 2) {
      let relatedMeta = entry.related_articles;
      relatedMeta = relatedMeta.slice(0, 3);

      for (var i = 0; i < relatedEntries.length; i++) {
        if (relatedEntries[i].uid == relatedMeta[0].blog.uid || relatedEntries[i].uid == relatedMeta[1].blog.uid || relatedEntries[i].uid == relatedMeta[2].blog.uid) {
          relatedArticles.push(relatedEntries[i]);
        }
      }
    } else {
      relatedArticles = relatedEntries;
      relatedArticles = relatedArticles.slice(0, 3);
    }


    return (
      <BlogDetailWrapper>
        <header>
          <img
          src={detailImage && detailImage}
          alt={
            title != '' &&
            title
          }
          />

            <div className="text-content">
              {categories != '' &&
                categories.map((tag, index) => {
                return (
                  <h4 key={`tag-${index}`} className="category">{ tag }</h4>
                );
              })}
              <h1>{title}</h1>
              {author && (
                <h3 className="author">By {author}</h3>
              )}
            </div>

        </header>

        <section className="text-content">
          {bodyText && (
            <div className="desc">
             {bodyText}
             </div>
          )}
        </section>
        <section className="more-reading">
          <h2>More Reading...</h2>
          <div className="cols-3">
          {relatedArticles != '' &&
            relatedArticles.map((article, index) => {
              let relatedTitle = article.data.title != '' && article.data.title !=  null && RichText.asText(article.data.title);
              let relatedLandingImage = article.data.landing_image != '' && article.data.landing_image !=  null && article.data.landing_image.url;
              let relatedCategories = article.tags;
              relatedCategories = relatedCategories.filter(tag => tag.toLowerCase() != 'featured');

              return (
                <Link
                  href={`/post/[uid]`}
                  as={`/post/${article.uid}`}
                  key={`related-${index}`}
                >
                  <a
                  className="article-square"
                    style={{
                      background: `#ecebe9 url(${relatedLandingImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <span className="text-info">
                      {relatedCategories != '' &&
                        relatedCategories.map((tag, index) => {
                        return (
                          <h5 key={`rtag-${index}`} className="category">{ tag }</h5>
                        );
                      })}
                      <h4>{relatedTitle}</h4>
                    </span>
                  </a>
                </Link>
              );
            })}
          </div>
        </section>


      </BlogDetailWrapper>
    );
  }
}

export default BlogDetail;
