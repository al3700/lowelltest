import styled, { keyframes } from 'styled-components';

const slideDownBanner = keyframes`
  0%, 100% {
    /* transform: translateY(-200%); */
  }
  4%, 96% {
    transform: translateY(0);
  }
`;

const DeliveryBarStyles = styled.div`
  padding: 40px 20px 22px;
  position: fixed;
  background: rgba(88, 83, 68, 0.9);
  color: white;
  top: 75px;
  right: 0;
  left: 0;
  width: 100%;
  transform: translateY(-200%);
  transition: all 0.3s ease-out;
  z-index: 90;
  text-align: center;
  overflow-y: scroll;
  text-transform: uppercase;
  ${props =>
    props.zipUpdated && `animation: 1.5s ${slideDownBanner} ease-out;`};
  ${props => (props.position == 'down' ? `top: 75px;` : `top: -20px;`)};
  @media screen and (max-width: 960px) {
    padding: 16px 20px;
    ${props => (props.position == 'down' ? `top: 45px;` : `top: 0;`)};
  }
  p {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default DeliveryBarStyles;
