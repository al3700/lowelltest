/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import Collection from './Collection';
import ButtonLight from './styles/ButtonLight';
import HeaderStyles from './styles/HeaderStyles';
import Newsletter from './Newsletter';
import Delivery from './Delivery';
import DeliveryBanner from './DeliveryBanner';
import Quote from './Quote';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';

class Cannabis extends Component {
  render() {
    const {
      pageData,
      quotesData,
      newsletterData,
      products,
      deliveryZipCodes,
      zipCodeData,
      stockists,
    } = this.props;
    const heroBgImageUrl = pageData.hero_background_image.url;

    const deliveryPlaceholderText =
      pageData.delivery_placeholder != '' &&
      RichText.asText(pageData.delivery_placeholder);
    const deliveryButtonText =
      pageData.delivery_button_text != '' &&
      RichText.asText(pageData.delivery_button_text);

    return (
      <main>
        <Head>
          {pageData.meta_description != null && (
            <title> {pageData.meta_title}</title>
          )}
          {pageData.meta_description != null && (
            <meta name="description" content={pageData.meta_description} />
          )}
          {pageData.keywords != null && (
            <meta name="keywords" content={pageData.keywords} />
          )}
          <link href="https://www.lowellfarms.com/cannabis" rel="canonical" />
        </Head>
        <HeaderStyles
          style={{
            background: `#ecebe9 url(${heroBgImageUrl})`,
            backgroundSize: 'cover',
          }}
        >
          <h1>
            {pageData.hero_heading != '' &&
              RichText.asText(pageData.hero_heading)}
          </h1>
          <img
            src={pageData.hero_image != '' && pageData.hero_image.url}
            alt="Lowell Herb Co Cannabis"
            width="200"
            className="hero-image"
          />
        </HeaderStyles>
        <Delivery
          deliveryZipCodes={deliveryZipCodes}
          pageData={pageData}
          deliveryPlaceholderText={deliveryPlaceholderText}
          deliveryButtonText={deliveryButtonText}
          handle="Cannabis"
          stockists={stockists}
        />
        <DeliveryBanner handle="Cannabis" zipCodeData={zipCodeData} />

        <CalloutWrapper>

          <section className="collection-overview">
            {pageData.collection.map(collection => (
              <section
                key={
                  collection.collection_handle &&
                  RichText.asText(collection.collection_handle)
                }
              >
                <div className="container">
                  {collection.collection_heading != '' && (
                    <h2>{RichText.asText(collection.collection_heading)}</h2>
                  )}
                  {collection.collection_text != '' && (
                    <div className="intro-desc">
                      {RichText.render(collection.collection_text)}
                    </div>
                  )}
                  {collection.collection_url != '' && (
                    <Link href={RichText.asText(collection.collection_url)}>
                      <ButtonLight className="button">Shop Now</ButtonLight>
                    </Link>
                  )}
                </div>
                <Collection
                  productCategory="Cannabis"
                  handle={collection.collection_handle != '' && RichText.asText( collection.collection_handle)}
                  products={products}
                  deliveryZipCodes={deliveryZipCodes}
                  limit={60}
                  zipCodeData={zipCodeData}
                />
              </section>
            ))}


          </section>

          <div className="quote">
            <Quote quotesData={quotesData} index={1} styleClass="last-quote" />
          </div>
        </CalloutWrapper>

        <Newsletter newsletterData={newsletterData} page="cannabis" />
      </main>
    );
  }
}

export default Cannabis;

const CalloutWrapper = styled.div`
  background-color: #ecebe9;
  .quote {
    font-family: 'Lora Regular';
  }
  .col-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .learn-more {
    padding-top: 100px;
  }
  .about-text-col {
    text-align: center;
    .quote {
      font-size: 2.2rem;
      color: #333639;
    }
    .publication {
      color: #6b6653;
      font-size: 1.2rem;
      margin-top: 0;
      margin-bottom: 30px;
    }
  }

  .collection-overview section {
    text-align: center;
    padding-top: 100px;
    padding-bottom: 160px;
    h2 {
      font-family: 'Lora Regular';
      font-size: 5rem;
      color: #6B6653;
      margin-bottom: 14px;
      margin-top: 0;
    }
    .intro-desc {
      font-family: 'Lora Regular';
      color: #333639;
      font-size: 1.8rem;
      letter-spacing: .08rem;
      p {
        margin: 0;
      }
    }
    &:nth-of-type(even) {
      background: #E1DDDB;
    }
    &:last-of-type {
      padding-bottom: 60px;
    }
    .button {
      margin-top: 50px;
      margin-bottom: 100px;
    }
  }

  @media (min-width: 768px) {
    .about-text-col {
      max-width: 420px;
      margin-right: 8%;
      margin-left: auto;
      text-align: left;
    }
  }
  @media (max-width: 768px) {
    padding-bottom: 80px;
    .collection-overview section {
      padding-top: 80px;
      padding-bottom: 90px;
      h2 {
        font-size: 3.5rem;
      }
      .intro-desc {
        font-size: 1.6rem;
      }
      .button {
        margin-top: 40px;
        margin-bottom:80px;
      }
      &:last-of-type {
        padding-bottom: 0;
      }
    }
  }
`;
