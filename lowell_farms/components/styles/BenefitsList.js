import styled from 'styled-components';

const BenefitsList = styled.section`
  padding: 100px 0;
  h3 {
    font-size: 3rem;
    font-family: 'Lora Regular', serif;
    letter-spacing: .1rem;
    line-height: 1.1rem;
    color: #6B6653;
  }
  p {
    color: #333639;
    font-size: 1.4rem;
  }
  h4 {
    font-family: 'Lora Regular';
    font-size: 1.8rem;
    letter-spacing: .1rem;
    margin-bottom: 1.8rem;
    margin-top: 4.1rem;
  }
  button {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  h5 {
    color: #69574E;
    font-size: 1.1rem;
    font-family: 'Gotham Bold', sans-serif;
    letter-spacing: .1rem;
    text-transform: uppercase;
    border-bottom: 1px solid #69574E;
    padding-bottom: 8px;
    margin-bottom: 16px;
    margin-top: 30px;
    @media screen and (max-width: 768px) {
      margin-top: 80px;
    }
  }
  li {
    font-family: 'Nitti Bold', serif;
    font-size: 1.3rem;
    letter-spacing: .08rem;
    text-transform: uppercase;
    margin: 0 0 8px;
    color: #333639;
  }

`;

export default BenefitsList;
