import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/fetchApi';
import { MovieNotification } from 'components/MovieNotification/MovieNotification';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [notification, setNotification] = useState('Please input title movie!');
  const location = useLocation();
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (query === null || query.trim() === '') {
      return;
    }
    async function fetchMovies() {
      await fetchMoviesByName(query, page).then(movies =>
        setMovies(prevMovies => [...prevMovies, ...movies])
      );
      setNotification(
        `Unfortunately, the movie with the title ${query} could not be found, please try again!`
      );
    }
    fetchMovies(query);
  }, [query, page]);
  const handleSubmit = event => {
    event.preventDefault();
    if (
      event.target.elements.query.value === null ||
      event.target.elements.query.value.trim() === ''
    ) {
      toast.warn('Please input title movie!');
    }

    setSearchParams({ query: event.target.elements.query.value });

    event.target.reset();
  };
  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <SearchForm onSubmit={handleSubmit} />
      {movies.length > 0 ? (
        <MoviesList movies={movies} location={location} />
      ) : (
        <MovieNotification text={notification} />
      )}
      <ButtonLoadMore onClick={nextPage} />
    </>
  );
};
