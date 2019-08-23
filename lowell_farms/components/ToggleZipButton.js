import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import {
  TOGGLE_ZIP_MUTATION,
  ZIP_SCREEN_QUERY,
  ZIP_CODE_QUERY,
} from './ZipCodeCheck';

class ToggleCartButton extends Component {
  render() {
    return (
      <Mutation mutation={TOGGLE_ZIP_MUTATION}>
        {toggleZipCodeCheck => (
          <Query query={ZIP_SCREEN_QUERY}>
            {({ data }) => {
              const closeButtonClass = data.zipCodeCheckOpen
                ? 'zip-showing'
                : '';
              return (
                <button
                  type="button"
                  onClick={toggleZipCodeCheck}
                  title="Zip Code Toggle"
                  className={`zip-code ${closeButtonClass}`}
                >
                  <span className="zip-close">
                    <img
                      src="../static/close_light.svg"
                      alt="Close"
                      title="Close Zip Code Finder"
                    />
                  </span>
                  <Query query={ZIP_CODE_QUERY}>
                    {({ data: { zipCode } }) => {
                      const iconColor = zipCode == '' ? '#FFFFFF' : '#C4B68C';
                      zipCode = zipCode == '' ? 'Zip Code' : zipCode;
                      return (
                        <span className="zip-code-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="19"
                            viewBox="0 0 13 19"
                            className="show-mobile"
                          >
                            <path
                              fill={iconColor}
                              fillRule="evenodd"
                              d="M385.499983,16 C381.910578,16 379,18.8686075 379,22.3807965 C379,23.1054262 379.321337,24.0133976 379.796637,25.0990363 C380.271937,26.1846945 380.915329,27.4195418 381.594358,28.6536769 C382.952414,31.1219255 384.471264,33.602995 385.098151,34.7646723 C385.175265,34.9091034 385.33048,35 385.499994,35 C385.669509,35 385.824723,34.9091034 385.901838,34.7646723 C386.528725,33.602995 388.047552,31.1219255 389.405642,28.6536769 C390.084665,27.4195418 390.721004,26.1846945 391.196291,25.0990363 C391.671599,24.0133976 392,23.1054262 392,22.3807965 C392,18.8687953 389.091499,16 385.499983,16 L385.499983,16 Z M385.503262,19.5185185 C386.695079,19.5185185 387.666667,20.4685701 387.666667,21.6296296 C387.666667,22.7891279 386.695079,23.7407407 385.503262,23.7407407 C384.311466,23.7407407 383.333333,22.7891279 383.333333,21.6296296 C383.333333,20.4685701 384.311466,19.5185185 385.503262,19.5185185 L385.503262,19.5185185 Z"
                              transform="translate(-379 -16)"
                            />
                          </svg>

                          <span className="hide-mobile">{zipCode}</span>
                        </span>
                      );
                    }}
                  </Query>
                </button>
              );
            }}
          </Query>
        )}
      </Mutation>
    );
  }
}

export default ToggleCartButton;
