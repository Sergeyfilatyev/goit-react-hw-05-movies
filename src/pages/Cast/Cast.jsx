import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'services/fetchApi';

export const Cast = () => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetchMoviesCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
          <ul>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `${imageUrl}${profile_path}`
                      : 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/46301/bust-in-silhouette-emoji-clipart-md.png'
                  }
                  alt={name}
                  width="200"
                />
                <h3>{name}</h3>
                <span>Charachter: {character}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
