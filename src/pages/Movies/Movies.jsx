import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/fetchApi';
import { MovieNotification } from 'components/MovieNotification/MovieNotification';
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies here"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {movies.length > 0 ? (
        <>
          <ul>
            {movies.map(({ id, title, poster_path }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <MovieNotification text={notification} />
      )}
    </>
  );
};
