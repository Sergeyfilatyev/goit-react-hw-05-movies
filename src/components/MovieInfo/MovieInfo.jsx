import { useLocation } from 'react-router-dom';
import {
  BoxInfo,
  Container,
  Img,
  Li,
  LinkStyled,
  Paragraph,
  SubTitle,
  Title,
  Ul,
} from './MovieInfo.styled';
export const MovieInfo = ({ movie }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const location = useLocation();
  return (
    <Container>
      <Img
        src={
          movie.poster_path
            ? `${imageUrl}${movie.poster_path}`
            : 'https://e7.pngegg.com/pngimages/84/530/png-clipart-film-clapperboard-computer-icons-cinema-shows-miscellaneous-angle.png'
        }
        alt={movie.title}
        width="300"
      />
      <BoxInfo>
        <Title>{movie.title}</Title>
        <Paragraph>User Score: {movie.vote_average * 10}%</Paragraph>
        <SubTitle>Overview</SubTitle>
        <Paragraph>{movie.overview}</Paragraph>
        <SubTitle>Genres</SubTitle>
        <Paragraph>{movie.genres.map(genre => genre.name).join(' ')}</Paragraph>
        <SubTitle>Additional information &#8681;</SubTitle>

        <Ul>
          <Li>
            <LinkStyled to="cast" state={location.state}>
              Cast
            </LinkStyled>
          </Li>
          <Li>
            <LinkStyled to="reviews" state={location.state}>
              Reviews
            </LinkStyled>
          </Li>
        </Ul>
      </BoxInfo>
    </Container>
  );
};
