import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  gap: 15px;
`;
export const Item = styled.li`
  list-style: none;
`;
export const NavMenuLink = styled(NavLink)`
  text-decoration: none;
  color: #212121;
  &.active {
    color: red;
  }
`;
