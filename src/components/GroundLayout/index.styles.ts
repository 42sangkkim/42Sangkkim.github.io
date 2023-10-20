import styled, { keyframes } from 'styled-components';
import Horizon from '../../images/horizon-bg.svg';
import Telescope from '../../images/telescope.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`;

const slideInUp = keyframes`
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

  &.slide-in-up {
    animation: 0.7s ease-out 0s 1 ${slideInUp};
  }
  &.slide-out-down {
    transform: translateY(100%);
    transition: 0.7s ease-in;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${Horizon});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: bottom;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-inline: 1rem;
`;

export const TelescopeButton = styled.button`
  width: 100px;
  height: 80px;
  background: none;
  background-image: url(${Telescope});
  cursor: pointer;

  &:hover {
    &:before {
      content: '하늘 보기';
      position: absolute;
      top: 20px;
      left: 120px;
      padding: 0.5rem;
      background-color: #474747;
      color: white;
      font-size: 0.8rem;
      border-radius: 0.5rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: #474747;
`;
