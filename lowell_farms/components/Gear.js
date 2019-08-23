/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import Collection from './Collection';
import ButtonGold from './styles/ButtonGold';
import HeaderStyles from './styles/HeaderStyles';
import Newsletter from './Newsletter';
import { CalloutWrapper } from './styles/sections/gearStyles';
import LearnMore from './styles/LearnMore';

class GearPage extends Component {
  render() {
    const { pageData, quotesData, newsletterData, products } = this.props;
    const heroBgImageUrl = pageData.hero_background_image.url;
    // console.log(pageData);

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
          <link href="https://www.lowellherb.co/gear" rel="canonical" />
        </Head>
        <HeaderStyles
          style={{
            background: `#DEE0DB url(${heroBgImageUrl})`,
            backgroundSize: 'cover',
          }}
        >
          <h1 className="gear-heading">
            {pageData.hero_heading != '' &&
              RichText.asText(pageData.hero_heading)}
          </h1>
          <img
            src={pageData.hero_image.url}
            alt="Lowell Herb Co CBD"
            width="200"
            className="hero-image"
          />
        </HeaderStyles>

        <CalloutWrapper>
          <Collection handle="Gear" limit={100} products={products} />

          <LearnMore className="container">
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
          </LearnMore>
        </CalloutWrapper>
        <Newsletter newsletterData={newsletterData} page="cbd" />
      </main>
    );
  }
}

export default GearPage;
