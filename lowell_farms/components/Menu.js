/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styled from 'styled-components';


class Menu extends Component {

  render() {
    const { pageData, sitewideData } = this.props;

    console.log(sitewideData);

    return (
      <div>

        <MenuWrapper>
          <iframe src={`https://docs.google.com/viewer?url=${pageData.menu_pdf.url}&embedded=true`}></iframe>
        </MenuWrapper>

      </div>
    );
  }
}

export default Menu;


const MenuWrapper = styled.div`
  background-color: white;
  iframe {
    width: 100%;
    height: calc(100vh - 73px);
  }
  @media (max-width: 960px) {
    iframe {
      width: 100%;
      height: calc(100vh - 39px);
    }
  }
`;
