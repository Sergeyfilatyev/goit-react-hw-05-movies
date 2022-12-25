import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { ReviewsNotification } from 'components/ReviewsNotification/ReviewsNotification';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/fetchApi';
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMoviesReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <ReviewsNotification />
      )}
    </>
  );
};
