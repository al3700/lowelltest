import Head from 'next/head';

import React, { Component } from 'react';

export default class Meta extends Component {
  render() {
    const { sitewideData } = this.props;

    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <title>Lowell Herb Co</title>
        <meta
          name="google-site-verification"
          content="uI5bRs9ltVNi_Ma0b85fSU0KPZqUCQ_qIbr_MSGUEeI"
        />
      </Head>
    );
  }
}
