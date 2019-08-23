import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import Link from 'next/link';
import gql from 'graphql-tag';
import { RichText } from 'prismic-reactjs';
import { MobileNav } from './styles/MobileNavStyles';

const MOBILE_MENU_OPEN_QUERY = gql`
  query {
    mobileMenuOpen @client
  }
`;

const TOGGLE_MOBILE_MENU = gql`
  mutation {
    toggleMobileMenu @client
  }
`;

class MobileMenu extends Component {
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
      <Query query={MOBILE_MENU_OPEN_QUERY}>
        {({ data, loading, error }) => {
          const mobileMenuClass = data.mobileMenuOpen
            ? 'mobile-nav-open'
            : 'test';
          // console.log(data);
          return (
            <Mutation mutation={TOGGLE_MOBILE_MENU}>
              {toggleMobileMenu => (
                <div className={`mobile-nav ${mobileMenuClass}`}>
                  <button
                    type="button"
                    className="close-mobile-nav"
                    onClick={toggleMobileMenu}
                  >
                    <img
                      src="/static/close_light.svg"
                      alt="Close mobile menu"
                      title="Close mobile menu"
                    />
                  </button>

                  <Link href="/">
                    <a className="home-logo" onClick={toggleMobileMenu}>
                      <img
                        src={
                          sitewideData.data.logo != '' &&
                          sitewideData.data.logo.url
                        }
                        alt="Home Link"
                        title="home"
                      />
                    </a>
                  </Link>

                  <div className="mobile-nav-links">
                    <Link href="https://www.lowellcafe.com/">
                      <a onClick={toggleMobileMenu}>
                        {sitewideData.data.cafe_link_text != '' &&
                          sitewideData.data.cafe_link_text[0].text}
                      </a>
                    </Link>
                    <Link href="/cannabis">
                      <a onClick={toggleMobileMenu}>
                        {sitewideData.data.cannabis_link_text != '' &&
                          sitewideData.data.cannabis_link_text[0].text}
                      </a>
                    </Link>
                    <Link href="/cbd">
                      <a onClick={toggleMobileMenu}>
                        {sitewideData.data.cbd_link_text != '' &&
                          sitewideData.data.cbd_link_text[0].text}
                      </a>
                    </Link>
                    <Link href="/gear">
                      <a onClick={toggleMobileMenu}>
                        {sitewideData.data.gear_link_text != '' &&
                          sitewideData.data.gear_link_text[0].text}
                      </a>
                    </Link>
                    <Link href="/stockists">
                      <a onClick={toggleMobileMenu}>
                        {sitewideData.data.stockists_link_text != '' &&
                          sitewideData.data.stockists_link_text[0].text}
                      </a>
                    </Link>
                    <Link href="/about">
                      <a onClick={toggleMobileMenu}>
                        {sitewideData.data.about_link_text != '' &&
                          sitewideData.data.about_link_text[0].text}
                      </a>
                    </Link>
                  </div>
                  <div>
                    <div className="social-media-links">
                      {instagramLink}
                      {twitterLink}
                    </div>
                  </div>
                </div>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default MobileMenu;
export { MOBILE_MENU_OPEN_QUERY, TOGGLE_MOBILE_MENU };
