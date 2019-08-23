import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import { CHECKOUT_QUERY } from './AddToCart';
import LineItem from './LineItem';

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

class Cart extends Component {
  render() {
    const { localStorageCheckout } = this.props;
    let shopifyCheckout;
    return (
      <Mutation mutation={TOGGLE_CART_MUTATION}>
        {toggleCart => (
          <Query query={LOCAL_STATE_QUERY}>
            {({ data }) => (
              <CartStyles open={data.cartOpen}>
                <header>
                  <CloseButton onClick={toggleCart} title="close">
                    <img src="/static/close_dark.svg" alt="Close Cart" />
                  </CloseButton>
                </header>
                <Query query={CHECKOUT_QUERY}>
                  {({ data, error, loading }) => {
                    if (loading) return null;
                    if (error) return <p>Error: {error.message}</p>;
                    if (data.checkout == undefined) return null;

                    const localCheckoutEmpty =
                      Object.entries(localStorageCheckout).length === 0 &&
                      localStorageCheckout.constructor === Object;

                    if (data.checkout && data.checkout.id != '') {
                      shopifyCheckout = data.checkout;
                    } else if (!localCheckoutEmpty) {
                      shopifyCheckout = localStorageCheckout;
                    }
                    // return null;

                    if (
                      shopifyCheckout &&
                      shopifyCheckout.lineItems.edges &&
                      shopifyCheckout.lineItems.edges.length > 0 &&
                      shopifyCheckout.lineItems.edges[0].node != undefined
                    ) {
                      return (
                        <div className="inner-wrapper">
                          <ul>
                            {shopifyCheckout.lineItems.edges.map(lineItem => {
                              if (lineItem.node == undefined) return null;
                              return (
                                <LineItem
                                  key={lineItem.node.id.toString()}
                                  line_item={lineItem.node}
                                  checkout={shopifyCheckout}
                                />
                              );
                            })}
                          </ul>
                          <footer>
                            <p className="cart-total split-text">
                              <span>Total:</span>{' '}
                              <span>${shopifyCheckout.totalPrice}</span>
                            </p>
                            <a
                              href={shopifyCheckout.webUrl}
                              title="Checkout"
                              className="gold-button"
                            >
                              Check Out
                            </a>
                          </footer>
                        </div>
                      );
                    }
                    return <p>Your cart is empty.</p>;
                  }}
                </Query>
                <div className="warning-text">
                  <p />
                </div>
              </CartStyles>
            )}
          </Query>
        )}
      </Mutation>
    );
  }
}

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
