import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/fetchApi';
export const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
