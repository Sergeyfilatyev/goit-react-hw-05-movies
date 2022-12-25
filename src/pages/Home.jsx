import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/fetchApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
export const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);
  return <MoviesList movies={movies} location={location} />;
};
