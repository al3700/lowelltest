import React from 'react';

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://www.lowellherb.co/</loc><changefreq>weekly</changefreq></url>
    <url><loc>https://www.lowellherb.co/cannabis</loc><changefreq>weekly</changefreq></url>
    <url><loc>https://www.lowellherb.co/cbd</loc><changefreq>weekly</changefreq></url>
    <url><loc>https://www.lowellherb.co/gear</loc><changefreq>weekly</changefreq></url>
    <url><loc>https://www.lowellherb.co/stockists</loc><changefreq>weekly</changefreq></url>
    <url><loc>https://www.lowellherb.co/about</loc><changefreq>weekly</changefreq></url>
  </urlset>`;

export default class Sitemap extends React.Component {
  static getInitialProps({ res }) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemapXml);
    res.end();
  }
}
