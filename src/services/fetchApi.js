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
export async function fetchMoviesByName(query) {
  const response = await axios('search/movie', {
    params: {
      api_key: KEY,
      query: query,
      page: 1,
    },
  });
  return response.data.results;
}

// `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
