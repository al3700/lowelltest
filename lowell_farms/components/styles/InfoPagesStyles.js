import styled from 'styled-components';

const InfoPagesStyles = styled.section`
  background: #ECEBE9;
  .container-sm {
    padding-top: 10rem;
    padding-bottom: 10rem;
    @media screen and (max-width: 768px) {
      padding-top: 7rem;
      padding-bottom: 8rem;
    }
  }
  h2 {
    font-family: 'Lora Regular',serif;
    font-size: 5rem;
    color: #6b6653;
    margin: 0;
    line-height: 1.1;
    text-align: center;
    margin-bottom: 4rem;
    @media screen and (max-width: 768px) {
      font-size: 3.4rem;
      margin-bottom: 3rem;
    }
  }
  .desc {
    font-family: 'Lora Regular',serif;
    color: #333639;
    line-height: 1.6;
    a {
      text-decoration: underline;
    }
    strong {
      display: block;
      font-size: 2rem;
      color: #6b6653;
      margin-bottom: -1rem;
      margin-top: 4rem;
      @media screen and (max-width: 768px) {
        margin-top: 3rem;
      }
    }
  }
`;

export default InfoPagesStyles;
