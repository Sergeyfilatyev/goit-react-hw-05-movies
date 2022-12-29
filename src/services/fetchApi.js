import axios from 'axios';

const KEY = 'e7bdbd1d27e36c8088a4364bac7f860e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export async function fetchMovies() {
  const response = await axios('trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });
  return response.data.results;
}
export async function fetchMoviesByName(query, page) {
  const response = await axios('search/movie', {
    params: {
      api_key: KEY,
      query,
      page,
    },
  });
  return response.data;
}
export async function fetchMoviesById(movieId) {
  const response = await axios(`/movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}
export async function fetchMoviesCast(movieId) {
  const response = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data.cast;
}
export async function fetchMoviesReviews(movieId) {
  const response = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data.results;
}

// `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
