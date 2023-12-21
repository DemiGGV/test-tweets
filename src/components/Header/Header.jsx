import { HeaderBox, MenuLink } from './Header.styles';

export const Header = () => {
  return (
    <HeaderBox>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/tweets">Tweets</MenuLink>
    </HeaderBox>
  );
};
