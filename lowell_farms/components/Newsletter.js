import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../lib/helpers';
import NewsletterCallout from './styles/NewsletterCallout';
import Input from './styles/Input';
import ButtonDark from './styles/ButtonDark';

export default class Newsletter extends Component {
  state = {
    emailAddress: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ emailAddress: value });
  };

  render() {
    const { newsletterData, page } = this.props;
    console.log(newsletterData);
    let bgColor;

    switch (page) {
      case 'cbd':
        bgColor = '#d1d3cb';
        break;
      case 'cannabis':
        bgColor = '#E0DDDB';
        break;
      case 'cafe':
        bgColor = '#C4C0B0';
        break;
      default:
        bgColor = '#ECEBE9';
    }

    return (
      <NewsletterCallout style={{ backgroundColor: bgColor }}>
        <div id="mc_embed_signup">
          <form
            action="https://lowellsmokes.us17.list-manage.com/subscribe/post?u=092e1f0ca656e0ef4ceb5bb0d&amp;id=1597a2471d"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate container"
            target="_blank"
            noValidate
          >
            <h4>
              {newsletterData.newsletter_heading != '' &&
                RichText.asText(newsletterData.newsletter_heading)}
            </h4>
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <Input
                  type="email"
                  onChange={this.handleChange}
                  value={this.state.emailAddress}
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  placeholder={
                    newsletterData.newsletter_placeholder_text != '' &&
                    RichText.asText(newsletterData.newsletter_placeholder_text)
                  }
                />
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: 'none' }}
                />
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: 'none' }}
                />
              </div>
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_092e1f0ca656e0ef4ceb5bb0d_1597a2471d"
                  tabIndex="-1"
                  value=""
                  readOnly
                />
              </div>
              <div className="disclaimer">
                {newsletterData.disclaimer != '' &&
                  RichText.render(newsletterData.disclaimer, linkResolver)}
              </div>
              <ButtonDark
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
              >
                {newsletterData.newsletter_button_text != '' &&
                  RichText.asText(newsletterData.newsletter_button_text)}
              </ButtonDark>


            </div>
          </form>
        </div>
      </NewsletterCallout>
    );
  }
}
