import styled from 'styled-components';

export const BlogLandingWrapper = styled.main`
  .slick-dots li {
    color: transparent;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    background-color: white;
    opacity: .3;
    cursor: pointer;
    margin-left: 12px;
    button {
      opacity: 0;
      cursor: pointer;
    }
  }
  .slick-next,
  .slick-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: transparent;
    z-index: 20;
    &::before {
      cursor: pointer;
      display: block;
      width: 68px;
      padding: 8px;
    }
  }
  .slick-prev {
    left: 30px;
    &::before {
      content: url('../../static/arrow-left.svg');
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  .slick-next {
    right: 30px;
    &::before {
      content: url('../../static/arrow-right.svg');
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  .slick-dots .slick-active {
    opacity: 1;
  }
  .slick-dots {
    position: absolute;
    bottom: 40px;
    right: 40px;
  }
  .clearer {
    clear: both;
  }

  .small-nitti-caps {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1.1rem;
    font-family: 'Nitti Light';
  }
  .article-square,
  .article {
    background-size: cover;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 30%;
    display: block;
    .text-info {
      position: absolute;
      bottom: 30px;
      left: 34px;
      right: 34px;
      color: white;
      h4 {
        font-size: 2.1rem;
        color: white;
        line-height: 1.2;
        font-family: 'Gotham Bold';
        text-transform: uppercase;
        margin:0;
      }
      h5 {
        margin:0;
        font-family: 'Nitti Light';
        font-size: 1.2rem;
        letter-spacing: .02em;
        margin-bottom: 4px;
        text-transform: uppercase;
      }
    }

  }
  .article {
    padding-bottom: 40%;
    height: 0;
    width: 100%;
    display: block;
    h1 {
      font-size: 6.1rem;
      color: white;
      line-height: 1.3;
      font-family: 'Gotham Bold';
      text-transform: uppercase;
      margin:0;
    }
    h5 {
      margin:0;
      font-family: 'Nitti Light';
      font-size: 1.2rem;
      letter-spacing: .02em;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
  }
  .entries-grid {
    > .article-square {
      margin-top: 6px;
    }
    @media only screen and (min-width: 1050px) {
      > .article-square:nth-of-type(6n+1) {
        width: calc(60% - 3px);
        padding-bottom: 28%;
        float: left;
        margin-right: 3px;
      }
      > .article-square:nth-of-type(6n+2) {
        width: calc(40% - 3px);
        padding-bottom: 28%;
        float: right;
        margin-left: 3px;
      }
      > .article-square:nth-of-type(6n+3) {
        clear: left;
        width: calc(25% - 3px);
        margin-right: 3px;
        padding-bottom: 20%;
        float: left;
      }
      > .article-square:nth-of-type(6n+4) {
        clear: right;
        float: left;
        width: calc(25% - 6px);
        margin-right: 3px;
        margin-left: 3px;
        padding-bottom: 20%;
      }
      > .article-square:nth-of-type(6n+5) {
        clear: right;
        width: calc(50% - 3px);
        padding-bottom: calc(40% + 6px);
        float: right;
        margin-left: 3px;
      }
      > .article-square:nth-of-type(6n+6) {
        clear: left;
        float: left;
        width: calc(50% - 3px);
        padding-bottom: 20%;
        margin-right: 3px;
      }
    }
  }
`;

export const BlogDetailWrapper = styled.main`

  h1 {
    font-family: 'Gotham Bold', sans-serif;
    font-size: 6.1rem;
    text-transform: uppercase;
    letter-spacing: .07em;
    line-height: 1.1;
    margin: 8px 0;
    @media only screen and (max-width: 1050px) {
      font-size: 5rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 4.5rem;
    }
  }
  header {
    img {
      width: 100%;

    }
    .text-content {
      padding-top: 44px;
      padding-bottom: 44px;
      border-bottom: 1px solid #979797;
      margin-bottom: 44px;
    }
    .social-f {
      width: 7px;
      display: inline-block;
      margin-right: 22px;
    }
    .social-t {
      width: 20px;
      display: inline-block;
    }
  }
  .text-content {
    width: calc(100% - 60px);
    max-width: 888px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 130px;
  }
  .author {
    font-size: 1.7rem;
    font-family: 'Gotham Bold';
    letter-spacing: .05em;
    text-transform: uppercase;
    margin: 0;
  }
  .category {
    font-family: 'Nitti Light';
    font-size: 1.7rem;
    margin: 0;
    text-transform: uppercase;
  }
  .desc {
    font-family: 'Lora Regular';
    font-size: 1.8rem;
    letter-spacing: .03em;
    color: 333639;
    line-height: 1.3;
    p {
      margin-bottom: 26px;
    }
    strong {
      display: block;
      text-align: center;
      font-size: 4.3rem;
      line-height: 1.3;
      max-width: 627px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 65px;
      margin-bottom: 65px;
    }
  }
  .more-reading {
    h2 {
      font-family: 'Gotham Bold', sans-serif;
      font-size: 2.3rem;
      letter-spacing: .03em;
      text-transform: uppercase;
      padding-left: 36px;
    }
    .cols-3 {
      grid-gap: 6px;
    }
  }
  .article-square {
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    display: block;
    .text-info {
      position: absolute;
      bottom: 30px;
      left: 34px;
      right: 34px;
      color: white;
      h4 {
        font-size: 2.9rem;
        color: white;
        line-height: 1.2;
        font-family: 'Gotham Bold';
        text-transform: uppercase;
        margin:0;
      }
      h5 {
        margin:0;
        font-family: 'Nitti Light';
        font-size: 1.7rem;
        letter-spacing: .02em;
        margin-bottom: 8px;
        text-transform: uppercase;
      }
    }

  }
`;
