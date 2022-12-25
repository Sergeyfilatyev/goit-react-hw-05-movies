import { useNavigate } from 'react-router-dom';

export const ButtonGoBack = ({ location }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate(location?.state?.from ?? '/');
      }}
    >
      Go back
    </button>
  );
};
