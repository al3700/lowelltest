import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import ZipCodeCheckStyles from './styles/ZipCodeCheckStyles';
import ZipCodeForm from './ZipCodeForm';

const ZIP_SCREEN_QUERY = gql`
  query {
    zipCodeCheckOpen @client
  }
`;

const TOGGLE_ZIP_MUTATION = gql`
  mutation {
    toggleZipCodeCheck @client
  }
`;

const ZIP_CODE_QUERY = gql`
  query {
    zipCode @client
  }
`;

const UPDATE_ZIP_CODE_MUTATION = gql`
  mutation($zipCode: String!) {
    updateZipCode(zipCode: $zipCode) @client
  }
`;

class ZipCodeCheck extends Component {
  state = {
    slide: 0, // How much should the Navbar slide up or down
    lastScrollY: 0, // Keep track of current position in state
    opacityVal: 1,
  };

  componentDidMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      this.props.client.writeData({
        data: {
          zipCodeCheckOpen: false,
        },
      });
    }
  };

  toggleZipCodeScreen = (e, toggleZipCodeCheck) => {
    if (e.target.closest('.zip-code-check-wrapper') == null) {
      toggleZipCodeCheck();
    }
  };

  render() {
    return (
      <Mutation mutation={TOGGLE_ZIP_MUTATION}>
        {toggleZipCodeCheck => (
          <Query query={ZIP_SCREEN_QUERY}>
            {({ data }) => (
              <ZipCodeCheckStyles
                open={data.zipCodeCheckOpen}
                style={{
                  marginTop: `${this.state.slide}`,
                  opacity: `${this.state.opacityVal}`,
                }}
                onClick={e => this.toggleZipCodeScreen(e, toggleZipCodeCheck)}
              >
                <div className="zip-code-check-wrapper">
                  <h2>Update your location:</h2>
                  <ZipCodeForm
                    placeholderText="EX: 90028"
                    buttonText="Update"
                  />
                </div>
              </ZipCodeCheckStyles>
            )}
          </Query>
        )}
      </Mutation>
    );
  }
}

export default ZipCodeCheck;
export {
  ZIP_SCREEN_QUERY,
  TOGGLE_ZIP_MUTATION,
  ZIP_CODE_QUERY,
  UPDATE_ZIP_CODE_MUTATION,
};
