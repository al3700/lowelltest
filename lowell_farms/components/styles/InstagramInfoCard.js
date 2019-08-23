import styled from 'styled-components';

const InstagramInfoCard = styled.div`
  display: grid;
  grid-template-columns: 26fr 74fr;
  grid-column-gap: 12px;

  .name {
    font-family: 'Lora Regular', serif;
    font-size: 1.6rem;
    letter-spacing: 0.11rem;
    color: #333639;
    margin: 0 0 5px;
  }
  .handle {
    font-family: 'Gotham Bold';
    font-size: 1.15rem;
    text-transform: uppercase;
    letter-spacing: 0.06rem;
    color: #6b6653;
    margin: 0;
  }
  .post-info {
    padding: 20px 20px 20px 0;
  }

  .profile-img {
    position: relative;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 12px;
    -webkit-clip-path: polygon(
      50% 0,
      86% 13%,
      100% 50%,
      86% 87%,
      50% 100%,
      13% 88%,
      0 50%,
      13% 13%
    );
    clip-path: polygon(
      50% 0,
      86% 13%,
      100% 50%,
      86% 87%,
      50% 100%,
      13% 88%,
      0 50%,
      13% 13%
    );
    &::before {
      content: '';
      z-index: 3;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #bab1a4;
      width: 100%;
      height: 100%;
    }
    img {
      position: relative;
      z-index: 4;
      transform: scale(0.9);
      -webkit-clip-path: polygon(
        50% 0,
        86% 13%,
        100% 50%,
        86% 87%,
        50% 100%,
        13% 88%,
        0 50%,
        13% 13%
      );
      clip-path: polygon(
        50% 0,
        86% 13%,
        100% 50%,
        86% 87%,
        50% 100%,
        13% 88%,
        0 50%,
        13% 13%
      );
    }
  }
`;

export default InstagramInfoCard;
