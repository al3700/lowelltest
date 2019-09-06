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
import BenefitsList from './styles/BenefitsList';
import Newsletter from './Newsletter';
import Delivery from './Delivery';
import DeliveryBanner from './DeliveryBanner';
import Quote from './Quote';

class Cannabis extends Component {
  render() {
    const {
      pageData,
      quotesData,
      newsletterData,
      products,
      deliveryZipCodes,
      zipCodeData,
      collectionHandle,
      productCategory
    } = this.props;
    const heroBgImageUrl = pageData.hero_background_image.url;


    return (
      <PageWrapper>
        <main className={`${productCategory.toLowerCase()}-subpage ${collectionHandle.toLowerCase()}-landing`}>
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
              background: `#E8E7E5 url(${heroBgImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom'
            }}
            className="header-section"
          >
            <h1>
              {pageData.hero_heading != '' &&
                RichText.render(pageData.hero_heading)}
            </h1>
            <img
              src={pageData.hero_image != '' && pageData.hero_image.url}
              alt="Lowell Herb Co Cannabis"
              width="200"
              className="hero-image"
            />
          </HeaderStyles>


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

          <CalloutWrapper>
            <Collection
              handle={collectionHandle}
              productCategory={productCategory}
              products={products}
              deliveryZipCodes={deliveryZipCodes}
              limit={60}
              zipCodeData={zipCodeData}
            />

            {/* QUOTE SECTION */}
            <div className="quote container">
            <Quote quotesData={quotesData} index={4} styleClass="last-quote" />
            </div>

          </CalloutWrapper>





          <Newsletter newsletterData={newsletterData} page="cannabis" />
        </main>
      </PageWrapper>
    );
  }
}

export default Cannabis;

const PageWrapper = styled.div`
  .cannabis-subpage {
    .intro-block {
      background: #E8E7E5;
    }
  }
  .cbd-subpage {
    .intro-block {
      background: #D4D7CE;
    }
  }

  .smokes-landing {
    .header-section img {
      width: 80%;
      max-width: 900px;
      margin-top: 40px;
    }
  }
`;

const CalloutWrapper = styled.div`
  background-color: #ecebe9;
  padding-top: 60px;
  padding-bottom: 0;



  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
    .quote {
      margin-top: 0;
    }
  }
`;
