import styled from 'styled-components';

const ZipCodeCheckStyles = styled.div`
  position: absolute;
  position: fixed;
  top: 75px;
  right: 0;
  left: 0;
  width: 100%;
  transform: translateY(-120%);
  transition: all 0.3s;
  z-index: 90;
  text-align: center;
  overflow-y: scroll;
  height: 100%;
  @media screen and (max-width: 960px) {
    top: 44px;
  }
  .zip-code-check-wrapper {
    padding: 90px 20px;
    /*  585344*/
    background: #3B3F38;
    color: white;
  }

  ${props => props.open && `transform: translateY(0);`};
  /* box-shadow: rgba(0, 0, 0, 0.3) 0 2px 30px; */
  h2 {
    color: white;
    font-family: 'Lora Regular', serif;
    font-size: 3.8rem;
    letter-spacing: 0.1rem;
    margin-top: 0;
    line-height: 1.1;
    @media screen and (max-width: 768px) {
      font-size: 3.2rem;
      line-height: 1.2;
    }
  }
  fieldset {
    border: none;
  }
  form {
    max-width: 440px;
    margin: 0 auto;
  }
  .zip-close {
    position: absolute;
    background: transparent;
    top: 0;
    right: 0;
    color: white;
  }
  .validation-wrapper {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 18px;
  }
  .error-message {
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    text-align: left;
    font-size: 1.2rem;
  }
  input {
    padding: 14px 14px 14px 0;
    margin-bottom: 0;
    background: transparent;
    color: white;
    border-bottom: 1px solid #8a8475;
    font-size: 2.6rem;
    text-align: left;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:focus {
      border-bottom: 1px solid white;
    }
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #8a8475;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #8a8475;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: #8a8475;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      color: #8a8475;
    }
  }
  button {
    background: #726c59;
    color: #f6f6f6;
    text-transform: uppercase;
    font-family: 'Gotham Bold', sans-serif;
    font-size: 1.3rem;
    line-height: 1;
    letter-spacing: 0.1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    max-width: 554px;
    width: 100%;
    padding: 20px 50px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 0;

    &:hover {
      background-color: #686351;
    }
  }
  .wider {
    margin-top: 0;
    background-color: #988c66;
  }
`;

export default ZipCodeCheckStyles;
