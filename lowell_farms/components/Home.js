/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../lib/helpers';
import ButtonGold from './styles/ButtonGold';
import HeaderStyles from './styles/HeaderStyles';
import ButtonDark from './styles/ButtonDark';
import Newsletter from './Newsletter';
import Quote from './Quote';
import { HomeWrapper } from './styles/sections/homeStyles';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';

class Home extends Component {
  state = {
    videoOpen: false,
  };

  openVideoModal = () => {
    this.setState({ videoOpen: true });
  };

  closeVideoModal = e => {
    if (e.target.closest('.inner') == null) {
      this.setState({ videoOpen: false });
    }
  };

  render() {
    const { pageData, quotesData, newsletterData } = this.props;
    const heroBgImageUrl = pageData.hero_background_image.url;

    const videoClassName = this.state.videoOpen ? 'showing' : '';

    let accessoriesImage;

    const metaTitle =
      pageData.meta_title != null
        ? pageData.meta_title
        : RichText.asText(pageData.page_title);

    if (
      pageData.accessories_image != '' &&
      pageData.accessories_image.url != undefined
    ) {
      accessoriesImage = (
        <LazyLoadImage src={pageData.accessories_image.url}
        alt={
          pageData.gear_heading != '' &&
          RichText.asText(pageData.gear_heading)
        }
        className=""
        effect="opacity"/>
      );
    }

    return (
      <HomeWrapper>
        <Head>
          <title>{metaTitle}</title>
          {pageData.meta_description != null && (
            <meta name="description" content={pageData.meta_description} />
          )}
          {pageData.keywords != null && (
            <meta name="keywords" content={pageData.keywords} />
          )}
          <link href="https://www.lowellherb.co/" rel="canonical" />
        </Head>
        <HeaderStyles
          className="home-header"
          style={{
            background: `#ecebe9 url(${heroBgImageUrl})`,
            backgroundSize: 'cover',
          }}
        >
          <div
            className="overlay"
            style={{
              backgroundColor: `${pageData.color_overlay}`,
              opacity: `${pageData.opacity}`,
            }}
          />
          <div className="container-lg">
            <h1>&ldquo;{quotesData[0].quote[0].text}&rdquo;</h1>
            <div className="publication">
              &ndash; {quotesData[0].publication[0].text}
            </div>
          </div>

          <div
            className={`${videoClassName} video-wrapper`}
            onClick={this.closeVideoModal}
          >
            <img
              src="../static/close_light.svg"
              alt="Close"
              className="close-video"
            />
            <div className="container-sm">
              <div
                className="inner"
                dangerouslySetInnerHTML={{
                  __html: pageData.youtube_video.html,
                }}
              />
            </div>
          </div>
          <ButtonGold className="watch-video" onClick={this.openVideoModal}>
            {pageData.cta_icon.url && (
              <img src={pageData.cta_icon.url} alt="Play Video" width="100" />
            )}
          </ButtonGold>
        </HeaderStyles>

        <section className="cannabis">
          <div className="container">
            <div className="cols-2">
              <div className="vertical-aligner">
                <h2 className="home-section-title ">
                  {pageData.cannabis_heading != '' &&
                    RichText.asText(pageData.cannabis_heading)}
                </h2>
                <h3 className="small-caps gold-text">
                  {pageData.cannabis_subheader != '' &&
                    RichText.asText(pageData.cannabis_subheader)}
                </h3>
                <div className="rich-text section-desc">
                  {pageData.cannabis_intro_text != '' &&
                    RichText.render(pageData.cannabis_intro_text, linkResolver)}
                </div>
              </div>
              <div>
              <LazyLoadImage src={pageData.cannabis_image != '' && pageData.cannabis_image.url}
              alt={
                pageData.cannabis_heading != '' &&
                RichText.asText(pageData.cannabis_heading)
              }
              className=""
              effect="opacity"/>

              </div>
            </div>
            <div className="cols-2 mobile-flex-reverse">
              <div>
              <LazyLoadImage
              src={
                pageData.cannabis_image_2.url != '' &&
                pageData.cannabis_image_2.url
              }
              alt={
                pageData.cannabis_heading != '' &&
                RichText.asText(pageData.cannabis_heading)
              }
              className=""
              effect="opacity"/>

              </div>
              <div className="vertical-aligner">
                <h2 className="home-section-title ">
                  {pageData.cannabis_heading_2 != '' &&
                    RichText.asText(pageData.cannabis_heading_2)}
                </h2>
                <div className="rich-text section-desc">
                  {pageData.cannabis_text_2 != '' &&
                    RichText.render(pageData.cannabis_text_2, linkResolver)}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <a href="/cannabis">
              <ButtonDark className="wider">
                {pageData.cannabis_cta_button_text != '' &&
                  RichText.asText(pageData.cannabis_cta_button_text)}
              </ButtonDark>
            </a>
          </div>
        </section>

        {/* QUOTE SECTION */}
        <div className="container">
          <Quote quotesData={quotesData} index={1} />
        </div>

        {/* CBD Section */}
        <section className="cbd">
          <div className="container">
            <div className="cols-2 intro">
              <div className="vertical-aligner">
                <h2 className="home-section-title ">
                  {pageData.cbd_heading != '' &&
                    RichText.asText(pageData.cbd_heading)}
                </h2>
                <h3 className="small-caps gold-text">
                  {pageData.cbd_subheading != '' &&
                    RichText.asText(pageData.cbd_subheading)}
                </h3>
                <div className="rich-text section-desc">
                  {pageData.cbd_text != '' &&
                    RichText.render(pageData.cbd_text, linkResolver)}
                </div>
              </div>
              <div className="vertical-aligner">
                <div>
                <LazyLoadImage
                src={pageData.cbd_image.url != '' && pageData.cbd_image.url}
                alt={
                  pageData.cbd_heading != '' &&
                  RichText.asText(pageData.cbd_heading)
                }
                className=""
                effect="opacity"/>

                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <a href="/cbd">
              <ButtonDark className="wider">
                {pageData.cbd_button_text != '' &&
                  RichText.asText(pageData.cbd_button_text)}
              </ButtonDark>
            </a>
          </div>
        </section>

        {/* QUOTE SECTION */}
        <div className="container">
          <Quote quotesData={quotesData} index={2} />
        </div>

        {/* ACCESSORIES */}
        <section className="gear">
          <div className="container">
            <div className="cols-2 intro">
              <div>
                <h2 className="home-section-title ">
                  {pageData.gear_heading != '' &&
                    RichText.asText(pageData.gear_heading)}
                </h2>
                <h3 className="small-caps gold-text">
                  {pageData.gear_subheading != '' &&
                    RichText.asText(pageData.gear_subheading)}
                </h3>
                <div className="rich-text section-desc">
                  {pageData.accessories_text != '' &&
                    RichText.render(pageData.accessories_text, linkResolver)}
                </div>
              </div>
              <div className="vertical-aligner">
                <div>{accessoriesImage}</div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="cols-2 mobile-flex-reverse">
              <div className="vertical-aligner">
                <div>
                  <LazyLoadImage
                  src={
                    pageData.clothing_image != '' &&
                    pageData.clothing_image.url
                  }
                  alt={
                    pageData.clothing_heading != '' &&
                    RichText.asText(pageData.clothing_heading)
                  }
                  className=""
                  effect="opacity"/>
                </div>
              </div>
              <div className="vertical-aligner">
                <div className="home-section-title clothing-heading">
                  {pageData.clothing_heading != '' &&
                    RichText.render(pageData.clothing_heading, linkResolver)}
                </div>
                <h3 className="small-caps gold-text">
                  {pageData.clothing_subheading != '' &&
                    RichText.asText(pageData.clothing_subheading)}
                </h3>
                <div className="rich-text section-desc">
                  {pageData.clothing_text != '' &&
                    RichText.render(pageData.clothing_text, linkResolver)}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <a href="/gear">
              <ButtonDark className="wider">
                {pageData.accessories_button_text != '' &&
                  RichText.asText(
                    pageData.accessories_button_text,
                    linkResolver
                  )}
              </ButtonDark>
            </a>
          </div>
        </section>
        {/* QUOTE SECTION */}

        <div className="container">
          <Quote quotesData={quotesData} index={4} styleClass="last-quote" />
        </div>

        <Newsletter newsletterData={newsletterData} page="home" />
      </HomeWrapper>
    );
  }
}

export default Home;
