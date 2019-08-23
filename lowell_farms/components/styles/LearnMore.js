import styled from 'styled-components';

const LearnMore = styled.section`
  padding-top: 100px;
  &.padding-bottom {
    padding-bottom: 100px;
  }
  &.no-padding-top {
    padding-top: 0;
  }
  .quote {
    font-size: 2.2rem;
    color: #333639;
    line-height: 1.4;
    margin-bottom: 16px;
  }
  .publication {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 758px) {
    text-align: center;
  }
`;

export default LearnMore;
