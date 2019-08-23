import styled from 'styled-components';

const DetailDeliveryStyles = styled.div`
  text-align: center;
  padding-top: 1.7rem;
  border-top: 1px solid #dadad9;
  h2 {
    font-family: 'Lora regular';
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  h3 {
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }
  input {
    display: block;
    width: 100%;
    font-family: inherit;
    border: 0;
    padding: 16px 12px;
    background-color: white;
    box-shadow: none;
    outline: none;
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    text-transform: uppercase;
  }
  button,
  .text-button {
    display: block;
    width: 100%;
    padding: 20px 12px 20px;
    text-align: center;
    background-color: #333639;
    color: white;
    font-size: 1.3rem;
    font-family: 'Gotham Bold';
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    line-height: 1;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #242628;
    }
    &.dark-button {
      max-width: 492px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .text-button {
    background: none;
    padding: 0;
    color: #9c8d72;
    font-size: 1rem;
    margin-top: 3rem;
    &:hover {
      background: none;
    }
  }
  .not-in-ca {
    font-size: 1rem;
    font-family: 'Gotham Bold', sans-serif;
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    color: #9c8d72;
  }
  .no-delivery-wrapper {
    h2 {
      font-size: 1.7rem;
      max-width: 80%;
      text-align: left;
      color: #333639;
      margin-bottom: 0;
      img {
        display: inline-block;
        margin-right: 20px;
      }
    }
  }
  .stockists-and-retailers {
    max-height: 350px;
    overflow-y: scroll;
    li {
      text-align: left;
      border: 0;
      border-bottom: 1px solid #ecebe9;
      padding: 20px 0;
      margin: 0;
      h2 {
        font-size: 1.4rem;
        font-family: 'Gotham Bold';
      }
      p {
        font-size: 1.2rem;
      }
    }
    .section-title {
      font-family: 'Gotham Bold', sans-serif;
      font-size: 1.6rem;
      text-transform: uppercase;
      color: #333639;
      margin: 35px 0 0;
      letter-spacing: 0.1rem;
    }
  }
  .view-more {
    font-size: 1.1rem;
    text-transform: uppercase;
    font-family: 'Gotham Bold', sans-serif;
    letter-spacing: 0.1rem;
    color: #9c8d72;
    padding-top: 30px;
    display: inline-block;
  }
`;

export default DetailDeliveryStyles;
