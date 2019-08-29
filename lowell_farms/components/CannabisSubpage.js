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
import Quote from './Quote';

class Cannabis extends Component {
  render() {
    const {
      pageData,
      cannabisPageData,
      quotesData,
      newsletterData,
      products,
      deliveryZipCodes,
      zipCodeData,
      stockists,
    } = this.props;
    const heroBgImageUrl = pageData.hero_background_image.url;

    const deliveryPlaceholderText =
      cannabisPageData.delivery_placeholder != '' &&
      RichText.asText(cannabisPageData.delivery_placeholder);
    const deliveryButtonText =
      cannabisPageData.delivery_button_text != '' &&
      RichText.asText(cannabisPageData.delivery_button_text);

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


        <section className="container what-is-cbd">
          <div className="cols-2">
            <div>
              <div className="small-inner">
                <div>
                  <h3>
                    {pageData.about_heading != '' &&
                      RichText.asText(pageData.about_heading)}
                  </h3>
                  <p className="rich-text">
                    {pageData.about_text != '' &&
                      RichText.asText(pageData.about_text)}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="small-inner">
                <h5>
                  {pageData.benefits_heading != '' &&
                    RichText.asText(pageData.benefits_heading)}
                </h5>
                <ul>
                  {pageData.benefits.map(benefit => (
                    <li
                      key={
                        benefit.benefits_item &&
                        RichText.asText(benefit.benefits_item)
                      }
                    >
                      {benefit.benefits_item != '' &&
                        RichText.asText(benefit.benefits_item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CalloutWrapper>
          <Collection
            handle="Smokes"
            productCategory="Cannabis"
            products={products}
            deliveryZipCodes={deliveryZipCodes}
            limit={60}
            zipCodeData={zipCodeData}
          />

        </CalloutWrapper>

        {/* QUOTE SECTION */}
        <div class="container quote">
          <Quote quotesData={quotesData} index={4} styleClass="last-quote" />
        </div>

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
