import React, { Component } from 'react';
import AgeCheckWrapper from './styles/AgeCheckStyles';
import ButtonDark from './styles/ButtonDark';

class AgeCheck extends Component {
  render() {
    const { action, showAgeCheck } = this.props;
    return (
      <AgeCheckWrapper className={showAgeCheck ? '' : 'hide'}>
        <div className="content">
          <img src="../static/stamped_edges.svg" alt="" />
          <div className="inner-content">
            <div className="padded">
              <img
                src="../static/icon.svg"
                alt="Lowell Icon"
                className="icon"
              />
              <h1>Are you 21+?</h1>
            </div>
            <div className="padded bottom">
              <ButtonDark type="button" onClick={action}>
                Yes
              </ButtonDark>
              <a href="https://www.google.com/" className="button">
                No
              </a>
            </div>
          </div>
        </div>
      </AgeCheckWrapper>
    );
  }
}

export default AgeCheck;
