import React, { useEffect, useState } from 'react';
import { getMovieReviews } from '../../api/api';

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
    <div>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map((author) => (
            <li key={author.id}>
              <h3>{author.author}</h3>
              <p>{author.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{error ? `Error: ${error}` : "We don't have any reviews for this movie."}</p>
      )}
    </div>
  );
};

export default Cast;
