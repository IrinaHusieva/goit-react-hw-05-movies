import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import { NavLink } from 'react-router-dom';
import styles from './MoviesList.module.css'

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
    <div className={styles.moviesListContainer}>
      {error && <div className={styles.error}>{error}</div>}

      <h1 className={styles.heading}>Trending Movies</h1>
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.movieItem}>
            <NavLink to={`/movies/${movie.id}`} className={styles.movieLink}>
              {movie.title ? movie.title : movie.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;

 
