import React from 'react';
import { PageProps, navigate } from 'gatsby';
import * as S from './index.styles';
import Menu from '../Menu';

export interface GroundLayoutPropsType {
  children: React.ReactNode;
  onloadAnimation?: string;
}

const GroundLayout = ({ children, onloadAnimation }: GroundLayoutPropsType) => {
  function lookUp() {
    const ground = document.getElementById('ground-layout');
    ground?.classList.add('slide-out-down');
    setTimeout(() => {
      navigate('/', { state: { onloadAnimation: 'slide-in-down' } });
    }, 700);
  }

  return (
    <S.Wrapper>
      <Menu onRoute={(path) => console.log(path)} />
      <S.Container className={onloadAnimation ?? ''} id="ground-layout">
        <S.HeaderWrapper>
          <S.TelescopeButton onClick={lookUp} />
        </S.HeaderWrapper>
        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default GroundLayout;
