import styled from 'styled-components';
import astronaut from '../../assets/img/astronaut-big.png';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: url(${astronaut});
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: rgba(197, 197, 197, 0.9);
  letter-spacing: 2px;
`;
