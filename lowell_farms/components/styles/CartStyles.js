import styled from 'styled-components';

const CartStyles = styled.div`
  padding: 20px;
  position: relative;
  background: #ecebe9;
  position: fixed;
  overflow: scroll;
  height: 100%;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 412px;
  bottom: 0;
  transform: translateX(110%);
  transition: all 0.3s;
  z-index: 400;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props => props.open && `transform: translateX(0);`};
  box-shadow: rgba(0, 0, 0, 0.5) 0 2px 44px;
  header {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  img {
    @media only screen and (max-width: 768px) {
      max-width: 200px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
    }
  }
  footer {
    margin-top: 2rem;
    padding-top: 2rem;
    .gold-button {
      background: #726c59;
      color: #f6f6f6;
      text-transform: uppercase;
      font-family: 'Gotham Bold', sans-serif;
      font-size: 1.3rem;
      line-height: 1;
      letter-spacing: 0.1rem;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      width: 100%;
      display: block;
      padding: 20px;
      margin-bottom: 2rem;
      text-align: center;
    }
  }
  .warning-text {
    margin-top: 18px;
    font-size: 1rem;
    font-family: 'Lora Regular', serif;
    color: #726c59;
    letter-spacing: 0.1rem;
    line-height: 1.1;
  }
  .inner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }
  .cart-total {
    font-family: 'Lora Regular', serif;
    font-size: 2.2rem;
    color: #333639;
  }
`;

export default CartStyles;
