import { Item, List, NavMenuLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <NavMenuLink to="/">Home</NavMenuLink>
        </Item>
        <Item>
          <NavMenuLink to="/movies">Movies</NavMenuLink>
        </Item>
      </List>
    </nav>
  );
};
