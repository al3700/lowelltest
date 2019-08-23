import styled from 'styled-components';

const ProductCard = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    opacity: 0.9;
    img {
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 14px;
    margin-bottom: 30px;
  }
  .split-aligner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    line-height: 1;
    p {
      margin-top: 0;
      margin-bottom: 25px;
    }
  }
  img {
    cursor: pointer;
    transition: all 0.4s ease-in-out;
  }

  .product-notes {
    font-size: 1.3rem;
    text-align: left;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: #69574e;
    margin: 0 0 0;
    strong {
      font-family: 'Nitti Bold', serif;
      color: #333639;
    }
  }

  .product-type {
    text-transform: uppercase;
    font-size: 1.1rem;
    font-family: 'Gotham Bold', sans-serif;
    letter-spacing: 0.1rem;
    color: #7c7769;
  }

  .product-amount {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-family: 'Nitti Bold', serif;
    font-size: 1.2rem;

    span {
      color: #6b6653;
      font-family: 'Gotham Book', sans-serif;
      font-size: 1.2rem;
      margin-left: 5px;
      position: relative;
      top: 1px;
    }
  }
`;

export default ProductCard;
