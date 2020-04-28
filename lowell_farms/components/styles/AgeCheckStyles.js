import styled from 'styled-components';

const AgeCheckStyles = styled.div`
  background: rgba(30, 30, 30, 0.75);
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease-in-out;
  &.hide {
    opacity: 0;
    visibility: hidden;
  }
  .content {
    /* background-color: white; */
    /* background-image: url('../../static/stamped_edges.svg');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: left top; */
    width: 90%;
    max-width: 525px;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .inner-content {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
  }
  .padded {
    padding: 40px 66px;
    text-align: center;
    &.bottom {
      padding: 55px 66px;
      border-top: 1px dashed #9e9781;
    }
    @media screen and (max-width: 768px) {
      padding: 0 33px 20px;
      &.bottom {
        padding: 30px 33px 0;
      }
    }
  }
  h1 {
    font-family: 'Lora Regular';
    font-size: 2.6rem;
    letter-spacing: 0.1rem;
    color: #333639;
    text-align: center;
    margin-bottom: 0;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
    a {
      color: #A69463;
    }
  }
  .icon {
    margin-left: auto;
    margin-right: auto;
    width: 28px;
    @media screen and (max-width: 768px) {
      width: 22px;
    }
  }

  .button {
    background: transparent;
    color: #333639;
    padding: 18px 50px;
    text-transform: uppercase;
    font-family: 'Gotham Bold', sans-serif;
    letter-spacing: 0.1rem;
    display: block;
    width: 100%;
    outline: none;
    border: 1px solid #333639;
    cursor: pointer;
    font-size: 1.3rem;
    line-height: 1;
    transition: all 0.4s ease-in-out;
    margin-top: 20px;
    &:hover {
      color: white;
      background: #333639;
    }
  }
`;

export default AgeCheckStyles;
