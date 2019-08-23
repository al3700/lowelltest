import styled from 'styled-components';

// ----------------------------------------
// General Page Styles
// ----------------------------------------
export const AboutWrapper = styled.main`
  .card-bg {
    background-color: #d1d3cb;
    &:nth-of-type(odd) {
      background-color: #e0dcd6;
    }
    @media only screen and (max-width: 768px) {
      margin-bottom: 20px;
    }
    .post-img {
      @media only screen and (max-width: 960px) {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .instagram-tall,
  .instagram-square {
    background-color: #ecebe9;
  }
  .container-xl {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
  a {
    color: #171717;
  }
`;

// ----------------------------------------
// Contact Section
// ----------------------------------------
export const ContactSection = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: #e0dcd5;
  @media only screen and (max-width: 768px) {
    padding-top: 60px;
    padding-left: 10px;
    padding-bottom: 50px;
  }
  .inner-wrapper {
    max-width: 1000px;
  }
  h2 {
    font-family: 'Lora Regular', serif;
    font-size: 5rem;
    color: #6b6653;
    margin: 0;
  }
  .desc p {
    font-size: 1.3rem;
    line-height: 1.5;
    color: #333639;
    max-width: 406px;
    @media only screen and (min-width: 768px) {
      padding-right: 40px;
    }
  }
  h5 {
    font-family: 'Gotham Bold', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #333639;
    font-weight: normal;
    margin-bottom: 12px;
  }
  ul {
    list-style: none;
    padding: 0 0 60px;
    margin: 0;
    @media only screen and (max-width: 768px) {
      padding-bottom: 40px;
    }
  }
  li a {
    font-size: 1.8rem;
    margin-top: 13px;
    display: inline-block;
    font-family: 'Lora Regular', serif;
    color: #171717;
    letter-spacing: 0.2rem;
  }
  .points-of-contact > div {
    @media only screen and (min-width: 769px) {
      border-left: 1px solid #afa798;
      padding-left: 50px;
    }
  }
  .points-of-contact {
    @media only screen and (max-width: 768px) {
      margin-top: 60px;
    }
  }
`;

// ----------------------------------------
// Pledge Section
// ----------------------------------------
export const PledgeSection = styled.section`
  padding-top: 50px;
  padding-bottom: 180px;
  background-color: #ecebe9;
  text-align: center;
  @media only screen and (max-width: 768px) {
    padding-top: 0;
    padding-bottom: 120px;
  }
  h2 {
    font-size: 2.7rem;
    font-family: 'Lora Italic', serif;
    color: #333639;
    background-color: #ecebe9;
    display: inline-block;
    padding-right: 10rem;
    padding-left: 10rem;
    line-height: 1;
    margin-bottom: 0;
    text-align: center;
    transform: translateY(50%);
    @media only screen and (max-width: 768px) {
      font-size: 2.2rem;
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }
  .desc {
    max-width: 807px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.7rem;
    line-height: 1.1;
    color: 333639;
    text-align: center;
  }
  .pledge-img {
    margin-left: auto;
    margin-right: auto;
    max-width: 850px;
    width: 80%;
    padding: 90px 60px 80px;
    border: 2px solid #dad6d2;
    @media only screen and (max-width: 768px) {
      padding: 7%;
      width: 95%;
    }
  }
`;

// ----------------------------------------
// Our Story
// ----------------------------------------
export const StorySection = styled.section`
  padding-top: 90px;
  padding-bottom: 140px;
  background-size: cover;
  background-position: center bottom;
  @media only screen and (max-width: 768px) {
    padding-bottom: 90px;
  }
  h2 {
    font-size: 7.8rem;
    font-family: 'Lora Regular', serif;
    line-height: 1.2;
    margin-bottom: 76px;
    text-align: center;
    letter-spacing: 0.1rem;
    @media only screen and (max-width: 768px) {
      font-size: 5rem;
      margin: 0 0 20px;
    }
  }
  .desc {
    max-width: 780px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Lora Regular', serif;
    font-size: 1.7rem;
    line-height: 1.4;
    color: #333639;
    text-align: center;
    letter-spacing: 0.1rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 1.3;
    }
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
  }
  .desc p {
    line-height: 1.6;
  }
`;

// ----------------------------------------
// Instagram Info Card
// ----------------------------------------
export const InstagramInfoCard = styled.div`
  display: grid;
  grid-template-columns: 26fr 74fr;
  grid-column-gap: 12px;

  .name {
    font-family: 'Lora Regular', serif;
    font-size: 1.6rem;
    letter-spacing: 0.11rem;
    color: #333639;
    margin: 0 0 5px;
  }
  .handle {
    font-family: 'Gotham Bold';
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.06rem;
    color: #6b6653;
    margin: 0;
  }
  .post-info {
    padding: 20px 20px 20px 0;
  }
  .profile-img {
    position: relative;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 12px;

    clip-path: polygon(
      50% 0,
      86% 13%,
      100% 50%,
      86% 87%,
      50% 100%,
      13% 88%,
      0 50%,
      13% 13%
    );
    &::before {
      content: '';
      z-index: 3;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #bab1a4;
      width: 100%;
      height: 100%;
    }
    img {
      position: relative;
      z-index: 4;
      transform: scale(0.9);
      -webkit-clip-path: polygon(
        50% 0,
        86% 13%,
        100% 50%,
        86% 87%,
        50% 100%,
        13% 88%,
        0 50%,
        13% 13%
      );
      clip-path: polygon(
        50% 0,
        86% 13%,
        100% 50%,
        86% 87%,
        50% 100%,
        13% 88%,
        0 50%,
        13% 13%
      );
    }
  }
`;
