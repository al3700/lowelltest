import styled from 'styled-components';

const BuyButton = styled.button`
  background: #333639;
  color: #f6f6f6;
  padding: 18px 50px;
  text-transform: uppercase;
  font-family: 'Gotham Bold', sans-serif;
  letter-spacing: 0.1rem;
  display: block;
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  line-height: 1;
  transition: all 0.4s ease-in-out;
  &.add-to-cart {
    margin-top: 30px;
  }
  &.wider {
    max-width: 554px;
    width: 100%;
    padding: 20px 50px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 70px;
  }
  &:hover {
    background-color: #242628;
  }
  &:disabled {
    cursor: default;
    &:hover {
      background: #333639;
    }
  }
`;

export default BuyButton;
