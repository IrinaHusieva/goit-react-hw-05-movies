import React, { useEffect, useState } from 'react';
import { getMovieReviews } from '../../api/api';
import styles from './Reviews.module.css'

const Cast = ({ movieId }) => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovieReviews(movieId)
      .then((movieReviews) => {
        setMovieReviews(movieReviews);
      })
      .catch((error) => {
        setError('Error fetching trending movies: ' + error.message);
      });
  }, [movieId]);
  
 return (
    <div className={styles.reviewsContainer}>
      {movieReviews.length > 0 ? (
        <ul className={styles.reviewList}>
          {movieReviews.map((author) => (
            <li key={author.id} className={styles.reviewItem}>
              <h3 className={styles.authorName}>{author.author}</h3>
              <p className={styles.reviewContent}>{author.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noReviews}>
          {error ? `Error: ${error}` : "We don't have any reviews for this movie."}
        </p>
      )}
    </div>
  );
};

export default Cast;
