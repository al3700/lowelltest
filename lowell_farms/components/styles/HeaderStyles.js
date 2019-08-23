import styled from 'styled-components';

const HeaderStyles = styled.header`
  margin: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 75px;
  padding-bottom: 50px;

  position: relative;
  @media only screen and (max-width: 768px) {
    padding-top: 60px;
  }
  &.home-header {
    text-align: center;
    padding-top: 110px;
    padding-bottom: 110px;
    @media only screen and (max-width: 768px) {
      padding-top: 75px;
      padding-bottom: 90px;
    }
    h1,
    .publication {
      color: white;
      position: relative;
      z-index: 3;
    }
    .overlay {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .watch-video {
      position: relative;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      padding: 15px 37px;
      background: transparent;
      @media only screen and (max-width: 768px) {
        img {
          width: 80px;
        }
      }
      img {
        display: inline-block;
      }
    }
  }
  h1 {
    font-size: 7.4rem;
    font-family: 'Lora Regular', sans-serif;
    font-weight: normal;
    font-style: normal;
    max-width: 672px;
    line-height: 1.05;
    text-align: center;
    margin: 0 auto;
    @media only screen and (max-width: 1000px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 39px;
      width: 92%;
      margin-bottom: 40px;
    }
    &.gear-heading {
      max-width: 730px;
    }
  }
  .hero-image {
    margin: 0 auto;
    display: block;
    width: 633px;
  }

  .container-lg {
    width: 92%;
  }

  @media (max-width: 1300px) {
  }
`;

export default HeaderStyles;
