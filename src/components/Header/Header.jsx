import React from 'react';
import { HeaderBox, MenuLink } from './Header.styles';

export const Header = () => {
  return (
    <HeaderBox>
      <MenuLink to="/" end>
        Home
      </MenuLink>
      <MenuLink to="/tweets">Tweets</MenuLink>
    </HeaderBox>
  );
};
