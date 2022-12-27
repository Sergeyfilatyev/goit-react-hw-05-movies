import { Button, Form, Input } from './SearchForm.styled';
import { ImSearch } from 'react-icons/im';

export const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search movies here"
      />
      <Button type="submit">
        <ImSearch color="#FE642E" size="2em" />
      </Button>
    </Form>
  );
};
