import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../lib/helpers';
import Router from 'next/router';

export default class DirectPage extends Component {
  render() {
    Router.push('https://lowellcafe.direct');
    return (
      <div>
        <h1> Lowell Direct</h1>

      </div>
    );
  }
}
