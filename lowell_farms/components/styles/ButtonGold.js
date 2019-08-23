import styled from 'styled-components';

const ButtonGold = styled.button`
  background: #726c59;
  ${props =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`};
  color: #f6f6f6;
  padding: 12px 50px;
  text-transform: uppercase;
  font-family: 'Gotham Bold', sans-serif;
  font-size: 1.3rem;
  line-height: 1;
  letter-spacing: 0.1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &.wider {
    max-width: 554px;
    width: 100%;
    padding: 20px 50px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 70px;
  }
  &:hover {
    ${props => !props.backgroundColor && `background-color: #686351;`};
  }
`;

export default ButtonGold;
