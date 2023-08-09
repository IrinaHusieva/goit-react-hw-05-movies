import React, { useEffect, useState } from 'react';
import { getMovieCredits } from '../../api/api';

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
    <div>
      <h1>Cast</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        movieCredits.map((actor) => (
          <div key={actor.id}>
            <img
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}` : defaultImgCast}
              alt={actor.name}
              width={200}
            />
            <p>{actor.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cast;