import styled from 'styled-components';

const DeliveryStyles = styled.div`
  background-color: #E9E7E4;
  padding-top: 90px;
  padding-bottom: 90px;
  text-align: center;
  &.cbd-delivery {
    background-color: #d1d3cb;
  }
  &.stockists-delivery {
    background-color: transparent;
    padding: 0;
  }

  .inner-wrapper {
    max-width: 820px;
    padding: 0 4%;
    margin: 0 auto;
  }
  h2 {
    color: #6B6653;
  }
  h2,
  h3 {
    font-size: 3.8rem;
    font-family: 'Lora Regular', sans-serif;
    letter-spacing: 0.09rem;
    margin: 0 auto;
    line-height: 1.1;
    @media screen and (max-width: 768px) {
      font-size: 2.8rem;
      max-width: 322px;
    }
  }
  h3 {
    max-width: 600px;
  }
  .delivery-subheading {
    font-size: 1.8rem;
    font-family: 'Lora Regular';
    letter-spacing: 0.08rem;
    margin-top: 18px;
    margin-bottom: 45px;
    @media screen and (max-width: 768px) {
      max-width: 280px;
      margin-left: auto;
      margin-right: auto;
    }
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
    color: #9c8d72;
    font-size: 1rem;
    font-family: 'Gotham Bold';
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 30px;
    a {
      color: inherit;
    }
  }

  .button-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .gold-btn {
    background: #9c8d72;
    color: #f6f6f6;
    padding: 20px 50px;
    text-transform: uppercase;
    font-family: 'Gotham Bold', sans-serif;
    font-size: 1.3rem;
    line-height: 1;
    letter-spacing: 0.1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    width: 49%;
    display: inline-block;
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 1rem;
    }
    &.solo-btn {
      width: 100%;
    }
    &:hover {
      background-color: #726c59;
    }
  }
  .not-available-wrapper {
    h2 {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    .delivery-subheading {
      max-width: 440px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 6rem;
    }
  }
  .no-delivery-wrapper {
    .delivery-section-title {
      max-width: 540px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 6rem;
    }
  }
  .stockists-and-retailers {
    .section-title {
      font-size: 1.9rem;
      margin-bottom: 20px;
      text-align: left;
    }
    li h2 {
      font-family: 'Gotham Bold';
    }
    &.cols-2 {
      @media only screen and (min-width: 1025px) {
        grid-column-gap: 70px;
      }
    }
    .stockist-item {
      border-bottom: 1px solid #ecebe9;
      display: flex;
      align-items: center;
      padding: 26px 0;
      img {
        margin-right: 26px;
      }
      li {
        flex-grow: 1;
        padding: 0;
        margin-bottom: 0;
      }
      &:last-of-type {
        border-bottom: 0;
      }
    }
    ul {
      margin-bottom: 70px;
      @media only screen and (max-width: 1025px) {
        margin-bottom: 50px;
      }
      @media only screen and (max-width: 768px) {
        margin-bottom: 40px;
      }
    }
    li {
      border: 0;
      text-align: left;

      p {
        font-size: 1.2rem;
      }
    }
    h2 {
      font-size: 1.4rem;
    }
  }
`;

export const StockistDeliveryStyles = styled.header`
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

  .near-you-section {
    h1 {
      margin-bottom: 2rem;
    }
    .text-button {
      margin-bottom: 15rem;
    }
  }

  .not-near-you-section {
    text-align: center;
    &.container {
      max-width: 635px;
    }
    .delivery-subheading:first-of-type {
      max-width: 465px;
      margin-left: auto;
      margin-right: auto;
    }
    .delivery-subheading:last-of-type {
      max-width: 514px;
      margin-left: auto;
      margin-right: auto;
    }
    h1 {
      margin-bottom: 1.5rem;
    }
    hr {
      width: 80%;
      max-width: 590px;
      margin-left: auto;
      margin-right: auto;
      border: 0;
      border-bottom: 1px solid #979797;
      margin-top: 52px;
      margin-bottom: 60px;
    }
    p {
      font-family: 'Lora Regular';
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
    }

    .button-row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 4.5rem;
      padding-bottom: 3rem;
    }

    .gold-btn {
      background: #9c8d72;
      color: #f6f6f6;
      padding: 20px 50px;
      text-transform: uppercase;
      font-family: 'Gotham Bold', sans-serif;
      font-size: 1.3rem;
      line-height: 1;
      letter-spacing: 0.1rem;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      width: 49%;
      display: inline-block;
      @media only screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 1rem;
      }
      &:hover {
        background-color: #726c59;
      }
      &.solo-btn {
        width: 100%;
      }
    }
  }
`;

export default DeliveryStyles;
