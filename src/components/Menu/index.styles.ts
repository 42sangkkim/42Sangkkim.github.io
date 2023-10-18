import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  padding: 2rem;
  z-index: 1000;
  background-colors: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideOutToLeft = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(150%);
  }
`;

export const HamburgerButton = styled.button<{ $active: boolean }>`
  position: relative;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  outline: none;

  .bar {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background-color: white;
    transform: translate(-50%, -50%);
    transition: 0.2s ease-in-out;

    &.top {
      ${({ $active }) =>
        $active
          ? 'transform: translate(-50%, -50%) rotate(45deg);'
          : 'transform: translate(-50%, -350%) rotate(0deg);'}
    }

    &.middle {
      ${({ $active }) => $active && 'width: 0;'}
    }

    &.bottom {
      ${({ $active }) =>
        $active
          ? 'transform: translate(-50%, -50%) rotate(-45deg);'
          : 'transform: translate(-50%, +250%) rotate(0deg);'}
    }
  }
`;

export const MenuList = styled.ul<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: 0.2s ease-in-out;
  margin-block: 2rem;
  animation: 0.2s ease-out 0s 1 ${slideInFromLeft};

  &.slide-out {
    animation: 0.25s ease-out 0s 1 ${slideOutToLeft};
  }
`;

export const MenuItem = styled.li`
  display: flex;
  width: 8rem;
  align-items: start;
  color: white;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateX(-1rem);
    font-weight: bold;
    font-size: 1.1rem;
  }
`;
