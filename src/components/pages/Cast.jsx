import React, { useEffect, useState } from 'react';
import { getMovieCredits } from '../../api/api';
import styles from './Cast.module.css'

const Cast = ({ movieId }) => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovieCredits(movieId)
      .then((movieCredits) => {
        setMovieCredits(movieCredits);
      })
      .catch((error) => {
        setError('Error fetching trending movies: ' + error.message);
      });
  }, [movieId]);
  const defaultImgCast = 'https://cdn-icons-png.flaticon.com/512/4054/4054617.png';
 return (
    <div className={styles.castContainer}>
      <h1 className={styles.heading}>Cast</h1>
      {error ? (
        <p className={styles.error}>Error: {error}</p>
      ) : (
        <div className={styles.castList}>
          {movieCredits.map((actor) => (
            <div key={actor.id} className={styles.actorItem}>
              <img
                src={actor.profile_path ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}` : defaultImgCast}
                alt={actor.name}
                width={200}
              />
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cast;