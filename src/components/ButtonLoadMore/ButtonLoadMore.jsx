import { Button } from './ButtonLoadMore.styled';
export function ButtonLoadMore({ onClick }) {
  return (
    <Button onClick={onClick} type="button">
      Load more
    </Button>
  );
}
