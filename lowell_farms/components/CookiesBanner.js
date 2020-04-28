import React, { Component } from 'react';
import ButtonDark from './styles/ButtonDark';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../lib/helpers';

class CookiesBanner extends Component {
  render() {
    const { action, showCookiesBanner, sitewideData } = this.props;
    return (
      <CookiesWrapper className={showCookiesBanner ? '' : 'hide'}>
        <div className="container">
          <p>
            {sitewideData.gdpr_banner != '' &&
              RichText.render(sitewideData.gdpr_banner, linkResolver)}
          </p>
          <ButtonDark type="button" onClick={action}>
            Accept
          </ButtonDark>
          <ButtonDark type="button" onClick={action}>
            Decline
          </ButtonDark>
        </div>
      </CookiesWrapper>
    );
  }
}

export default CookiesBanner;


const CookiesWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: white;
  font-size: 1.3rem;
  line-height: 1.4;
  a {
    text-decoration: underline;
  }
  button {
    margin-top: 3rem;
    display: inline-block;
    margin-right: 3rem;
    width: auto;
  }
  &.hide {
    display: none;
  }

`;
