import { Img, Li, LinkStyled, Title, Ul } from './MoviesList.styled';
export const MoviesList = ({ movies, location }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <Title>Trending movies</Title>
      <Ul>
        {movies.map(({ id, title, poster_path }) => (
          <Li key={id}>
            <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={
                  poster_path
                    ? `${imageUrl}${poster_path}`
                    : 'https://e7.pngegg.com/pngimages/84/530/png-clipart-film-clapperboard-computer-icons-cinema-shows-miscellaneous-angle.png'
                }
                alt={title}
              />
              {title}
            </LinkStyled>
          </Li>
        ))}
      </Ul>
    </>
  );
};
