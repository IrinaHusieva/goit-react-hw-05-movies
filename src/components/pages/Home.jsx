import React, { Suspense } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
        <MoviesList searchParams={{ query: '' }} />
      </Suspense>
    </div>
  );
};

export default Home;