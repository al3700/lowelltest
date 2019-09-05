/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import Collection from './Collection';
import ButtonGold from './styles/ButtonGold';
import HeaderStyles from './styles/HeaderStyles';
import Newsletter from './Newsletter';
import Delivery from './Delivery';
import DeliveryBanner from './DeliveryBanner';

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
          <Collection
            productCategory="Cannabis"
            handle="Cannabis"
            products={products}
            deliveryZipCodes={deliveryZipCodes}
            limit={60}
            zipCodeData={zipCodeData}
          />

          <section className="container learn-more">
            <div className="cols-2">
              <div>
                <img
                  src={
                    pageData.learn_more_image && pageData.learn_more_image.url
                  }
                  alt="Learn More about Lowell"
                />
              </div>
              <div className="col-right">
                <div className="about-text-col">
                  <p className="quote">
                    &ldquo;{quotesData[0].quote[0].text}&rdquo;
                  </p>
                  <p className="publication small-caps">
                    &ndash; {quotesData[0].publication[0].text}
                  </p>

                  <Link href="/about">
                    <ButtonGold>
                      {pageData.learn_more_button_text != '' &&
                        RichText.asText(pageData.learn_more_button_text)}
                    </ButtonGold>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </CalloutWrapper>

        <Newsletter newsletterData={newsletterData} page="cannabis" />
      </main>
    );
  }
}

export default Cannabis;

const CalloutWrapper = styled.div`
  background-color: #ecebe9;
  padding-top: 60px;
  padding-bottom: 150px;
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
  @media (min-width: 768px) {
    .about-text-col {
      max-width: 420px;
      margin-right: 8%;
      margin-left: auto;
      text-align: left;
    }
  }
`;
