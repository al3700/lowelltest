/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../lib/helpers';
import { Query } from 'react-apollo';
import Newsletter from './Newsletter';
import ButtonDark from './styles/ButtonDark';
import Accordion from './Accordion';
import KeyInfo from './KeyInfo';
import { CafeWrapper } from './styles/sections/cafeStyles';
import Link from 'next/link';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';


class Cafe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      submitted: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (value.length < 6) {
    }
  };


  serializeFormData = (form) => {

	// Setup our serialized data
	var serialized = [];

	// Loop through each field in the form
	for (var i = 0; i < form.elements.length; i++) {

		var field = form.elements[i];

		// Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
		if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;



		// If a multi-select, get all selections
		if (field.type === 'select-multiple') {
			for (var n = 0; n < field.options.length; n++) {
				if (!field.options[n].selected) continue;
				serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
			}
		}

		// Convert field data to a query string
		else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
      if (field.name == 'handle' && field.value != '') {
        var handle = field.value.toLowerCase();
        handle = 'https://www.instagram.com/' + handle;
        serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(handle));
      } else {
        serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));

      }
		}
	}

	return serialized.join('&');


  }

  sendToGoogleSheets = e => {
    e.preventDefault();

    var self = this;
    self.setState({ submitted: true });

    var url = 'https://script.google.com/macros/s/AKfycbyN94WC1RQ0HW8CBPiSNL2zCDI4P_Fesn6UM0JxD7rQ9WkWKO7C/exec';
    var params = this.serializeFormData(e.target);
    console.log(params);

    var http = new XMLHttpRequest();

    http.open("GET", url+"?"+params, true);
    http.onreadystatechange = function()
    {
        if (http.readyState == 4 && http.status == 200) {
            self.setState({ success: true })
        } else {
          self.setState({ submitted: false });
        }
    }
    http.send(null);
  };

  render() {
    const { pageData, cafePageData, newsletterData } = this.props;
    //
    var cafeTitleHtml =  cafePageData.page_title != '' && cafePageData.page_title != null &&  RichText.asText(cafePageData.page_title, linkResolver);
    var titleHtml =  cafePageData.main_heading != '' && cafePageData.main_heading != null &&  RichText.asText(cafePageData.main_heading, linkResolver);
    var subheadingHtml =  cafePageData.subheading != '' && cafePageData.subheading != null &&  RichText.asText(cafePageData.subheading, linkResolver);
    var introTextHtml =  cafePageData.intro_text != '' && cafePageData.intro_text != null &&  RichText.render(cafePageData.intro_text, linkResolver);
    var cafeButtonText =  cafePageData.lowell_cafe_button_text != '' && cafePageData.lowell_cafe_button_text != null &&  RichText.asText(cafePageData.lowell_cafe_button_text, linkResolver);
    var reservationButtonText =  cafePageData.reservation_button_text != '' && cafePageData.reservation_button_text != null &&  RichText.asText(cafePageData.reservation_button_text, linkResolver);
    var pressHeadingHtml =  cafePageData.press_heading != '' && cafePageData.press_heading != null &&  RichText.render(cafePageData.press_heading, linkResolver);
    var lowell_cafe_link = cafePageData.lowell_cafe_link != '' && cafePageData.lowell_cafe_link != null && cafePageData.lowell_cafe_link.url;
    var reservation_link = cafePageData.reservation_link != '' && cafePageData.reservation_link != null && cafePageData.reservation_link.url;
    return (
      <div>
        <Head>
          {pageData.meta_title != null && (
            <title> {pageData.meta_title}</title>
          )}
          {pageData.meta_description != null && (
            <meta name="description" content={pageData.meta_description} />
          )}
          {pageData.keywords != null && (
            <meta name="keywords" content={pageData.keywords} />
          )}
          <link href="https://www.lowellherb.co/cafe" rel="canonical" />
          {pageData.meta_title != null && (
            <meta property="og:title" content={pageData.meta_title} />
          )}
          {pageData.meta_description != null && (
            <meta property="og:description" content={pageData.meta_description} />
          )}
          <meta property="og:image" content="static/collage/mobile/collage_2.png" />

        </Head>


        <CafeWrapper>

          <header>
          <LazyLoadImage src="static/collage/mobile/collage_2.png" className="mobile-collage show-mobile" effect="opacity" visibleByDefault="true"/>
            <div className="container-sm collage-parent">
              <div className="collage-images">
              <LazyLoadImage src="static/collage/desktop/collage_1.png" className="desktop-collage-1 hide-mobile" effect="opacity"/>
              <LazyLoadImage src="static/collage/desktop/collage_2.png" className="desktop-collage-2 hide-mobile" effect="opacity"/>
              <LazyLoadImage src="static/collage/desktop/collage_3.png" className="desktop-collage-3 hide-mobile" effect="opacity"/>
              </div>
              <div className="animation-wrapper">
                <h1>
                  <LazyLoadImage src={cafePageData.cafe_logo.url != '' && cafePageData.cafe_logo.url}  effect="opacity"/>
                </h1>
                <hr className="header-hr"/>
                <h2>{ titleHtml }</h2>
                <h3>{ subheadingHtml }</h3>
                <div className="intro-text">
                  { introTextHtml }
                </div>
              </div>
            </div>
          </header>
          <section className="prohibition">
            <div className="container-xs collage-parent">
              <div className="collage-images">
              <LazyLoadImage src="static/collage/desktop/collage_4.png" className="desktop-collage-1 hide-mobile" effect="opacity"/>
              </div>
              { cafeButtonText != '' && lowell_cafe_link != '' && (
              <a href={ lowell_cafe_link } className="button-light button" >{ cafeButtonText }</a>
              )}
              { reservationButtonText != '' && reservation_link != '' && (
                <a href={ reservation_link } className="button-light button" >{ reservationButtonText }</a>
              )}


            </div>
          </section>

          <div>
            <KeyInfo pageData={pageData}/>
          </div>
          <section className="press">
            { pressHeadingHtml }
            <div className="container">
              {pageData.press_items.map((value, index) => {
                return (
                  <a href={value.press_link.url} target="_blank">
                    <LazyLoadImage src={value.press_image.url} className="press-logo" effect="opacity"/>
                  </a>
                )
              })}
            </div>
          </section>
        </CafeWrapper>

      </div>
    );
  }
}

export default Cafe;
