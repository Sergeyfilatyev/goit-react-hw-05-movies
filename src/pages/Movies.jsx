import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/fetchApi';
import { MovieNotification } from 'components/MovieNotification/MovieNotification';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [notification, setNotification] = useState('Please input title movie!');
  const location = useLocation();
  useEffect(() => {
    if (query === null || query.trim() === '') {
      return;
    }
    async function fetchMovies() {
      await fetchMoviesByName(query).then(setMovies);
      setNotification(
        `Unfortunately, the movie with the title ${query} could not be found, please try again!`
      );
    }
    fetchMovies(query);
  }, [query]);
  const handleSubmit = event => {
    event.preventDefault();
    if (
      event.target.elements.query.value === null ||
      event.target.elements.query.value.trim() === ''
    ) {
      setMovies([]);
      setNotification('Please input title movie!');
    }

    setSearchParams({ query: event.target.elements.query.value });

    event.target.reset();
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length > 0 ? (
        <MoviesList movies={movies} location={location} />
      ) : (
        <MovieNotification text={notification} />
      )}
    </>
  );
};
