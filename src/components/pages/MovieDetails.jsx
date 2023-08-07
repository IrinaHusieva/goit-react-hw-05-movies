
import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Route, Routes } from 'react-router-dom';
import { getMovieDetails } from '../../api/api';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetails = () => {
   const { movieId } = useParams();
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovieDetails(movieId)
      .then((moviesDetails) => {
        setMoviesDetails(moviesDetails);
      })
      .catch((error) => {
        setError('Error fetching trending movies: ' + error.message);
      });
  }, [movieId]);
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
 if (error) {
    return <div>{error}</div>;
  }
  if (!moviesDetails) {
    return <div>Loading...</div>;
  }
  const voteAverage = moviesDetails.vote_average;
  const percentLiked = voteAverage ? (voteAverage / 10) * 100 : null;
  return (
    <div>
      <img
        src={moviesDetails.poster_path ? `https://image.tmdb.org/t/p/w500/${moviesDetails.poster_path}` : defaultImg}
        width={250}
        alt="poster"
      />
      <h2>{moviesDetails.title ? moviesDetails.title : moviesDetails.name}</h2>
      <p>User Score: {Math.round(percentLiked)} %</p>
      <div>
        <h2>Overview</h2>
        <p>{moviesDetails.overview}</p>
      </div>
      <div>
        <h2>Genres</h2>
        <p>
          {moviesDetails.genres &&
            moviesDetails.genres.map((genre) => {
              return genre.name;
            }).join(' ')}
        </p>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li><NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink></li>
          <li><NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink></li>
        </ul>
      </div>
        <Routes>
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/*" element={<Reviews movieId={movieId} />} />
      </Routes>
    </div>
  );
}
export default MovieDetails;