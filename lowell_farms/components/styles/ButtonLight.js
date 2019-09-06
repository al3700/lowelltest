import styled from 'styled-components';

const ButtonLight = styled.button`
	cursor: pointer;
	-webkit-font-smoothing: antialiased;
  font-family: 'Gotham Bold';
  font-size: 1.4rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
	border: 0;
	border-radius: 0;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	outline: none;
	display: inline-block;
	background-color: #5F6252;
	padding: 16px 24px;
	text-align: center;
	color: white;
  background: white;
  color: #B9AC88;
  margin-top: 0;
  margin-bottom: 14px;

  @media only screen and (min-width: 900px) {
    min-width: 328px;
  }

  @media only screen and (max-width: 758px) {
  	margin-top: 40px;
  	font-size: 12px;
  	padding: 13px 20px;
    width: 90%;

  }
`;

export default ButtonLight;
