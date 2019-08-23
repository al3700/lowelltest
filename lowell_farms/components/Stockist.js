import React, { Component } from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

export default class Stockist extends Component {
  render() {
    const { stockist, stockistType } = this.props;

    // Retailer
    if (stockistType == 'retailer' && stockist.stockist_url != '') {
      const addressURL = `https://www.google.com/maps/place/${RichText.asText(
        stockist.stockist_address
      )
        .split(' ')
        .join('+')}`;

      return (
        <ListItem>
          <a
            href={
              stockist.stockist_url != '' &&
              RichText.asText(stockist.stockist_url)
            }
            target="_blank"
          >
            <h2>
              {stockist.stockist_name != '' &&
                RichText.asText(stockist.stockist_name)}
            </h2>
          </a>
          <p>
            <a href={addressURL} target="_blank">
              {stockist.stockist_address != '' &&
                RichText.asText(stockist.stockist_address)}
            </a>
          </p>
        </ListItem>
      );
    }
    if (stockistType == 'retailer') {
      const addressURL = `https://www.google.com/maps/place/${RichText.asText(
        stockist.stockist_address
      )
        .split(' ')
        .join('+')}`;

      return (
        <ListItem>
          <a href={addressURL} target="_blank">
            <h2>
              {stockist.stockist_name != '' &&
                RichText.asText(stockist.stockist_name)}
            </h2>
            <p>
              {stockist.stockist_address != '' &&
                RichText.asText(stockist.stockist_address)}
            </p>
          </a>
        </ListItem>
      );
    }

    const deliveryUrl = RichText.asText(stockist.delivery_service_url);

    if (stockist.delivery_service_url != '' && stockistType == 'delivery') {
      let readableUrl = deliveryUrl.replace(/(^\w+:|^)\/\//, '');
      readableUrl = readableUrl.replace(/\/$/, '');
      return (
        <ListItem>
          <a href={deliveryUrl} target="_blank">
            <h2>
              {stockist.delivery_service_name != '' &&
                RichText.asText(stockist.delivery_service_name)}
            </h2>
            <p>{readableUrl}</p>
          </a>
        </ListItem>
      );
    }

    // Delivery Service
    return (
      <ListItem>
        <h2>
          {stockist.delivery_service_name != '' &&
            RichText.asText(stockist.delivery_service_name)}
        </h2>
      </ListItem>
    );
  }
}

const ListItem = styled.li`
  border: 1px solid #cecbc5;
  padding: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
  h2 {
    font-family: 'Gotham Bold';
    font-size: 2.4rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #726c59;
    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
      line-height: 1.2;
    }
  }
  p {
    margin: 0;
    font-family: 'Nitti Light';
    color: #333639;
    font-size: 1.5rem;
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
      line-height: 1.2;
      margin-top: 4px;
    }
  }
  a {
    color: inherit;
    text-transform: uppercase;
  }
`;
