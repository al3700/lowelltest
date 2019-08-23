import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import ButtonDark from './styles/ButtonDark';

const CHECKOUT_QUERY = gql`
  {
    checkout @client {
      id
      lineItems {
        edges
      }
      subtotalPrice
      totalPrice
      totalTax
      webUrl
    }
  }
`;

const CHECKOUT_ID_QUERY = gql`
  {
    checkoutId @client
  }
`;

const CREATE_CHECKOUT_MUTATION = gql`
  mutation {
    createOrUpdateCheckout @client
  }
`;

const CheckoutFragment = gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalTax
    subtotalPrice
    totalPrice
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            title
            image {
              src
            }
            price
          }
          quantity
        }
      }
    }
  }
`;

const ADD_LINE_ITEM_MUTATION = gql`
  mutation ADD_LINE_ITEM_MUTATION(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemInput!]!
  ) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

const REMOVE_ITEM_MUTATION = gql`
  mutation REMOVE_ITEM_MUTATION($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(
      checkoutId: $checkoutId
      lineItemIds: $lineItemIds
    ) {
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

const UPDATE_LINE_ITEM_MUTATION = gql`
  mutation UPDATE_LINE_ITEM_MUTATION(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemUpdateInput!]!
  ) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

class AddToCart extends Component {
  render() {
    const { id, price, availableForSale } = this.props;
    // console.log(id);
    let buttonText;
    if (availableForSale) {
      buttonText = (
        <span>
          Buy Now &ndash; <span>&#36;{price} </span>
        </span>
      );
    } else {
      buttonText = 'Coming Soon';
    }

    return (
      <Query query={CHECKOUT_ID_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <Mutation
              mutation={ADD_LINE_ITEM_MUTATION}
              variables={{
                checkoutId: data.checkoutId,
                lineItems: [{ variantId: id, quantity: 1 }],
              }}
              update={(cache, { data: { checkoutLineItemsAdd } }) => {
                const cartData = {
                  data: {
                    cartOpen: true,
                  },
                };
                cache.writeData(cartData);

                cache.writeQuery({
                  query: CHECKOUT_QUERY,
                  data: {
                    checkout: [checkoutLineItemsAdd][0].checkout,
                  },
                });

                localStorage.setItem(
                  'checkout',
                  JSON.stringify([checkoutLineItemsAdd][0].checkout)
                );

                localStorage.setItem(
                  'checkoutId',
                  [checkoutLineItemsAdd][0].checkout.id
                );
              }}
            >
              {checkoutLineItemsAdd => (
                <ButtonDark
                  type="button"
                  onClick={checkoutLineItemsAdd}
                  className="add-to-cart"
                  disabled={!availableForSale}
                >
                  {buttonText}
                </ButtonDark>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default AddToCart;
export {
  CHECKOUT_ID_QUERY,
  CHECKOUT_QUERY,
  CREATE_CHECKOUT_MUTATION,
  CheckoutFragment,
  REMOVE_ITEM_MUTATION,
  UPDATE_LINE_ITEM_MUTATION,
};
