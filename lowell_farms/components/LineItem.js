import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import LineItemWrapper from './styles/LineItemStyles';
import {
  CHECKOUT_QUERY,
  REMOVE_ITEM_MUTATION,
  UPDATE_LINE_ITEM_MUTATION,
} from './AddToCart';

class LineItem extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.state = {
      quantity: this.props.line_item.quantity,
    };
  }

  render() {
    const { checkout, line_item } = this.props;
    const price = (line_item.quantity * line_item.variant.price).toFixed(2);
    const productRoundedPrice = price.replace(/\.00$/, '');

    return (
      <LineItemWrapper>
        <div className="cols-28p">
          <div>
            {line_item.variant.image ? (
              <img
                src={line_item.variant.image.src}
                alt={`${line_item.title} product shot`}
              />
            ) : null}
          </div>
          <div className="line-item-content">
            <div>
              <span className="title small-caps">{line_item.title}</span>
              {line_item.variant.title != 'Default Title' && (
                <div className="variant-title">{line_item.variant.title}</div>
              )}
            </div>
            <div>
              <div className="split-text">
                <span className="line-item-price ">${productRoundedPrice}</span>
                <Mutation
                  mutation={REMOVE_ITEM_MUTATION}
                  variables={{
                    checkoutId: checkout && checkout.id,
                    lineItemIds: [line_item.id],
                  }}
                  update={(cache, { data: { checkoutLineItemsRemove } }) => {
                    cache.writeQuery({
                      query: CHECKOUT_QUERY,
                      data: {
                        checkout: [checkoutLineItemsRemove][0].checkout,
                      },
                    });

                    localStorage.setItem(
                      'checkout',
                      JSON.stringify([checkoutLineItemsRemove][0].checkout)
                    );

                    localStorage.setItem(
                      'checkoutId',
                      [checkoutLineItemsRemove][0].checkout.id
                    );
                  }}
                >
                  {checkoutLineItemsRemove => (
                    <button
                      type="button"
                      className="small-caps remove-btn"
                      onClick={checkoutLineItemsRemove}
                    >
                      Remove
                    </button>
                  )}
                </Mutation>
              </div>
              <div className="line-item-quantity-container">
                <Mutation
                  mutation={UPDATE_LINE_ITEM_MUTATION}
                  variables={{
                    checkoutId: checkout && checkout.id,
                    lineItems: [
                      {
                        id: line_item.id,
                        quantity: parseInt(this.state.quantity - 1, 10),
                      },
                    ],
                  }}
                  update={(cache, { data: { checkoutLineItemsUpdate } }) => {
                    const { checkout } = cache.readQuery({
                      query: CHECKOUT_QUERY,
                    });

                    cache.writeQuery({
                      query: CHECKOUT_QUERY,
                      data: {
                        checkout: [checkoutLineItemsUpdate][0].checkout,
                      },
                    });

                    localStorage.setItem(
                      'checkout',
                      JSON.stringify([checkoutLineItemsUpdate][0].checkout)
                    );

                    localStorage.setItem(
                      'checkoutId',
                      [checkoutLineItemsUpdate][0].checkout.id
                    );

                    this.setState({ quantity: this.state.quantity - 1 });
                  }}
                >
                  {checkoutLineItemsUpdate => (
                    <button
                      type="button"
                      className="line-item-quantity-update"
                      onClick={checkoutLineItemsUpdate}
                    >
                      &ndash;
                    </button>
                  )}
                </Mutation>
                <span className="line-item-quantity">{line_item.quantity}</span>
                <Mutation
                  mutation={UPDATE_LINE_ITEM_MUTATION}
                  variables={{
                    checkoutId: checkout && checkout.id,
                    lineItems: [
                      {
                        id: line_item.id,
                        quantity: parseInt(this.state.quantity + 1, 10),
                      },
                    ],
                  }}
                  update={(cache, { data: { checkoutLineItemsUpdate } }) => {
                    const { checkout } = cache.readQuery({
                      query: CHECKOUT_QUERY,
                    });

                    cache.writeQuery({
                      query: CHECKOUT_QUERY,
                      data: {
                        checkout: [checkoutLineItemsUpdate][0].checkout,
                      },
                    });

                    this.setState({ quantity: this.state.quantity + 1 });

                    localStorage.setItem(
                      'checkout',
                      JSON.stringify([checkoutLineItemsUpdate][0].checkout)
                    );

                    localStorage.setItem(
                      'checkoutId',
                      [checkoutLineItemsUpdate][0].checkout.id
                    );
                  }}
                >
                  {checkoutLineItemsUpdate => (
                    <button
                      type="button"
                      className="line-item-quantity-update"
                      onClick={checkoutLineItemsUpdate}
                    >
                      +
                    </button>
                  )}
                </Mutation>
              </div>
            </div>
          </div>
        </div>
      </LineItemWrapper>
    );
  }
}

export default LineItem;
