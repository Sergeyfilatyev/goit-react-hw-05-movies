import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Nav = styled.nav``;
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const Li = styled.li`
  list-style: none;
`;
export const NavMenuLink = styled(NavLink)`
  text-decoration: none;
  color: #212121;
  &.active {
    color: red;
  }
`;
