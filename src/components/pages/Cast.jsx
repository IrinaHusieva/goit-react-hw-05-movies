import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api/api';

 const Cast = ({ movieId }) => {
  //  const { movieId } = useParams();
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
return(
  <div>
      <h1>Cast</h1>
      {movieCredits.map((actor) => (
        <div key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
        </div>
      ))}
    </div>
)
};

export default Cast;