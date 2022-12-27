import { Img, Paragraph } from './MovieNotification.styled';

export const MovieNotification = ({ text }) => {
  return (
    <>
      <Paragraph>{text}</Paragraph>
      <Img
        src="https://i.postimg.cc/MH4DRgH7/pngwing-com.png"
        alt="movie not found"
      />
    </>
  );
};
