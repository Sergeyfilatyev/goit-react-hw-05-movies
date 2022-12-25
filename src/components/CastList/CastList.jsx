export const CastList = ({ cast }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
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
  );
};
