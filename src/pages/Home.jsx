import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/fetchApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from 'components/MoviesList/MoviesList.styled';
export const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);
  return (
    <>
      <Title>Trending movies</Title>
      <MoviesList movies={movies} location={location} />
    </>
  );
};
