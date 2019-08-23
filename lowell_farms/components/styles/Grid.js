import styled from 'styled-components';

const Grid = styled.div`
  .cols-3 {
    @media only screen and (min-width: 758px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
    }
  }
`;

export default Grid;
