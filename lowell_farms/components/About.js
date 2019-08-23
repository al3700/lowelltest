/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import shuffle from 'shuffle-array';
import { linkResolver } from '../lib/helpers';
import InstagramCard from './InstagramCard';
import Quote from './Quote';
import {
  AboutWrapper,
  ContactSection,
  PledgeSection,
  StorySection,
} from './styles/sections/aboutStyles';

class About extends Component {
  state = {
    numberPostsPerRow: 6, // How much should the Navbar slide up or down
  };

  componentDidMount() {
    let numPostsOnLoad;
    if (window.innerWidth < 960) {
      numPostsOnLoad = 3;
    } else if (window.innerWidth < 1200) {
      numPostsOnLoad = 4;
    } else {
      numPostsOnLoad = 6;
    }
    this.setState({ numberPostsPerRow: numPostsOnLoad });

    // When this component mounts, begin listening for scroll changes
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 960 && this.state.numberPostsPerRow != 3) {
      this.setState({ numberPostsPerRow: 3 });
    } else if (
      windowWidth <= 1200 &&
      windowWidth >= 960 &&
      this.state.numberPostsPerRow != 4
    ) {
      this.setState({ numberPostsPerRow: 4 });
    } else if (windowWidth > 1200 && this.state.numberPostsPerRow != 6) {
      this.setState({ numberPostsPerRow: 6 });
    }
  };

  render() {
    const { pageData, quotesData } = this.props;

    const { instagram_tall, instagram_square } = pageData;
    const instagramTallShuffled = shuffle(instagram_tall);
    const instagramSquareShuffled = shuffle(instagram_square);

    // console.log(this.state.numberPostsPerRow);

    const numberPostsPerRow = this.state.numberPostsPerRow || 6;
    const bgImageUrl =
      pageData.our_story_background_image != '' &&
      pageData.our_story_background_image.url;

    let instagramTallIndex = 0;
    let instagramSquareIndex = 0;
    let quotesIndex = 0;
    const greatestArrayLength =
      instagramTallShuffled.length > instagramSquareShuffled.length
        ? instagramTallShuffled.length
        : instagramSquareShuffled.length;
    const numberLoops = Math.floor(greatestArrayLength / numberPostsPerRow);

    function repeatPress() {
      const htmlToRender = [];

      // Repeat Instagram posts and quotes as long as there are 3 tall or square posts left to show.
      // Alternate between tall and square rows of posts, with a quote between each row.
      for (let i = 0; i < numberLoops; i++) {
        if (instagramTallIndex < instagramTallShuffled.length - 2) {
          htmlToRender.push(
            <section className="instagram-tall">
              <div className="container-xl">
                <div className={`cols-${numberPostsPerRow}-even no-gutters`}>
                  {instagramTallShuffled
                    .slice(
                      instagramTallIndex,
                      numberPostsPerRow + instagramTallIndex
                    )
                    .map((post, index) => (
                      <InstagramCard
                        key={
                          post.tall_instagram_handle != '' &&
                          RichText.asText(post.tall_instagram_handle) + index
                        }
                        post={post}
                        format="tall"
                      />
                    ))}
                </div>
              </div>
            </section>
          );
          instagramTallIndex += numberPostsPerRow;

          if (quotesIndex < quotesData.length - 1) {
            htmlToRender.push(
              <Quote quotesData={quotesData} index={quotesIndex} />
            );
            quotesIndex += 1;
          }
        }

        if (instagramSquareIndex < instagramSquareShuffled.length - 2) {
          htmlToRender.push(
            <section className="instagram-square">
              <div className="container-xl">
                <div className={`cols-${numberPostsPerRow}-even no-gutters`}>
                  {instagramSquareShuffled
                    .slice(
                      instagramSquareIndex,
                      numberPostsPerRow + instagramSquareIndex
                    )
                    .map(post => (
                      <InstagramCard
                        key={
                          post.instagram_handle != '' &&
                          RichText.asText(post.instagram_handle)
                        }
                        post={post}
                        format="square"
                      />
                    ))}
                </div>
              </div>
            </section>
          );
          instagramSquareIndex += numberPostsPerRow;

          if (quotesIndex < quotesData.length - 1) {
            htmlToRender.push(
              <Quote quotesData={quotesData} index={quotesIndex} />
            );
            quotesIndex += 1;
          }
        }
      }
      return htmlToRender;
    }

    return (
      <AboutWrapper>
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
          <link href="https://www.lowellfarms.com/about" rel="canonical" />
        </Head>
        {/* ----------------------------------------------
          Contact
        ---------------------------------------------- */}
        <ContactSection>
          <div className="container ">
            <div className="inner-wrapper">
              <div className="cols-44p">
                <div>
                  <h2 className="section-title">
                    {pageData.contact_heading != '' &&
                      RichText.asText(pageData.contact_heading)}
                  </h2>
                  <div className="desc">
                    {pageData.contact_text != '' &&
                      RichText.render(pageData.contact_text, linkResolver)}
                  </div>
                </div>
                <div className="cols-2 points-of-contact">
                  <div>
                    <h5>
                      {pageData.email_heading != '' &&
                        RichText.asText(pageData.email_heading)}
                    </h5>

                    <ul>
                      {pageData.email_addresses != '' &&
                        pageData.email_addresses.map(email => (
                          <li
                            key={
                              email.email_name != '' &&
                              RichText.asText(email.email_name)
                            }
                          >
                            <a
                              href={
                                email.email_address[0] &&
                                `mailto:${RichText.asText(email.email_address)}`
                              }
                            >
                              {email.email_name != '' &&
                                RichText.asText(email.email_name)}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <h5>
                      {pageData.instagram_heading != '' &&
                        RichText.asText(pageData.instagram_heading)}
                    </h5>
                    <ul>
                      {pageData.instagram_links != '' &&
                        pageData.instagram_links.map(instagram => (
                          <li
                            key={
                              instagram.instagram_handle != '' &&
                              RichText.asText(instagram.instagram_handle)
                            }
                          >
                            <a
                              href={
                                instagram.instagram_link != '' &&
                                instagram.instagram_link &&
                                `${RichText.asText(instagram.instagram_link)}`
                              }
                              target="_blank"
                            >
                              {instagram.instagram_handle != '' &&
                                RichText.asText(instagram.instagram_handle)}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContactSection>

        {/* ----------------------------------------------
          STORY
        ---------------------------------------------- */}

        <StorySection
          style={{
            background: `#ecebe9 url(${bgImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
          }}
        >
          <div className="container">
            <h2>
              {pageData.our_story_heading != '' &&
                RichText.asText(pageData.our_story_heading)}
            </h2>
            <div className="desc">
              {pageData.our_story_text &&
                RichText.render(pageData.our_story_text, linkResolver)}
            </div>
          </div>
          <img
            src={pageData.signature.url}
            alt={pageData.our_story_heading[0].text}
          />
        </StorySection>

        {/* ----------------------------------------------
          PLEDGE
        ---------------------------------------------- */}
        <PledgeSection>
          <div className="container">
            <h2>
              {pageData.pledge_heading != '' &&
                RichText.asText(pageData.pledge_heading)}
            </h2>
            <div className="pledge-img">
              <img
                src={pageData.pledge_image && pageData.pledge_image.url}
                alt={
                  pageData.pledge_heading != '' &&
                  RichText.asText(pageData.pledge_heading)
                }
              />
            </div>
          </div>
        </PledgeSection>

        {repeatPress()}
      </AboutWrapper>
    );
  }
}

export default About;
