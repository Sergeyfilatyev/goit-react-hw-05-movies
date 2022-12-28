import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';
export function Loader() {
  return (
    <Spinner>
      <RotatingLines
        strokeColor="#85da6c"
        strokeWidth="5"
        animationDuration="0.8"
        width="60"
        visible={true}
      />
    </Spinner>
  );
}
