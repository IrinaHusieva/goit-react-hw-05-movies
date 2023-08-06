import React, { Suspense } from 'react';
import  MoviesList  from '../MoviesList/MoviesList';

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList searchParams={{ query: '' }} />
      </Suspense>
    </div>
  );
}

export default Home;