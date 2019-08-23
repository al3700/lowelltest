import styled from 'styled-components';

const LineItemWrapper = styled.li`
  padding-bottom: 4rem;
  font-family: 'Gotham Bold', sans-serif;
  color: #333639;
  .title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    display: block;
  }
  .line-item-price {
    font-size: 1.1rem;
  }
  .variant-title {
    font-size: 1.2rem;
    text-transform: uppercase;
    transform: translateY(-10px);
    color: #333639;
    font-family: 'Nitti Light';
    font-size: 1.2rem;
  }
  .remove-btn {
    background: transparent;
    border: 0;
    box-shadow: none;
    color: #726c59;
    font-size: 1.1rem;
    cursor: pointer;
    outline: none;
  }
  .line-item-quantity-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 5px;
    margin-top: 2rem;
    border: 1px solid #dfdfdf;
    button {
      background-color: transparent;
      border: 0;
      font-size: 1.2rem;
      outline: none;
      cursor: pointer;
    }
  }
  .line-item-quantity {
    font-size: 1.2rem;
    color: #726c59;
  }
`;

export default LineItemWrapper;
