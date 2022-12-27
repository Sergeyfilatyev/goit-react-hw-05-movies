import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Nav = styled.nav``;
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 18px;
`;
export const Li = styled.li`
  list-style: none;
`;
export const NavMenuLink = styled(NavLink)`
  text-decoration: none;
  color: #212121;
  font-size: 18px;
  font-weight: 700;
  transition: color 250ms linear;
  &.active {
    color: #fe642e;
  }
`;
