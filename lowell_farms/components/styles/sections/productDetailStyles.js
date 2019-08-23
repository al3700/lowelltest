import styled from 'styled-components';

export const ProductDetailPage = styled.main`
  background-color: #ecebe9;
  padding-top: 60px;

  h1 {
    font-size: 1.8rem;
    color: #333639;
    margin-bottom: 6px;
  }
  .thin-caps,
  .info-item {
    font-family: 'Nitti Light', serif;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.06rem;
    margin-bottom: 6px;
    margin-top: 0;
    color: #69574e;
  }
  .dashed-underline {
    border-bottom: 1px dashed #9e9781;
  }
  .product-info-card {
    background-color: #f6f6f6;
    padding: 30px;
    @media screen and (max-width: 768px) {
      padding: 20px;
    }
    .description {
      padding-top: 2rem;
      padding-bottom: 3rem;
    }
    .type {
      color: #7c7769;
      font-family: 'Gotham Bold', sans-serif;
      font-size: 1.6rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      display: flex;
      align-items: center;
    }
    .percent {
      font-family: 'Nitti Bold', serif;
      text-transform: uppercase;
      font-size: 1.7rem;
      letter-spacing: 0.08rem;
      color: #333639;
      span {
        font-family: 'Gotham Book';
        font-size: 1.45rem;
        color: #6b6653;
      }
    }
    .icon {
      display: inline-block;
      margin-right: 12px;
      position: relative;
      bottom: 2px;
    }
    .thin-caps,
    .info-item {
      color: #69574e;
    }
    .info-item span:nth-of-type(2) {
      color: #333639;
    }
    .info-items {
      margin-top: 40px;
      margin-bottom: 100px;
    }
    .farms {
      margin-top: 25px;
    }
  }
  .farms span,
  .farms a {
    color: #333639;
    font-family: 'Gotham Bold', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
    line-height: 1;
  }
  .farms {
    margin-bottom: 6px;
  }
  .header {
    padding-bottom: 100px;
  }
`;

export const InsidePackSection = styled.section`
  background-color: #e8e7e5;
  padding-top: 100px;
  padding-bottom: 150px;
  .rich-text {
    font-family: 'Nitti Light', serif;
    font-size: 1.3rem;
    color: #333639;
    letter-spacing: 0.1rem;
    max-width: 410px;
    margin-bottom: 35px;
  }
  h3 {
    font-family: 'Lora Regular', serif;
    font-size: 3rem;
    color: #6b6653;
    letter-spacing: 0.08rem;
    margin-bottom: 4px;
    margin-top: 0;
  }
  h5 {
    color: #69574e;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-family: 'Gotham Bold', sans-serif;
    border-bottom: 1px solid #69574e;
    padding-bottom: 8px;
    margin-top: 14px;
    margin-bottom: 0;
  }

  .inside-pack-list {
    margin-top: 18px;
  }
  .inside-pack-list:first-of-type {
    margin-top: 0;
  }
  li {
    margin: 0;
  }
  li span {
    padding-top: 6px;
  }
  li:first-of-type span {
    padding-top: 20px;
  }
  li:last-of-type span {
    padding-bottom: 18px;
  }
  .border-left {
    border-left: 1px solid #69574e;
    padding-left: 20px;
  }
`;

export const CannabisLinks = styled.section`
  .container {
    max-width: 1053px;
  }
  .cols-2 {
    @media screen and (min-width: 1058px) {
      grid-column-gap: 65px;
    }
  }
  .link-card {
    border: 1px solid #979797;
    text-align: center;
    font-family: 'Lora Regular', serif;
    padding: 50px 20px 30px;
  }
  h3 {
    font-size: 5.8rem;
    max-width: 300px;
    line-height: 1;
    margin: 0 auto 45px;
  }
  p {
    font-size: 1.6rem;
  }
`;
