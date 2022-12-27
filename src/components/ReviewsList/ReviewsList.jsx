import { Li, Paragraph, Title, Ul } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <Ul>
      {reviews.map(({ id, author, content }) => (
        <Li key={id}>
          <Title>{author}</Title>
          <Paragraph>{content}</Paragraph>
        </Li>
      ))}
    </Ul>
  );
};
