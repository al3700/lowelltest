/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import ButtonGold from './styles/ButtonGold';
import Newsletter from './Newsletter';
import LearnMore from './styles/LearnMore';
import AddToCart from './AddToCart';
import {
  ProductDetailPage,
  CannabisLinks,
} from './styles/sections/productDetailStyles';
import VariantSelector from './VariantSelector';

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentWillMount() {
    this.props.shopifyProduct.options.forEach(selector => {
      this.setState({
        selectedOptions: { [selector.name]: selector.values[0] },
      });
    });
  }

  handleOptionChange(event) {
    const { target } = event;
    const { selectedOptions } = this.state;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.shopifyProduct.variants.edges.find(
      variant =>
        variant.node.selectedOptions.every(
          selectedOption =>
            selectedOptions[selectedOption.name] === selectedOption.value
        )
    ).node;

    this.setState({
      selectedVariant,
      selectedVariantImage: selectedVariant.image.src,
    });
  }

  render() {
    const {
      pageData,
      quotesData,
      shopifyProduct,
      newsletterData,
      productInfo,
      sitewideData,
    } = this.props;

    let metaTitle;
    if (productInfo.meta_title != null && productInfo.meta_title != '') {
      metaTitle = productInfo.meta_title;
    } else if (
      productInfo.product_title != null &&
      productInfo.product_title != ''
    ) {
      metaTitle = RichText.asText(productInfo.product_title);
    }

    let metaDescription;
    if (
      productInfo.meta_description != null &&
      productInfo.meta_description != ''
    ) {
      metaDescription = productInfo.meta_description;
    } else if (
      productInfo.full_product_description != null &&
      productInfo.full_product_description != ''
    ) {
      metaDescription = RichText.asText(productInfo.full_product_description);
    } else {
      metaDescription = RichText.asText(productInfo.title);
    }

    let aboutImage;

    switch (productInfo.shopify_product.product_type) {
      case 'Accessories':
        aboutImage = pageData.accessories_footer_image;
        break;
      case 'Apparel':
        aboutImage = pageData.apparel_footer_image;
        break;
      default:
        aboutImage = pageData.learn_more_image;
    }

    const variant =
      this.state.selectedVariant || shopifyProduct.variants.edges[0].node;

    const variant_selectors =
      shopifyProduct.options[0].values.length > 1 &&
      shopifyProduct.options.map(option => (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      ));

    const productRoundedPrice = shopifyProduct.variants.edges[0].node.price.replace(
      /\.00$/,
      ''
    );

    return (
      <ProductDetailPage>
        <Head>
          <title>Lowell Herb Co | {metaTitle}</title>
          <meta name="description" content={metaDescription} />
          {productInfo.keywords != null && (
            <meta name="keywords" content={productInfo.keywords} />
          )}
        </Head>
        <div className="container header">
          <div className="cols-55p">
            <div className="v-h-aligner">
              <div>
                <img
                  src={
                    productInfo &&
                    productInfo.product_detail_image_gallery.length > 0 &&
                    productInfo.product_detail_image_gallery[0].gallery_image
                      .url
                  }
                  alt={shopifyProduct.title}
                />
              </div>
            </div>
            <div className="vertical-aligner">
              {/* PRODUCT INFO CARD */}
              <div className="product-info-card">
                <h1 className="small-caps dashed-underline">
                  {shopifyProduct.title}
                </h1>
                <div className="description">
                  {productInfo &&
                    RichText.asText(productInfo.full_product_description)}
                </div>
                {variant_selectors}
                <AddToCart
                  id={variant.id}
                  price={productRoundedPrice}
                  availableForSale={shopifyProduct.availableForSale}
                />
              </div>
            </div>
          </div>
        </div>
        <CannabisLinks>
          <div className="container">
            <div className="cols-2">
              <div className="link-card">
                <Link href="/cannabis">
                  <a>
                    <h3>Lowell Cannabis</h3>
                    <p>View Products</p>
                  </a>
                </Link>
              </div>
              <div className="link-card">
                <Link href="/cbd">
                  <a>
                    <h3>Lowell CBD</h3>
                    <p>View Products</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </CannabisLinks>
        <LearnMore className="container padding-bottom">
          <div className="cols-2">
            <div>
              <img
                src={aboutImage && aboutImage.url}
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
                    {pageData.learn_more_button_text[0].text}
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
