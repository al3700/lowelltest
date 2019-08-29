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
          <link href="https://www.lowellfarms.com/cbd" rel="canonical" />
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
          pageData={pageData}
          deliveryPlaceholderText={deliveryPlaceholderText}
          deliveryButtonText={deliveryButtonText}
          handle="CBD"
          stockists={stockists}
          zipCodeData={zipCodeData}
        />
        <DeliveryBanner handle="CBD" zipCodeData={zipCodeData} />

        <CalloutWrapper>
          <Collection
            handle="CBD"
            productCategory="CBD"
            products={products}
            limit={40}
            zipCodeData={zipCodeData}
          />

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

          <section className="container">
            <div className="cols-2">
              <div>
                <img
                  src={
                    pageData.learn_more_image != '' &&
                    pageData.learn_more_image.url
                  }
                  alt="Learn More about Lowell"
                />
              </div>
              <div className="vertical-aligner">
                <div className="small-inner">
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

        <Newsletter newsletterData={newsletterData} page="cbd" />
      </main>
    );
  }
}

export default CBD;

const CalloutWrapper = styled.div`
      background-color: #DFE0DB;
      padding-top: 60px;
      padding-bottom: 150px;
      .what-is-cbd {
        padding: 100px 0;
        h3 {
          font-size: 3rem;
          font-family: 'Lora Regular', serif;
          letter-spacing: .1rem;
          line-height: 1.1rem;
          color: #6B6653;
        }
        p {
          color: #333639;
          font-size: 1.4rem;
        }
        h4 {
          font-family: 'Lora Regular';
          font-size: 1.8rem;
          letter-spacing: .1rem;
          margin-bottom: 1.8rem;
          margin-top: 4.1rem;
        }
        button {
          padding-top: 20px;
          padding-bottom: 20px;
        }
        h5 {
          color: #69574E;
          font-size: 1.1rem;
          font-family: 'Gotham Bold', sans-serif;
          letter-spacing: .1rem;
          text-transform: uppercase;
          border-bottom: 1px solid #69574E;
          padding-bottom: 8px;
          margin-bottom: 16px;
          @media screen and (max-width: 768px) {
            margin-top: 80px;
          }
        }
        li {
          font-family: 'Nitti Bold', serif;
          font-size: 1.3rem;
          letter-spacing: .08rem;
          text-transform: uppercase;
          margin: 0 0 8px;
          color: #333639;
        }
      }
    }
    .quote {
      font-size: 2.2rem;
      color: #333639;
      line-height: 1.4;
      margin-bottom: 16px;
    }
    .publication {
      margin-bottom: 40px;
    }
    `;
