import axios from 'axios';
const API_KEY = 'fb80b48b1255806de867923f1e41971b';

// Функція для отримання списку найпопулярніших фільмів на сьогодні
async function getTrendingMovies() {
  try {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
}

// Функція для пошуку фільму за ключовим словом
async function searchMovies(query, page = 1) {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}

// Функція для отримання повної інформації про фільм за його ідентифікатором
async function getMovieDetails(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
}

// Функція для отримання інформації про акторський склад фільму за його ідентифікатором
async function getMovieCredits(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return [];
  }
}

// Функція для отримання оглядів фільму за його ідентифікатором
async function getMovieReviews(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return [];
  }
}

export {
  getTrendingMovies,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

