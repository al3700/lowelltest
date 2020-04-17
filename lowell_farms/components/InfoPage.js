import React, { Component } from 'react';
import InfoPagesStyles from './styles/InfoPagesStyles';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../lib/helpers';

export default class InfoPage extends Component {
  render() {
    const { pageData } = this.props;
    return (
      <InfoPagesStyles>
        <div class="container-sm">
          <h2 className="section-title">
            {pageData.title != '' &&
              RichText.asText(pageData.title)}
          </h2>
          <div className="desc">
            {pageData.body != '' &&
              RichText.render(pageData.body, linkResolver)}
          </div>
        </div>

      </InfoPagesStyles>
    );
  }
}
