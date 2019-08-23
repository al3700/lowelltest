import React from 'react';

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://www.lowellfarms.com/</loc><changefreq>weekly</changefreq></url>
    <url><loc>https://www.lowellfarms.com/cannabis</loc><changefreq>weekly</changefreq></url>
    <url><loc>https://www.lowellfarms.com/cbd</loc><changefreq>weekly</changefreq></url>
    <url><loc>https://www.lowellfarms.com/gear</loc><changefreq>weekly</changefreq></url>
    <url><loc>https://www.lowellfarms.com/stockists</loc><changefreq>weekly</changefreq></url>
    <url><loc>https://www.lowellfarms.com/about</loc><changefreq>weekly</changefreq></url>
  </urlset>`;

export default class Sitemap extends React.Component {
  static getInitialProps({ res }) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemapXml);
    res.end();
  }
}
