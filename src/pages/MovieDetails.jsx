import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMoviesById } from 'services/fetchApi';
const imageUrl = 'https://image.tmdb.org/t/p/w500/';
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
        <img
          src={
            movie.poster_path
              ? `${imageUrl}${movie.poster_path}`
              : 'https://e7.pngegg.com/pngimages/84/530/png-clipart-film-clapperboard-computer-icons-cinema-shows-miscellaneous-angle.png'
          }
          alt={movie.title}
          width="300"
        />
        <h1>{movie.title}</h1>
        <p>User Score: {movie.vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        {<h3>Genres</h3>}
        {<p>{movie.genres.map(genre => genre.name).join(' ')}</p>}
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </>
    )
  );
};
