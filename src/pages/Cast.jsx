import { CastList } from 'components/CastList/CastList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'services/fetchApi';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetchMoviesCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
          <CastList cast={cast} />
        </>
      )}
    </>
  );
};
