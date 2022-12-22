import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from 'services/fetchApi';
const imageUrl = 'https://image.tmdb.org/t/p/w500/';
export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
{
  /* <img src={`${imageUrl}${poster_path}`} alt={title} width="200" /> */
}
