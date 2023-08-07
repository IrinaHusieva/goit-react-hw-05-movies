
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Header  from './Header/Header';


// Асинхронні імпорти для компонентів, що використовують Code Splitting
const Home = React.lazy(() => import('./pages/Home'));
const Movies = React.lazy(() => import('./pages/Movies'));
const MovieDetails = React.lazy(() => import('./pages/MovieDetails'));
const Cast = React.lazy(() => import('./pages/Cast'));
const Reviews = React.lazy(() => import('./pages/Reviews'));

const App = () => {
  return (
    <Router>
       <Header />
      <Suspense fallback={<div>Loading...</div>}>
        
           <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
        
      </Suspense>
    </Router>
  );
};
export default App;