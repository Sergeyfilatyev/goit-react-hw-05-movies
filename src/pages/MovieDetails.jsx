import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMoviesById } from 'services/fetchApi';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  return (
    movie && (
      <>
        <ButtonGoBack location={location} />
        <MovieInfo movie={movie} />
        <Outlet />
      </>
    )
  );
};
