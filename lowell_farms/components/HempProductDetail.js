/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { RichText, Date } from 'prismic-reactjs';
import styled from 'styled-components';
import Moment from 'react-moment';
import { linkResolver } from '../lib/helpers';
import Newsletter from './Newsletter';
import ButtonGold from './styles/ButtonGold';
import LearnMore from './styles/LearnMore';
import {
  ProductDetailPage,
  InsidePackSection,
} from './styles/sections/productDetailStyles';
// import DeliveryBanner from './DeliveryBanner';

import DetailDelivery from './DetailDelivery';

class ProductPage extends Component {
  render() {
    const {
      pageData,
      quotesData,
      productInfo,
      shopifyProduct,
      newsletterData,
      stockists,
      deliveryZipCodes,
      zipCodeData,
    } = this.props;

    let metaTitle;
    if (productInfo.meta_title != null && productInfo.meta_title != '') {
      metaTitle = productInfo.meta_title;
    } else if (productInfo.title != null && productInfo.title != '') {
      metaTitle = RichText.asText(productInfo.title);
    }

    let metaDescription;
    if (
      productInfo.meta_description != null &&
      productInfo.meta_description != ''
    ) {
      metaDescription = productInfo.meta_description;
    } else if (
      productInfo.product_description != null &&
      productInfo.product_description != ''
    ) {
      metaDescription = RichText.asText(productInfo.product_description);
    } else {
      metaDescription = RichText.asText(productInfo.title);
    }

    const aboutImageCategory = `${productInfo.shopify_product.product_type} ${
      productInfo.product_category
    }`;

    let aboutImage;

    switch (aboutImageCategory) {
      case 'Cannabis Pack':
        aboutImage = pageData.learn_more_image;
        break;
      case 'Cannabis Individual Smoke':
        aboutImage = pageData.cannabis_individual_smoke_footer_image;
        break;
      case 'Cannabis Flower':
        aboutImage = pageData.cannabis_flower_footer_image;
        break;
      case 'CBD Pack':
        aboutImage = pageData.cbd_pack_footer_image;
        break;
      case 'CBD Individual Smoke':
        aboutImage = pageData.cbd_individual_smoke_footer_image;
        break;
      case 'CBD Flower':
        aboutImage = pageData.cbd_flower_footer_image;
        break;
      default:
        aboutImage = pageData.learn_more_image;
    }
    const showPackInfo =
      productInfo.product_category != 'Flower' &&
      productInfo.product_category != 'Individual Smoke' &&
      productInfo.hide_inside_pack_section != 'True';

    const ImageSeparator = styled.section`
      padding-bottom: 100px;
    `;

    let productType;
    let quantity;
    let packageDate;
    let productWeight;
    let labResults;
    let curatedMixture;

    // TYPE
    if (productInfo && RichText.asText(productInfo.type) != '') {
      productType = (
        <p className="type">
          <img
            className="icon"
            src="../static/icon.svg"
            alt="Lowell Icon"
            width="18"
          />
          {productInfo.type != '' && RichText.asText(productInfo.type)}
        </p>
      );
    }

    // QUANTITY
    if (productInfo && RichText.asText(productInfo.quantity) != '') {
      quantity = (
        <p className="info-item  split-text">
          <span>
            {pageData.quantity != '' && RichText.asText(pageData.quantity)}:
          </span>
          <span>
            {productInfo.quantity != '' &&
              RichText.asText(productInfo.quantity)}
          </span>
        </p>
      );
    }

    // DATE
    if (productInfo && productInfo.packaged_date != '') {
      const date = Date(productInfo.packaged_date);
      packageDate = <Moment format="MM/DD/YYYY">{date}</Moment>;
      packageDate = (
        <p className="info-item split-text">
          <span>
            {pageData.packaged != '' && RichText.asText(pageData.packaged)}:
          </span>
          <span>{packageDate}</span>
        </p>
      );
    }

    // LAB RESULTS
    if (
      productInfo &&
      productInfo.lab_results != '' &&
      productInfo.lab_results[0].lab_result_item != ''
    ) {
      labResults = (
        <div className="inside-pack-list">
          <h5>
            {pageData.lab_results_heading != '' &&
              RichText.asText(pageData.lab_results_heading)}
          </h5>
          <ul>
            {productInfo.lab_results.map(result => (
              <li
                key={
                  result.lab_result_item != '' &&
                  RichText.asText(result.lab_result_item)
                }
                className="split-text"
              >
                <span className="small-nitti-caps">
                  {result.lab_result_item != '' &&
                    RichText.asText(result.lab_result_item)}
                </span>
                <span className="thin-nitti-caps">
                  {RichText.asText(result.percentage)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // MIXTURE
    if (
      productInfo &&
      productInfo.mixture != '' &&
      productInfo.mixture[0].mixture_title != ''
    ) {
      curatedMixture = (
        <div className="inside-pack-list">
          <h5>
            {pageData.mixture_of_heading != '' &&
              RichText.asText(pageData.mixture_of_heading)}
          </h5>
          <ul>
            {productInfo.mixture.map(item => (
              <li
                key={RichText.asText(item.mixture_title)}
                className="split-text"
              >
                <span className="small-nitti-caps">
                  {RichText.asText(item.mixture_title)}
                </span>
                {item.thc_percentage1 !== null &&
                  item.thc_percentage1[0].text != '' && (
                    <span className="border-left thin-nitti-caps">
                      {RichText.asText(item.thc_percentage1)}
                    </span>
                  )}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // WEIGHT
    if (shopifyProduct.variants.edges[0].node.weight > 0) {
      productWeight = `${shopifyProduct.variants.edges[0].node.weight} ${
        shopifyProduct.variants.edges[0].node.weightUnit
      }`;
      productWeight = (
        <p className="info-item  split-text">
          <span>
            {pageData.weight != '' && RichText.asText(pageData.weight)}:
          </span>
          <span>{productWeight}</span>
        </p>
      );
    }

    // PRICE
    const productRoundedPrice = shopifyProduct.variants.edges[0].node.price.replace(
      /\.00$/,
      ''
    );

    let fullWidthSeparator;

    if (
      productInfo &&
      productInfo.product_detail_divider_image != '' &&
      !(
        Object.entries(productInfo.product_detail_divider_image).length === 0 &&
        productInfo.product_detail_divider_image.constructor === Object
      )
    ) {
      fullWidthSeparator = productInfo.product_detail_divider_image.url;
    } else if (pageData.image_separator != '') {
      fullWidthSeparator = pageData.image_separator.url;
    }

    let percentageUnit;

    if (productInfo && productInfo.percentage_unit != '') {
      percentageUnit = RichText.asText(productInfo.percentage_unit);
    } else {
      percentageUnit = 'THC';
    }

    return (
      <ProductDetailPage>
        <Head>
          <title>Lowell Herb Co | {metaTitle}</title>
          <meta name="description" content={metaDescription} />
          {productInfo.keywords != null && (
            <meta name="keywords" content={productInfo.keywords} />
          )}
        </Head>
        <div>
          <div itemType="http://schema.org/Product" itemScope>
            <meta itemProp="name" content={shopifyProduct.title} />
            {/* <meta itemProp="url" content="Executive Anvil" /> */}

            <link itemProp="image" href={ productInfo && productInfo.product_detail_image != '' && productInfo.product_detail_image.url } />
            <meta itemProp="description" content={productInfo && RichText.asText(productInfo.product_description)} />
            <div itemProp="offers" itemType="http://schema.org/Offer" itemScope>
              {/* <link itemProp="url" href="https://example.com/anvil" /> */}
              <meta itemProp="availability" content="https://schema.org/InStock" />
              <meta itemProp="priceCurrency" content="USD" />
              <meta itemProp="price" content={shopifyProduct.variants.edges[0].node.price} />
              <div itemProp="seller" itemType="http://schema.org/Organization" itemScope>
                <meta itemProp="name" content="Lowell" />
              </div>
            </div>
            <div itemProp="brand" itemType="http://schema.org/Thing" itemScope>
              <meta itemProp="name" content="Lowell Herb Co" />
            </div>
          </div>
        </div>
        <div className="container header">
          <div className="cols-55p">
            <div className="vertical-aligner">
              <img
                src={
                  productInfo &&
                  productInfo.product_detail_image != '' &&
                  productInfo.product_detail_image.url
                }
                alt={shopifyProduct.title}
              />
            </div>
            {/* PRODUCT INFO CARD */}
            <div className="product-info-card">
              <div className="split-text">
                {productType}
                <p className="percent">
                  {productInfo && RichText.asText(productInfo.thc_percentage)}{' '}
                  <span>{percentageUnit}</span>
                </p>
              </div>
              <h1 className="small-caps dashed-underline">
                {shopifyProduct.title}
              </h1>
              <div className="thin-caps">
                {productInfo.product_category != undefined &&
                productInfo.product_category == 'Flower'
                  ? 'strain'
                  : 'blend'}
              </div>
              <p className="dashed-underline farms">
                {/* Farms */}

                {productInfo &&
                  productInfo.farms.map((farm, index) => {
                    const commaSeparator =
                      index < productInfo.farms.length - 1 ? ', ' : '';
                    if (RichText.asText(farm.farm_url) != '') {
                      return (
                        <span
                          key={
                            farm.farm_handle != '' &&
                            RichText.asText(farm.farm_handle)
                          }
                        >
                          <a href={RichText.asText(farm.farm_url)}>
                            {RichText.asText(farm.farm_handle)}
                          </a>
                          {commaSeparator}
                        </span>
                      );
                    }
                    return (
                      <span key={RichText.asText(farm.farm_handle)}>
                        {RichText.asText(farm.farm_handle)}
                        {commaSeparator}
                      </span>
                    );
                  })}
              </p>
              <div className="thin-caps">
                {pageData.farms != '' && RichText.asText(pageData.farms)}
              </div>
              <div className="info-items">
                {productWeight}
                {quantity}
                {packageDate}
              </div>

              <DetailDelivery
                deliveryZipCodes={deliveryZipCodes}
                pageData={pageData}
                handle={
                  productInfo.shopify_product &&
                  productInfo.shopify_product.product_type
                }
                stockists={stockists}
                shopifyProduct={shopifyProduct}
                productRoundedPrice={productRoundedPrice}
                zipCodeData={zipCodeData}
              />
            </div>
          </div>
        </div>
        {showPackInfo && (
          <ImageSeparator className="container">
            <img src={fullWidthSeparator} alt="Learn More about Lowell" />
          </ImageSeparator>
        )}
        {showPackInfo && (
          <InsidePackSection>
            <div className="container">
              <div className="cols-2">
                <div>
                  <h3>
                    {pageData.inside_pack_heading &&
                      RichText.asText(pageData.inside_pack_heading)}
                  </h3>
                  <div className="rich-text">
                    {productInfo &&
                      RichText.render(
                        productInfo.product_description,
                        linkResolver
                      )}
                  </div>
                  <p className="thin-caps">
                    {pageData.flower_from_heading &&
                      RichText.asText(pageData.flower_from_heading)}
                  </p>
                  <ul className="farms">
                    {productInfo &&
                      productInfo.farms.map((farm, index) => {
                        if (RichText.asText(farm.farm_url) != '') {
                          return (
                            <li key={RichText.asText(farm.farm_handle)}>
                              <a href={RichText.asText(farm.farm_url)}>
                                {RichText.asText(farm.farm_handle)}
                              </a>
                            </li>
                          );
                        }
                        return (
                          <li key={RichText.asText(farm.farm_handle)}>
                            {RichText.asText(farm.farm_handle)}
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div>
                  {curatedMixture}
                  {labResults}
                </div>
              </div>
            </div>
          </InsidePackSection>
        )}
        <LearnMore
          className={`container padding-bottom ${
            showPackInfo ? '' : 'no-padding-top'
          }`}
        >
          <div className="cols-2">
            <div>
              <img
                src={aboutImage != '' && aboutImage.url}
                alt="Learn More about Lowell"
              />
            </div>
            <div className="vertical-aligner">
              <div className="small-inner">
                <p className="quote">
                  &ldquo;{quotesData[0].quote[0].text}&rdquo;
                </p>
                <p className="publication small-caps">
                  &ndash; {quotesData[0].publication[0].text}
                </p>
                <Link href="/about">
                  <ButtonGold>
                    {pageData.learn_more_button_text != '' &&
                      pageData.learn_more_button_text[0].text}
                  </ButtonGold>
                </Link>
              </div>
            </div>
          </div>
        </LearnMore>
        <Newsletter newsletterData={newsletterData} page="cannabis" />
      </ProductDetailPage>
    );
  }
}

export default ProductPage;
