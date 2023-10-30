import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 48px;
`;

export const MenuLink = styled(NavLink)`
  font-size: 24px;
  color: black;

  &:hover,
  &.active {
    color: orange;
  }
`;
