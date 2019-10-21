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
import ButtonLight from './styles/ButtonLight';
import HeaderStyles from './styles/HeaderStyles';
import BenefitsList from './styles/BenefitsList';
import Newsletter from './Newsletter';
import Delivery from './Delivery';
import DeliveryBanner from './DeliveryBanner';
import Quote from './Quote';

class CBD extends Component {
  render() {
    const {
      pageData,
      quotesData,
      newsletterData,
      products,
      zipCodeData,
      deliveryZipCodes,
      stockists,
      deliverySectionData,
    } = this.props;
    const heroBgImageUrl = pageData.hero_background_image.url;

    const deliveryPlaceholderText =
      deliverySectionData.delivery_placeholder != '' &&
      RichText.asText(deliverySectionData.delivery_placeholder);
    const deliveryButtonText =
      deliverySectionData.delivery_button_text != '' &&
      RichText.asText(deliverySectionData.delivery_button_text);

    return (
      <main>
        <Head>
          {pageData.meta_title != null && (
            <title> {pageData.meta_title}</title>
          )}
          {pageData.meta_description != null && (
            <meta name="description" content={pageData.meta_description} />
          )}
          {pageData.keywords != null && (
            <meta name="keywords" content={pageData.keywords} />
          )}
          <link href="https://www.lowellfarms.com/cbd" rel="canonical" />

          {pageData.meta_title != null && (
            <meta property="og:title" content={pageData.meta_title} />
          )}
          {pageData.meta_description != null && (
            <meta property="og:description" content={pageData.meta_description} />
          )}
          {pageData.hero_image && (
            <meta property="og:image" content={pageData.hero_image.url} />
          )}
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
            src={pageData.hero_image && pageData.hero_image.url}
            alt="Lowell Herb Co CBD"
            width="200"
            className="hero-image"
          />
        </HeaderStyles>

        <Delivery
          deliveryZipCodes={deliveryZipCodes}
          pageData={deliverySectionData}
          deliveryPlaceholderText={deliveryPlaceholderText}
          deliveryButtonText={deliveryButtonText}
          handle="CBD"
          stockists={stockists}
          zipCodeData={zipCodeData}
        />
        <DeliveryBanner handle="CBD" zipCodeData={zipCodeData} />


        <CalloutWrapper>
        <div className="intro-block">
          <BenefitsList className="container">
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
                    <div className="button-row">
                      <Link href="/cbd/smokes">
                        <ButtonLight className="button">CBD Smokes</ButtonLight>
                      </Link>
                      <Link href="/cbd/flower">
                        <ButtonLight className="button">CBD Flower</ButtonLight>
                      </Link>
                    </div>
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
          </BenefitsList>
        </div>
          <Collection
            handle="CBD"
            productCategory="CBD"
            products={products}
            limit={40}
            zipCodeData={zipCodeData}
          />

          <div className="quote">
            <Quote quotesData={quotesData} index={1} styleClass="last-quote" />
          </div>
        </CalloutWrapper>

        <Newsletter newsletterData={newsletterData} page="cbd" />
      </main>
    );
  }
}

export default CBD;

const CalloutWrapper = styled.div`
      background-color: #DFE0DB;
    .last-quote {
      background: #DFE0DB;
      @media only screen and (max-width: 768px) {
        padding-bottom: 80px;
      }
    }
    .publication {
      margin-bottom: 40px;
    }
    .intro-block {
      background-color: #d1d3cb;
      margin-bottom: 60px;
      .button-row {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .button {
        min-width: auto;
        padding-left: 30px;
        padding-right: 30px;
        width: calc(50% - 5px);
      }
    }
    `;
