import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &.slide-up {
    animation: 0.7s ease-out 0s 1 ${slideUp};
  }
`;
