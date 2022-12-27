import { Img, Li, Ul } from './CastList.styled';

export const CastList = ({ cast }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <Ul>
      {cast.map(({ id, profile_path, name, character }) => (
        <Li key={id}>
          <Img
            src={
              profile_path
                ? `${imageUrl}${profile_path}`
                : 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/46301/bust-in-silhouette-emoji-clipart-md.png'
            }
            alt={name}
          />
          <h3>{name}</h3>
          <span>Charachter: {character}</span>
        </Li>
      ))}
    </Ul>
  );
};
