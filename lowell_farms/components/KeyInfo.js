import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../lib/helpers';

class KeyInfo extends Component {

  render() {
    const { pageData } = this.props;

    var locationHeadingText = RichText.asText(pageData.location_heading, linkResolver);
    var addressHtml = RichText.render(pageData.address, linkResolver);
    var phoneHtml = RichText.asText(pageData.phone, linkResolver);
    var emailAddressHtml = RichText.asText(pageData.email_address, linkResolver);
    var hoursHeadingText = RichText.asText(pageData.hours_heading, linkResolver);
    var hoursTextHtml = RichText.render(pageData.hours_text, linkResolver);
    return (
      <section className="key-info">
        <div className="container-sm">
          <div className="cols-2 no-gutters">
            <div>
              { locationHeadingText && (
                <h3>{ locationHeadingText }</h3>
              )}
              <a href="https://www.google.com/maps/place/1201+N+La+Brea+Ave,+West+Hollywood,+CA+90038/@34.092668,-118.3466097,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bf2841e514b5:0xa8cc818cc9b76bf5!8m2!3d34.092668!4d-118.344421" target="_blank">
              { addressHtml }
              </a>
              <p>
                { phoneHtml && (
                  <span>Tel. <a href={`tel:${phoneHtml}`}>{phoneHtml}</a></span>
                )}
                <br />
                <a href={`mailto:${emailAddressHtml}`}>{emailAddressHtml}</a>
              </p>
              <hr className="show-mobile" />
            </div>
            <div>
            { hoursHeadingText && (
              <h3>{ hoursHeadingText }</h3>
            )}
            { hoursTextHtml }
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default KeyInfo;
