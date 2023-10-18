import styled, { keyframes } from 'styled-components';

const blinkingEffect = keyframes`
  50% {
    opacity: 0.7;
  }
`;

const shootingEffect = keyframes`
  0% {
    transform: translate(-100vw, -50vw) rotate(26.6deg);
  }
  100% {
    transform: translate(100vw, 50vw) rotate(26.6deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

export const BlinkingStar = styled.li<{
  $top: number;
  $left: number;
  $size: number;
  $color: string;
  $duration?: number;
  $description?: string;
}>`
  position: absolute;
  width: ${({ $size }) => $size}rem;
  height: ${({ $size }) => $size}rem;
  top: ${({ $top }) => $top * 100}%;
  left: ${({ $left }) => $left * 100}%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
`;

export const ShootingStar = styled.li<{
  $top: number;
  $left: number;
  $size: number;
  $color: string;
  $duration: number;
}>`
  position: absolute;
  width: ${({ $size }) => $size}rem;
  height: ${({ $size }) => $size}rem;
  top: ${({ $top }) => $top * 100}%;
  left: ${({ $left }) => $left * 100}%;
  border-radius: 50%;

  background-color: ${({ $color }) => $color};
  animation: 
    ${shootingEffect} ${({ $duration }) => $duration}s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -50%);
    width: ${({ $size }) => $size * 30}rem;
    height: ${({ $size }) => $size * 0.7}rem;
    background: linear-gradient(
      -90deg, ${({ $color }) => $color} 10%, transparent
    );
    opacity: 0.5;
`;
