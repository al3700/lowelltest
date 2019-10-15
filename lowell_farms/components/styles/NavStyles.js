import styled from 'styled-components';

export const NavWrapper = styled.div`
  background-color: ${props => props.theme.darkGrey};
  padding: 0;
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  transition: transform 0.3s ease-out;
  @media only screen and (max-width: 1050px) {
    transform: none !important;
    background-color: transparent;
  }
  a,
  button {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-family: 'Gotham Bold', sans-serif;
    letter-spacing: 0.09rem;
    margin: 0 10px;
    padding: 30px 4px;
    color: white;
    display: inline-block;
    outline: none;
    cursor: pointer;
    &.current-page {
      color: #d0c08c;
    }
    @media screen and (max-width: 1125px) {
      margin: 0 4px;
    }
  }
  a:hover {
    opacity: 0.7;
  }
  .home-link {
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    padding: 0;
    &:hover {
      transform: translateX(-50%);
      opacity: 1;
    }
    img {
      width: 100px;
    }
  }
  button {
    box-shadow: none;
    border: 0;
  }
  .toggle-cart {
    background-color: #1e1d1d;
    margin: 0 0 0 20px;
    padding: 18px 30px;
    position: relative;
    @media only screen and (max-width: 1250px) {
      padding: 18px 16px;
    }
  }
  .cart-count {
    background-color: #2c2c2c;
    width: 38px;
    height: 38px;
    display: inline-block;
    clip-path: polygon(
      50% 0,
      86% 13%,
      100% 50%,
      86% 87%,
      50% 100%,
      13% 88%,
      0 50%,
      13% 13%
    );
    padding: 13px;
    margin-left: 10px;
    &.gold-badge {
      background-color: #988c66;
    }
  }
  .show-mobile-nav {
    display: none;
  }
  @media screen and (max-width: 1050px) {
    .hide-mobile-nav {
      display: none;
    }
    .show-mobile-nav {
      display: block;
    }
  }
`;

export const NavInner = styled.nav`
  display: none;
  @media screen and (min-width: 1051px) {

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 100;
    @media only screen and (min-width: 1051px) {
      .close-mobile-nav {
        display: none;
      }
    }
    @media only screen and (max-width: 1050px) {
      .hide-mobile-nav {
        display: none;
      }
    }
    .left-col {
      padding-left: 50px;
    }

    a:first-of-type {
      margin-left: 0;
    }
    a:last-of-type {
      margin-right: 0;
    }
    .zip-code {
      margin: 0;
      padding: 31px 50px 31px 40px;
      background-color: #3B3F38;
      position: relative;
      @media only screen and (max-width: 1250px) {
        padding: 31px 20px 31px 20px;
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
        width: 18%;
        max-width: 20px;
        margin: 0 auto;
      }
    }

    .zip-code-text {
      opacity: 1;
      transition: all .3s ease-in-out .3s;
    }

    .zip-showing {
      .zip-close {
        opacity: 1;
        transition: all .3s ease-in-out .3s;
      }
      .zip-code-text {
        opacity: 0;
        transition: all .3s ease-in-out;
      }
    }

  }

`;
