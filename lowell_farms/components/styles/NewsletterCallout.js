import styled from 'styled-components';

const NewsletterCallout = styled.div`
  background-color: #c4c0b0;
  padding-top: 88px;
  padding-bottom: 110px;
  .quote {
    font-size: 4.3rem;
    font-family: 'Lora Regular', serif;
    line-height: 1.15;
    max-width: 864px;
    margin-left: auto;
    margin-right: auto;
  }
  .container {
    max-width: 682px;
    text-align: center;
  }
  button {
    padding: 20px 0;
    font-size: 1.3rem;
  }
  h4 {
    font-family: 'Lora Regular', serif;
    font-size: 2.2rem;
    letter-spacing: 0.08rem;
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
      max-width: 280px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default NewsletterCallout;
