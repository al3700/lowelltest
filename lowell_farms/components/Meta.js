import Head from 'next/head';

import React, { Component } from 'react';

export default class Meta extends Component {
  render() {
    const { sitewideData } = this.props;
    const metaDescription =
      sitewideData.data.meta_description_for_sharing != '' &&
      sitewideData.data.meta_description_for_sharing[0].text;
    const metaImage =
      sitewideData.data.social_sharing_image != '' &&
      sitewideData.data.social_sharing_image.url;
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <title>Lowell Herb Co</title>
        <meta
          name="google-site-verification"
          content="uI5bRs9ltVNi_Ma0b85fSU0KPZqUCQ_qIbr_MSGUEeI"
        />
        <meta property="og:title" content="Lowell Herb Co" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />

      </Head>
    );
  }
}
