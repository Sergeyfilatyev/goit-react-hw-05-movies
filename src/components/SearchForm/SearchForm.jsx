import { Button, Form, Input } from './SearchForm.styled';

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
        <span>Search</span>
      </Button>
    </Form>
  );
};
