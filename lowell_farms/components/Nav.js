import React, { Component } from 'react';
import Link from 'next/link';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import { TOGGLE_MOBILE_MENU } from './MobileMenu';
import { NavWrapper, NavInner } from './styles/NavStyles';
import ToggleCartButton from './ToggleCartButton';
import ToggleZipButton from './ToggleZipButton';
import { MobileNav } from './styles/MobileNavStyles';
import MobileMenu from './MobileMenu';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

class Nav extends Component {
  state = {
    slide: 0, // How much should the Navbar slide up or down
    lastScrollY: 0, // Keep track of current position in state
  };

  componentDidMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      this.setState({ slide: '-200%' });
    } else {
      this.setState({ slide: '0' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    const { router, sitewideData, client, localStorageCheckout } = this.props;
    return (
      <NavWrapper
        style={{
          transform: `translate(0, ${this.state.slide})`,
        }}
      >
        {/* ====================================== */}
        {/* MOBILE NAV */}
        {/* ====================================== */}
        <MobileNav>
          {/* MOBILE NAVBAR ========== */}
          <div
            className="mobile-navbar"
            style={{
              transform: `translate(0, ${this.state.slide})`,
            }}
          >
            <Mutation mutation={TOGGLE_MOBILE_MENU}>
              {toggleMobileMenu => (
                <button
                  className="hamburger"
                  onClick={toggleMobileMenu}
                  type="button"
                >
                  <span />
                  <span />
                  <span />
                </button>
              )}
            </Mutation>

            <Link href="/">
              <a className="home-link">
                <img src="/static/logo_mobile.svg" alt="Mobile Lowell Logo" />
              </a>
            </Link>
            <div className="end-content-wrapper">
              <ToggleCartButton localStorageCheckout={localStorageCheckout} />
              <ToggleZipButton />
            </div>
          </div>

          {/* MOBILE MENU ========== */}
          <MobileMenu sitewideData={sitewideData} />
        </MobileNav>

        {/* ====================================== */}
        {/* DESKTOP NAV */}
        {/* ====================================== */}
        <NavInner>
          {/* LEFT COLUMN ========== */}
          <div className="left-col">

          <Link href="/cafe">
            <a className={router.route == '/cafe' ? 'current-page' : ''}>
              {sitewideData.data.cafe_link_text != '' &&
                sitewideData.data.cafe_link_text[0].text}
            </a>
          </Link>
            <Link href="/cannabis">
              <a className={router.route.includes('/cannabis') ? 'current-page' : ''}>
                {sitewideData.data.cannabis_link_text != '' &&
                  sitewideData.data.cannabis_link_text[0].text}
              </a>
            </Link>
            <Link href="/cbd">
              <a className={router.route.includes('/cbd') ? 'current-page' : ''}>
                {sitewideData.data.cbd_link_text != '' &&
                  sitewideData.data.cbd_link_text[0].text}
              </a>
            </Link>
            <Link href="/gear">
              <a className={router.route == '/gear' ? 'current-page' : ''}>
                {sitewideData.data.gear_link_text != '' &&
                  sitewideData.data.gear_link_text[0].text}
              </a>
            </Link>

          </div>

          {/* LOGO ========== */}
          <Link href="/">
            <a className="home-link hide-mobile-nav">
              <img
                src={sitewideData.data.logo != '' && sitewideData.data.logo.url}
                alt="Home Link"
                title="home"
              />
            </a>
          </Link>

          {/* RIGHT COLUMN ========== */}
          <div className="right-col">
            <Link href="/stockists">
              <a className={router.route == '/stockists' ? 'current-page' : ''}>
                {sitewideData.data.stockists_link_text != '' &&
                  sitewideData.data.stockists_link_text[0].text}
              </a>
            </Link>
            <Link href="/about">
              <a className={router.route == '/about' ? 'current-page' : ''}>
                {sitewideData.data.about_link_text != '' &&
                  sitewideData.data.about_link_text[0].text}
              </a>
            </Link>
            <ToggleCartButton localStorageCheckout={localStorageCheckout} />
            <ToggleZipButton />
          </div>
        </NavInner>
      </NavWrapper>
    );
  }
}

export default Nav;
