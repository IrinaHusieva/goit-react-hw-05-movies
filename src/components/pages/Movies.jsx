import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from '../../api/api';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const fetchData = useCallback(async (query) => {
    try {
      const movies = await searchMovies(query);
      setSearchResults(movies);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  }, []);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchTerm(query);
      fetchData(query);
    }
  }, [searchParams, fetchData]);

  const location = useLocation();

  const onGoBack = () => {
    if (location.pathname.includes('/movies')) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  const handleSubmitSearchTerm = (query) => {
    setSearchParams({ query: query });
  };

return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => handleSubmitSearchTerm(searchTerm)}>Search</button>
      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No movies found for your search.</p>
      )}
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
};

export default Movies;
