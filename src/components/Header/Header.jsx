import React from 'react';
import { HeaderBox, MenuLink } from './Header.styles';

export const Header = () => {
  return (
    <HeaderBox>
      <nav>
        <MenuLink to="/" end>
          Home
        </MenuLink>
        <MenuLink to="/tweets">Tweets</MenuLink>
      </nav>
    </HeaderBox>
  );
};
