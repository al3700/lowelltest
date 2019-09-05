import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { graphql, compose, withApollo } from 'react-apollo';
import { RichText } from 'prismic-reactjs';
import Nav from './Nav';
import Footer from './Footer';
import Meta from './Meta';
import Cart from './Cart';
import ZipCodeCheck from './ZipCodeCheck';
import AgeCheck from './AgeCheck';
import { CHECKOUT_ID_QUERY } from './AddToCart';
import { initGA, logPageView } from '../lib/analytics';
import {
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
} from '../lib/checkout';

class Page extends Component {
  state = {
    showAgeCheck: false,
    localStorageCheckout: {},
  };

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      const gaAppId = RichText.asText(
        this.props.sitewideData.data.landing_app_ga_id
      );
      initGA(gaAppId);
      console.log(gaAppId);
      window.GA_INITIALIZED = true;
    }
    logPageView();
    // When this component mounts, begin listening for scroll changes
    const { isOfLegalAge } = localStorage;
    if (isOfLegalAge == 'true') {
      this.setState({ showAgeCheck: false });
    } else {
      this.setState({ showAgeCheck: true });
    }

    const localZipCode = localStorage.getItem('zipCode');
    if (localZipCode) {
      this.props.client.writeData({
        data: {
          zipCode: localZipCode,
        },
      });
    }

    const localCheckoutId = localStorage.getItem('checkoutId');

    const { checkoutId } = this.props.client.readQuery({
      query: CHECKOUT_ID_QUERY,
    });

    if (localCheckoutId) {
      this.props.client.writeData({
        data: {
          checkoutId: localCheckoutId,
        },
      });
    } else if (checkoutId == '') {
      this.props
        .createCheckout({
          variables: {
            input: {},
          },
        })
        .then(res => {
          this.props.client.writeData({
            data: {
              checkout: res.data.checkoutCreate.checkout,
            },
          });
          this.props.client.writeData({
            data: {
              checkoutId: res.data.checkoutCreate.checkout.id,
            },
          });
        });
    }

    const localCheckout = localStorage.getItem('checkout');
    if (localCheckout) {
      const localCheckoutObject = JSON.parse(localCheckout);
      this.setState({
        localStorageCheckout: localCheckoutObject,
      });
    }
  }

  allowSiteEntry = () => {
    // Show 6 more delivery services each time the button is clicked
    localStorage.setItem('isOfLegalAge', 'true');
    this.setState({ showAgeCheck: false });
  };

  render() {
    const { sitewideData, router, client, products } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <StyledPage className={this.state.showAgeCheck ? 'locked' : ''}>
          <Meta sitewideData={sitewideData} />
          <Cart
            products={products}
            localStorageCheckout={this.state.localStorageCheckout}
          />
          <Nav
            router={router}
            sitewideData={sitewideData}
            localStorageCheckout={this.state.localStorageCheckout}
          />
          <AgeCheck
            action={this.allowSiteEntry}
            showAgeCheck={this.state.showAgeCheck}
          />
          <ZipCodeCheck client={client} />
          <Inner>{this.props.children}</Inner>
          <Footer sitewideData={sitewideData} />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

// Create our enhancer function.
const AppWithDataAndMutation = compose(
  graphql(createCheckout, { name: 'createCheckout' }),
  graphql(checkoutLineItemsAdd, { name: 'checkoutLineItemsAdd' }),
  graphql(checkoutLineItemsUpdate, { name: 'checkoutLineItemsUpdate' }),
  graphql(checkoutLineItemsRemove, { name: 'checkoutLineItemsRemove' })
)(withApollo(Page));

export default AppWithDataAndMutation;

const theme = {
  darkGrey: '#2C2C2C',
  white: '#ffffff',
  goldBg: '#726C59',
  goldText: '#9C8D72',
  greyText: '#6B6653',
  darkGreyText: '#333639',
  blackText: '#333639',
  darkGreyBg: '#E0DCD6',
  mediumGreyBg: '#DFE0DB',
  lightGreyBg: '#D1D3CB',
  bodyTextFontSize: '1.3rem',
  h1FontSize: '7rem',
  h2FontSize: '5rem',
  h3FontSize: '3.8rem',
  maxWidth: '1160px',
};

injectGlobal`
  @font-face {
    font-family: 'Nitti Light';
    src: url('/static/fonts/NittiLight.woff2') format('woff2'),
        url('/static/fonts/NittiLight.woff') format('woff'),
        url('/static/fonts/NittiLight.ttf') format('truetype'),
        url('/static/fonts/NittiLight.eot') format('embedded-opentype');
  }

  @font-face {
    font-family: 'Nitti Bold';
    src: url('/static/fonts/NittiBold.woff2') format('woff2'),
        url('/static/fonts/NittiBold.woff') format('woff'),
        url('/static/fonts/NittiBold.ttf') format('truetype'),
        url('/static/fonts/NittiBold.eot') format('embedded-opentype');
  }

  @font-face {
    font-family: 'Lora Regular';
    src: url('/static/fonts/LoraRegular.woff2') format('woff2'),
        url('/static/fonts/LoraRegular.woff') format('woff'),
        url('/static/fonts/LoraRegular.ttf') format('truetype'),
        url('/static/fonts/LoraRegular.eot') format('embedded-opentype');
  }

  /* Used on about page */
  @font-face {
    font-family: 'Lora Italic';
    src: url('/static/fonts/LoraItalic.woff2') format('woff2'),
        url('/static/fonts/LoraItalic.woff') format('woff'),
        url('/static/fonts/LoraItalic.ttf') format('truetype'),
        url('/static/fonts/LoraItalic.eot') format('embedded-opentype');
  }

  @font-face {
    font-family: 'Lora Bold';
    src: url('/static/fonts/Lora-Bold.woff2') format('woff2'), url('/static/fonts/Lora-Bold.woff') format('woff'), url('/static/fonts/Lora-Bold.ttf') format('truetype'), url('/static/fonts/Lora-Bold.eot') format('embedded-opentype');
  }

  @font-face {
    font-family: 'Gotham Bold';
    src: url('/static/fonts/Gotham-Bold.woff2') format('woff2'),
        url('/static/fonts/Gotham-Bold.woff') format('woff'),
        url('/static/fonts/Gotham-Bold.ttf') format('truetype'),
        url('/static/fonts/Gotham-Bold.eot') format('embedded-opentype');
  }

  @font-face {
    font-family: 'Gotham Book';
    src: url('/static/fonts/Gotham-Book.woff2') format('woff2'),
        url('/static/fonts/Gotham-Book.woff') format('woff'),
        url('/static/fonts/Gotham-Book.ttf') format('truetype'),
        url('/static/fonts/Gotham-Book.eot') format('embedded-opentype');
  }

  @font-face {
    font-family: 'SS Nickson Six';
    src: url('/static/fonts/SSNicksonSix.woff2') format('woff2'), url('/static/fonts/SSNicksonSix.woff') format('woff'), url('/static/fonts/SSNicksonSix.ttf') format('truetype'), url('/static/fonts/SSNicksonSix.eot') format('embedded-opentype');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Aurora';
    src: url("/static/fonts/Aurora.woff2") format('woff2'), url("/static/fonts/Aurora.woff") format('woff'), url("/static/fonts/Aurora.ttf") format('truetype'), url("/static/fonts/Aurora.eot") format('embedded-opentype');
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
  }

  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    background-color: ${theme.lightGreyBg};
    font-family: "Nitti Light", sans-serif;
    font-size: 1.6rem;
    color: #171717;
    line-height: 1.4;
    letter-spacing: .02rem;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    padding-top: 76px;
    @media screen and (max-width: 960px) {
    padding-top: 40px;

    }
  }

  a {
    text-decoration: none;
    transition: all .3s ease-in-out;
    color: #171717;
  }

  a:hover,
  a:active {

  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    font-style: normal;
  }

  h1 {
    font-size: ${theme.h1FontSize};
    @media only screen and (max-width: 1000px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 48px;
    }
  }

  h2 {
    font-size: ${theme.h2FontSize};
  }

  h3 {
    font-size: ${theme.h3FontSize};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  strong {
    font-weight: normal;
  }

  button {
    background-color: transparent;
    outline: none;
    border: none;
  }

  [class*="small-caps"] {
    text-transform: uppercase;
    font-family: 'Gotham Bold', sans-serif;
    letter-spacing: .09rem;
    font-size: 1.2rem;
  }

  [class*="gold-text"] {
    color: #A69463;
  }

  .small-nitti-caps {
    font-family: 'Nitti Bold', sans-serif;
    font-size: 1.3rem;
  }

  .thin-nitti-caps {
    text-transform: uppercase;
    font-family: 'Nitti Light', sans-serif;
    letter-spacing: .1rem;
    font-size: 1.3rem;
    color: #333639;
  }

  img {
    max-width: 100%;
    display: block;
  }


  .cols-2 {
    @media only screen and (min-width: 758px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
    }
  }

  .cols-3 {
    @media only screen and (min-width: 758px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
  }

  .cols-4-even {
    @media only screen and (min-width: 758px) {
      display: grid;
      grid-template-columns: repeat(4, 25%);

    }
  }

  .cols-3-even {
    @media only screen and (min-width: 758px) {
      display: grid;
      grid-template-columns: repeat(3, 33.333%);
    }
  }

  .cols-6-even {
    @media only screen and (min-width: 758px) {
      display: grid;
      grid-template-columns: repeat(6, 16.6%);
    }
  }

  .cols-2-md {
    @media only screen and (min-width: 758px) and (max-width: 1000px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
    }
  }

  .cols-28p {
    @media only screen and (min-width: 758px) {
      display: grid;
      grid-template-columns: 28fr 72fr;
      grid-gap: 20px;
    }
  }

  .cols-44p {
    @media only screen and (min-width: 758px) {
      display: grid;
      grid-template-columns: 44fr 56fr;
      grid-gap: 0;
    }
  }

  .cols-55p {
    @media only screen and (min-width: 758px) {
      display: grid;
      grid-template-columns: 45fr 55fr;
      grid-gap: 40px;
    }
    @media only screen and (min-width: 1025px) {
      grid-gap: 110px;
      grid-template-columns: 55fr 45fr;
    }
  }

  .cols-60p {
    @media only screen and (min-width: 758px) {
      display: grid;
      grid-template-columns: 60fr 40fr;
      grid-gap: 60px;
    }
  }

  .show-mobile {
    display: none;
    @media only screen and (max-width: 960px) {
      display: block;

    }

  }

  .hide-mobile {
    @media only screen and (max-width: 960px) {
      display: none;

    }

  }

  .no-gutters {
    grid-gap: 0;
  }

  .vertical-aligner {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .v-h-aligner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .split-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .mobile-flex-reverse {
    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 60px;
    }
  }

  .container {
    width: 86%;
    max-width: 1160px;
    margin: 0 auto;
    @media only screen and (max-width: 768px) {
      width: 90%;
    }
  }

  .container-md {
    width: 86%;
    max-width: 960px;
    margin: 0 auto;
    @media only screen and (max-width: 768px) {
      width: 92%;
    }
  }

  .container-sm {
    width: 86%;
    max-width: 740px;
    margin: 0 auto;
    @media only screen and (max-width: 768px) {
      width: 92%;
    }
  }

  .container-lg {
    max-width: 1300px;
    width: 86%;
    margin: 0 auto;
    @media only screen and (max-width: 768px) {
      width: 92%;
    }
  }

  @media only screen and (min-width: 758px) {
    .cols-2 {
      > div:nth-of-type(2) .small-inner {
        margin-left: auto;
      }
    }

  }

  .small-inner {
    max-width: 420px;
  }

  .publication {
    text-transform: uppercase;
    font-family: 'Gotham Bold', sans-serif;
    letter-spacing: .1rem;
    font-size: 1.2rem;
    color: #6B6653;
  }

  .quote {
    font-family: 'Lora Regular', serif;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }

`;

const StyledPage = styled.div`
  background: white;
  color: black;
  &.locked {
    position: fixed;
    width: 100%;
  }
`;

const Inner = styled.div`
  margin: 0 auto;
`;
