import styled from 'styled-components';

const QuoteSection = styled.div`
  background-color: #ecebe9;
  padding-top: 60px;
  padding-bottom: 85px;
  &.last-quote {
    @media only screen and (max-width: 768px) {
      padding-bottom: 0;
      .publication {
        margin-bottom: 0;
      }
    }
  }
  .quote {
    font-size: 3.9rem;
    line-height: 1.2;
    text-align: center;
    max-width: 1040px;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Lora Regular', serif;
    margin-bottom: 28px;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }
  .publication {
    text-align: center;
    margin-top: 0;
    text-transform: uppercase;
    font-family: 'Gotham Bold', sans-serif;
    letter-spacing: 0.1rem;
    font-size: 1.2rem;
    color: #6b6653;
  }
`;

export default QuoteSection;
