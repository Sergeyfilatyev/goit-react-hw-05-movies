import { Li, Nav, NavMenuLink, Ul } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <NavMenuLink to="/">Home</NavMenuLink>
        </Li>
        <Li>
          <NavMenuLink to="/movies">Movies</NavMenuLink>
        </Li>
      </Ul>
    </Nav>
  );
};
