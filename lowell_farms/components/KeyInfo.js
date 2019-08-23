import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../lib/helpers';

class KeyInfo extends Component {

  render() {
    const { pageData } = this.props;

    var locationHeadingHtml = RichText.render(pageData.location_heading, linkResolver);
    var addressHtml = RichText.render(pageData.address, linkResolver);
    var phoneHtml = RichText.asText(pageData.phone, linkResolver);
    var emailAddressHtml = RichText.asText(pageData.email_address, linkResolver);
    var hoursHeadingHtml = RichText.render(pageData.hours_heading, linkResolver);
    var hoursTextHtml = RichText.render(pageData.hours_text, linkResolver);
    return (
      <section class="key-info">
        <div class="container-sm">
          <div class="cols-2 no-gutters">
            <div>
              { locationHeadingHtml }
              <a href="https://www.google.com/maps/place/1201+N+La+Brea+Ave,+West+Hollywood,+CA+90038/@34.092668,-118.3466097,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bf2841e514b5:0xa8cc818cc9b76bf5!8m2!3d34.092668!4d-118.344421" target="_blank">
              { addressHtml }
              </a>
              <p>
                Tel. <a href={`tel:${phoneHtml}`}>{phoneHtml}</a>
                <br />
                <a href={`mailto:${emailAddressHtml}`}>{emailAddressHtml}</a>
              </p>
              <hr class="show-mobile" />
            </div>
            <div>
            { hoursHeadingHtml }
            { hoursTextHtml }
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default KeyInfo;
