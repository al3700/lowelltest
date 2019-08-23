import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';

import zipcodes from 'zipcodes';
import { UPDATE_ZIP_CODE_MUTATION } from './ZipCodeCheck';
import { TOGGLE_ZIP_BANNER_MUTATION } from './DeliveryBanner';
import Input from './styles/Input';

export default class Delivery extends Component {
  state = {
    zipCode: '',
    invalidZip: false,
  };

  handleChange = e => {
    const { name, value } = e.target;
    if (value.length < 6) {
      this.setState({ [name]: value });
    }
  };

  render() {
    const { placeholderText, buttonText, findNearestStockists } = this.props;
    return (
      <Mutation mutation={TOGGLE_ZIP_BANNER_MUTATION}>
        {(toggleZipBanner, { loading, error }) => (
          <Mutation mutation={UPDATE_ZIP_CODE_MUTATION} variables={this.state}>
            {(updateZipCode, { loading, error }) => (
              <fieldset disabled={loading} aria-busy={loading}>
                <form
                  action=""
                  autoComplete="off"
                  onSubmit={async e => {
                    e.preventDefault();

                    // Check for valid zip syntax (5 numbers)
                    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(
                      this.state.zipCode
                    );

                    // Look up zip code in valid zip codes
                    const locationInfo = zipcodes.lookup(
                      this.state.zipCode
                    );

                    if (!isValidZip || locationInfo == undefined) {
                      this.setState({ invalidZip: true });
                      return;
                    }

                    // IS VALID ZIP -> Store in Apollo state
                    this.setState({ invalidZip: false });
                    const res = await updateZipCode();

                    // Reset form
                    this.setState({ zipCode: '' });
                  }}
                >
                  <div className="validation-wrapper">
                    <Input
                      type="number"
                      id="zipCode"
                      name="zipCode"
                      placeholder={placeholderText}
                      value={this.state.zipCode}
                      onChange={this.handleChange}
                    />
                    {this.state.invalidZip && (
                      <p className="error-message">
                        Please enter a valid 5 digit zip code.
                      </p>
                    )}
                  </div>

                  <button type="submit" className="wider">
                    {buttonText}
                  </button>
                </form>
              </fieldset>
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}
