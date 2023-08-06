import React, { useState } from 'react';
import  SearchForm  from '../SearchForm/SearchForm';
import  MoviesList  from '../MoviesList/MoviesList';


 const Movies = () => {
  const [searchParams, setSearchParams] = useState({ query: '' });

 const handleSubmit = (value) => {
  setSearchParams({ query: value.query });
};

  return (
    <div>
      <h1>Movies Page</h1>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList searchParams={searchParams} />
    </div>
  );
}

export default Movies;

