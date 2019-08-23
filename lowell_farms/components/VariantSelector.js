import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSelectWrapper = styled.div`
  /* Reset Select */
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0;
    background: #f6f6f6;
    border-radius: 0;
    background-image: none;
  }
  /* Custom Select */
  .select {
    position: relative;
    display: block;
    width: 100%;
    height: 3em;
    line-height: 3;
    background: #f6f6f6;
    border: 1px solid #d0d0d0;
    overflow: hidden;
    border-radius: 0;
  }
  select {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 0 0 20px;
    color: #333639;
    font-family: 'Nitti Light', serif;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  select::-ms-expand {
    display: none;
  }
  /* Arrow */
  .select::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #333639;
    position: absolute;
    transform: translateY(-25%);
    top: 50%;
    right: 20px;
    bottom: 0;
    padding: 0;
    background: #f6f6f6;
    pointer-events: none;
  }
  .select::after {
    -webkit-transition: 0.25s all ease;
    -o-transition: 0.25s all ease;
    transition: 0.25s all ease;
  }
`;

class VariantSelector extends Component {
  render() {
    return (
      <StyledSelectWrapper>
        <div className="select">
          <select
            className="Product__option"
            name={this.props.option.name}
            key={this.props.option.name}
            onChange={this.props.handleOptionChange}
          >
            {this.props.option.values.map(value => (
              <option
                value={value}
                key={`${this.props.option.name}-${value}`}
              >{`${value}`}</option>
            ))}
          </select>
        </div>
      </StyledSelectWrapper>
    );
  }
}

export default VariantSelector;
