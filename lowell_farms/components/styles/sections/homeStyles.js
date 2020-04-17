import styled from 'styled-components';

export const HomeWrapper = styled.main`
  background-color: #ecebe9;
  header {
    h1 {
      max-width: 1164px;
      font-size: 7rem;
      @media only screen and (max-width: 1000px) {
        font-size: 50px;
      }
      @media only screen and (max-width: 768px) {
        font-size: 39px;
        width: 92%;
        margin-bottom: 25px;
      }
    }
    .publication {
      text-align: center;
      margin-top: 24px;
      margin-bottom: 50px;
    }
  }
  h3.small-caps {
    margin-top: 16px;
    margin-bottom: 14px;
  }
  .home-section-title {
    font-family: 'Lora Regular', serif;
    font-size: 5rem;
    color: #6b6653;
    margin: 0;
    line-height: 1.1;
    max-width: 420px;
    @media only screen and (max-width: 768px) {
      font-size: 37px;
    }
  }
  .section-desc p {
    font-size: 1.4rem;
    color: #333639;
    letter-spacing: 0.08rem;
    max-width: 440px;
    @media only screen and (max-width: 768px) {
      margin-bottom: 40px;
    }
  }
  .cannabis {
    padding-top: 40px;
    padding-bottom: 10px;
    img {
      @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 440px;
        /* margin-left: auto; */
        margin-right: auto;
        margin-top: 20px;
      }
    }
    .cannabis-row {
      padding-top: 60px;
    }
    .mobile-flex-reverse {
      @media screen and (max-width: 768px) {
        padding-top: 40px;
      }
    }
    .wider {
      margin-top: 90px;
    }

  }
  .cbd,
  .gear {
    padding-top: 120px;
    padding-bottom: 120px;
    @media only screen and (max-width: 768px) {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    img {
      @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 440px;
        /* margin-left: auto; */
        margin-right: auto;
        margin-top: 30px;
      }
    }
  }

  .cbd {
    background-color: #dfe0db;
    .intro {
      padding-bottom: 30px;
    }
  }

  .gear {
    background-color: #e0dddb;
    .intro {
      .section-desc {
        margin-top: 35px;
      }
    }
    .mobile-flex-reverse {
      @media screen and (max-width: 768px) {
        padding-top: 20px;
        img {
          margin-top: 0;
          margin-bottom: 20px;
        }
      }
    }
  }

  .announcement-gold-text{
    max-width: 420px;
  }

  .cafe {
    background-color: #F1F1F1;
    padding: 80px 0 100px;
  }


  .clothing-heading {
    max-width: 480px;
    @media screen and (max-width: 768px) {
      margin-top: 40px;
    }
    h2 {
      max-width: 480px;
      margin: 0;
      @media screen and (max-width: 768px) {
        font-size: 37px;
      }
    }
  }
  .newsletter-callout {
    background-color: #ecebe9;
    form {
      padding-top: 60px;
    }
  }
  header .container-sm {
    max-width: 760px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-width: 768px) {
      width: 90%;
    }
  }
  .video-wrapper {
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(30, 30, 30, 0.75);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    &.showing {
      opacity: 1;
      visibility: visible;
    }
    @media only screen and (max-width: 768px) {
      padding-top: 30px;
    }
  }
  .close-video {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }
  .video-wrapper .inner {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .last-quote {
    padding-bottom: 0;
  }
`;
