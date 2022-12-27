import { useNavigate } from 'react-router-dom';
import { Button } from './ButtonGoBack.styled';

export const ButtonGoBack = ({ location }) => {
  const navigate = useNavigate();
  return (
    <Button
      type="button"
      onClick={() => {
        navigate(location?.state?.from ?? '/');
      }}
    >
      &#9166; Go back
    </Button>
  );
};
