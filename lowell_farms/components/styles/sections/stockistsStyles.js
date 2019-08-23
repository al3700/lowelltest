import styled from 'styled-components';

export const StockistWrapper = styled.main`
  background-color: #ecebe9;
  padding-top: 100px;
  padding-bottom: 30px;
  @media only screen and (max-width: 768px) {
    padding-top: 70px;
  }
  h1 {
    font-size: 7.8rem;
    font-family: 'Lora Regular', serif;
    letter-spacing: 0.1rem;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto 50px;
    line-height: 1.1;
    @media only screen and (max-width: 1000px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 39px;
      width: 92%;
    }
  }

  header {
    .container {
      max-width: 595px;
    }
    form {
      margin-bottom: 115px;
    }
    button {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
  .newsletter-callout {
    padding-top: 0;
    form {
      padding-top: 0;
    }
  }
`;

export const StockistsSection = styled.section`
  .section-title {
    font-family: 'Lora Regular', serif;
    font-size: 3.1rem;
    margin-bottom: 16px;
    margin-top: 70px;
    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  .view-more-btn {
    max-width: 390px;
    margin-left: auto;
    margin-right: auto;
  }
  img {
    display: inline-block;
    margin-right: 14px;
    @media screen and (max-width: 768px) {
      width: 28px;
    }
  }
`;
