import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import { CHECKOUT_QUERY } from './AddToCart';

export default class ToggleCartButton extends Component {
  render() {
    const { localStorageCheckout } = this.props;
    let shopifyCheckout;
    return (
      <Mutation mutation={TOGGLE_CART_MUTATION}>
        {toggleCart => (
          <button onClick={toggleCart} className="toggle-cart" type="button">
            <span className="hide-mobile-nav">Cart</span>
            <span className="show-mobile-nav">
              <img src="/static/cart_icon_mobile.svg" alt="Shopping Cart bag" />
            </span>
            <Query query={CHECKOUT_QUERY}>
              {({ data, error, loading }) => {
                if (loading) return <span className="cart-count">0</span>;
                if (error) return <span className="cart-count">0</span>;
                if (data.checkout == undefined)
                  return <span className="cart-count">0</span>;

                const localCheckoutEmpty =
                  Object.entries(localStorageCheckout).length === 0 &&
                  localStorageCheckout.constructor === Object;

                if (data.checkout && data.checkout.id != '') {
                  shopifyCheckout = data.checkout;
                } else if (!localCheckoutEmpty) {
                  shopifyCheckout = localStorageCheckout;
                } else {
                  shopifyCheckout = data.checkout;
                }
                let cartCount = 0;
                for (
                  let index = 0;
                  index < shopifyCheckout.lineItems.edges.length;
                  index++
                ) {
                  if (
                    shopifyCheckout.lineItems.edges[index].node != undefined
                  ) {
                    cartCount +=
                      shopifyCheckout.lineItems.edges[index].node.quantity;
                  }
                }

                const cartClass =
                  cartCount > 0 ? 'gold-badge cart-count' : 'cart-count';
                return <span className={cartClass}>{cartCount}</span>;
              }}
            </Query>
          </button>
        )}
      </Mutation>
    );
  }
}
