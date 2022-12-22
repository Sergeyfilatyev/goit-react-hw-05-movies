import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesByName } from 'services/fetchApi';
export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [request, setRequest] = useState('');
  useEffect(() => {
    if (request.trim() === '') return;
    fetchMoviesByName(request).then(setMovies);
  }, [request]);
  const handleChangeQuery = event => {
    setQuery(event.target.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    setRequest(query);
    event.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies here"
          onChange={handleChangeQuery}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {movies && (
        <>
          <ul>
            {movies.map(({ id, title, poster_path }) => (
              <li key={id}>
                <Link>{title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
