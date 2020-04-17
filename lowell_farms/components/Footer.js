import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

const FooterWrapper = styled.div`
  background-color: ${props => props.theme.darkGrey};
  color: white;
  font-size: 1rem;
  border-bottom: 10px solid #807768;
  a {
    color: white;
  }
`;

const FooterInner = styled.footer`
  padding: 40px 0;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  a {
    display: block;
    width: 100%;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-family: 'Gotham Bold', sans-serif;
    letter-spacing: 0.09rem;
    margin: 10px 0;
    color: white;
  }
  .col-left {
    @media screen and (min-width: 768px) {
      max-width: 300px;
    }
  }
  .col-right {
    @media screen and (min-width: 768px) {
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }
    p {
      margin-bottom: 0;
    }
  }
  .social-media-links {
    text-align: right;
    @media screen and (max-width: 768px) {
      text-align: center;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    img,
    a {
      display: inline-block;
      width: auto;
      margin-left: 16px;
      margin-bottom: 5px;
      @media screen and (max-width: 768px) {
        margin-left: 8px;
        margin-right: 8px;
      }
      &:hover {
        transform: translateY(1px);
      }
    }
  }
`;

const d = new Date();
const currentYear = d.getFullYear();

class Footer extends Component {
  render() {
    const { sitewideData } = this.props;

    let instagramLink;
    let twitterLink;

    if (RichText.asText(sitewideData.data.instagram_url) != '') {
      instagramLink = (
        <a
          href={RichText.asText(sitewideData.data.instagram_url)}
          target="_blank"
        >
          <img src="../static/instagram.svg" alt="Lowell Herb Co. Instagram" />
        </a>
      );
    }

    if (RichText.asText(sitewideData.data.twitter_url) != '') {
      twitterLink = (
        <a
          href={RichText.asText(sitewideData.data.twitter_url)}
          target="_blank"
        >
          <img src="../static/twitter.svg" alt="Lowell Herb Co. Twitter" />
        </a>
      );
    }

    return (
      <FooterWrapper>
        <FooterInner>
          <div className="container-lg">
            <div className="cols-2">
              <div className="cols-2 col-left">
                <div>
                  <Link href="/cafe">
                    <a>
                      {sitewideData.data.cafe_link_text != '' &&
                          sitewideData.data.cafe_link_text[0].text}
                    </a>
                  </Link>
                  <Link href="/cannabis">
                    <a>
                      {sitewideData.data.cannabis_link_text != '' &&
                          sitewideData.data.cannabis_link_text[0].text}
                    </a>
                  </Link>
                  <Link href="/cbd">
                    <a>
                      {sitewideData.data.cbd_link_text != '' &&
                          sitewideData.data.cbd_link_text[0].text}
                    </a>
                  </Link>
                  <Link href="/gear">
                    <a>
                      {sitewideData.data.gear_link_text != '' &&
                          sitewideData.data.gear_link_text[0].text}
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/stockists">
                    <a>
                      {sitewideData.data.stockists_link_text != '' &&
                          sitewideData.data.stockists_link_text[0].text}
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a>
                      {sitewideData.data.blog_link_text != '' &&
                        sitewideData.data.blog_link_text[0].text}
                    </a>
                  </Link>
                  <Link href="/about">
                    <a>
                      {sitewideData.data.about_link_text != '' &&
                          sitewideData.data.about_link_text[0].text}
                    </a>
                  </Link>
                  {sitewideData.data.show_terms_page && (
                    <Link href="/terms">
                    <a>
                    {sitewideData.data.terms_link_text != '' &&
                    sitewideData.data.terms_link_text[0].text}
                    </a>
                    </Link>
                  )}
                </div>
              </div>
              <div className="col-right">
                <div className="social-media-links">
                  {instagramLink}
                  {twitterLink}
                </div>
                <p>
                  &copy;{currentYear} LOWELL FARMS, LLC. ALL RIGHTS RESERVED
                </p>
              </div>
            </div>
          </div>
        </FooterInner>
      </FooterWrapper>
    );
  }
}

export default Footer;
