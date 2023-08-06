import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => {
        setError('Error fetching trending movies: ' + error.message);
      });
  }, []);

   return (
    <div>
      {error && <div>{error}</div>}

      <h1>Trending Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;

 
