import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import { Query } from 'react-apollo';

import ProductCard from './styles/ProductCard';

import AddToCart from './AddToCart';
import Title from './styles/Title';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';

export default class Product extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  };

  preventBubbling = e => {
    // Show 6 more delivery services each time the button is clicked
    if (e.target.tagName == 'BUTTON') {
      e.preventDefault();
    }
  };

  render() {
    const { product, productInfo, handle, showBuyButton, productCategory } = this.props;

    let type;
    let quantity;
    let percentage;
    let percentageUnit;
    let weight;
    let productTopRow;
    let productBottomRow;
    let typeColor;

    const productRoundedPrice = product.node.variants.edges[0].node.price.replace(
      /\.00$/,
      ''
    );

    if (handle == 'CBD' || productCategory == 'CBD' || productCategory == 'Cannabis') {
      if (productInfo != undefined) {
        type = RichText.asText(productInfo.data.type);
        quantity = RichText.asText(productInfo.data.quantity);
        percentage = RichText.asText(productInfo.data.thc_percentage);
        percentageUnit = RichText.asText(productInfo.data.percentage_unit);

        type = type != '' && type != undefined ? type.toLowerCase() : '';

        switch (type) {
          case 'hemp':
            typeColor = '#A38F60';
            break;
          case 'indica':
            typeColor = '#232323';
            break;
          case 'sativa':
            typeColor = '#58794E';
            break;
          default:
            typeColor = '#BB845A';
            break;
        }
      }

      weight = (
        <span>
          {product.node.variants.edges[0].node.weight}{' '}
          {product.node.variants.edges[0].node.weightUnit},
        </span>
      );
      productTopRow = (
        <div className="split-aligner">
          <p className="product-type" style={{ color: typeColor }}>
            {type}
          </p>
          <p className="product-amount">
            {percentage}
            <span>{percentageUnit}</span>
          </p>
        </div>
      );

      productBottomRow = (
        <span>
          {weight}
          <span>{quantity}</span>
        </span>
      );
    } else {
      productBottomRow = (
        <span>
          {productInfo &&
            productInfo.data.short_description != '' &&
            productInfo.data.short_description != null &&
            RichText.asText(productInfo.data.short_description)}
        </span>
      );
    }

    return (
      <ProductCard>
        <Link
          href={{
            pathname: '/product',
            query: { handle: product.node.handle },
          }}
        >
          <div onClick={this.preventBubbling}>
            {' '}
            {productInfo && productInfo.data.landing_page_image != '' && (
              <LazyLoadImage src={productInfo.data.landing_page_image.url} alt={`${product.node.title} product shot`} effect="opacity"/>
            )}
            <Title>
              {productTopRow}
              <a>{product.node.title}</a>
              <p className="product-notes split-text">
                {productBottomRow}
                <strong>&#36;{productRoundedPrice}</strong>
              </p>
              {showBuyButton && (
                <AddToCart
                  id={product.node.variants.edges[0].node.id}
                  price={productRoundedPrice}
                  onClick={this.preventBubbling}
                  availableForSale={product.node.availableForSale}
                />
              )}
            </Title>
          </div>
        </Link>
      </ProductCard>
    );
  }
}
