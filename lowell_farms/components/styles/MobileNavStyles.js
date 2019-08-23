import styled from 'styled-components';

export const MobileNav = styled.nav`
  /* Styles to override desktop styles in NavStyles.js */
  display: none;
  @media only screen and (max-width: 960px) {
    display: block;
    .mobile-navbar {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 100;
      transition: all .3s ease-out;
      background-color: ${props => props.theme.darkGrey};
      .home-link {
        top: 50%;
        left: 48%;
        transform: translate(-50%, -50%);
        &:hover {
          transform: translate(-50%, -50%);
        }
        img {
          width: 150px;

        }
      }
      .toggle-cart {
        padding: 15px 6px;
        background: transparent;
        img {
          width: 16px;
        }
        .cart-count {
          font-size: 9px;
          width: 18px;
          height: 18px;
          clip-path: none;
          border-radius: 50%;
          padding: 0;
          line-height: 15px;
          text-align: center;
          border: 2px solid #2c2c2c;
          color: #2c2c2c;
          position: absolute;
          top: 10px;
          right: -5px;
          background: #C6B68F;
        }
      }
    }
    .zip-code {
      margin: 0;
      padding: 10px 14px !important;
      background-color: transparent;
      position: relative;
      font-size: 1.1rem;
      letter-spacing: .01rem;
      @media only screen and (max-width: 1150px) {
        padding: 31px 25px 31px 25px;
      }
    }
    .zip-showing {
      .zip-close {
        opacity: 1;
        transition: all 0.3s ease-in-out 0.3s;
      }
      .zip-code-text {
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
    }
    .zip-close {
      opacity: 0;
      transition: all 0.3s ease-in-out;
      position: absolute;
      background-color: #3B3F38;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      transform:
      justify-content: center;
      align-items: center;
      img {
        width: 30%;
        max-width: 20px;
        margin: 0 auto;
      }
    }
    .end-content-wrapper {
      display: flex;
    }

  }

  @media only screen and (max-width: 440px) {
    .mobile-navbar .home-link img {
      width: 120px;
    }

  }

  .mobile-nav {
    display: none;

    @media screen and (max-width: 960px) {
      transform: translateX(-100%);
      transition: all 0.3s ease-in-out;
      background-color: #2b2b2b;
      position: relative;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: scroll;
      display: flex;
      z-index: 250;
      flex-direction: column;
      justify-content: space-around;
      align-items: space-around;
      &.mobile-nav-open {
        transform: none;
      }
      .mobile-nav-links a {
        padding: 8px 4px;
        display: block;
        text-align: center;
        font-size: 2.2rem;
      }

      .social-media-links {
        text-align: center;
        padding-bottom: 50px;
        a {
          padding: 30px 8px;
        }
        img {
          width: 28px;
        }
      }

      .home-logo {
        width: 100%;
        display: block;
        padding-top: 50px;
        img {
          width: 74px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      .close-mobile-nav {
        cursor: pointer;
        top: 0px;
        left: 30px;
        position: absolute;
      }
    }
  }

  /* --------------------------------------------------------------------------
    Hamburger Icon styles
    -----------------------------------------------------------------------------*/
  .hamburger {
    width: 21px;
    height: 12px;
    position: relative;
    z-index: 201;
    margin-left: 14px;
    padding: 0 !important;
    transition: all 2s ease-in-out;
    cursor: pointer;
    margin-top: -1px;
    span {
      display: block;
      border-bottom: 2px solid white;
      width: 100%;
      position: absolute;
      height: 1px;
      left: 0;
    }
    span:first-of-type {
      top: 0;
    }
    span:nth-of-type(2) {
      top: 50%;
    }
    span:last-of-type {
      top: 100%;
    }
  }
`;
