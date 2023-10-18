import React, { useState } from 'react';

import * as S from './index.styles';
import { Link } from 'gatsby';

const menus = [
  {
    title: '프로필',
    path: '/profile',
  },
  {
    title: '리스트 페이지',
    path: '/list',
  },
  {
    title: '깃허브',
    path: 'https://github.com/42sangkkim',
  },
];

const Menu = () => {
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    if (active) {
      setActive(false);
      const menuList = document.getElementById('menu-list');
      menuList?.classList.add('slide-out');
      setTimeout(() => {
        setShowMenu(false);
      }, 200);
    } else {
      setActive(true);
      setShowMenu(true);
    }
  }

  return (
    <S.Wrapper>
      <S.HamburgerButton $active={active} onClick={toggleMenu}>
        <span className="bar top" />
        <span className="bar middle" />
        <span className="bar bottom" />
      </S.HamburgerButton>
      {showMenu && (
        <S.MenuList id="menu-list" $active={active}>
          {menus.map(({ title, path }) =>
            path.startsWith('http') ? (
              <S.MenuItem key={`menu-${title}`}>
                <a href={path}>{title}</a>
              </S.MenuItem>
            ) : (
              <S.MenuItem key={`menu-${title}`}>
                <Link to={path}>{title}</Link>
              </S.MenuItem>
            ),
          )}
        </S.MenuList>
      )}
    </S.Wrapper>
  );
};

export default Menu;
