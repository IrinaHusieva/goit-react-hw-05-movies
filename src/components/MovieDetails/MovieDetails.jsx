import React from 'react';

export const MovieDetails = ({ movieData }) => {
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {/* Вміст сторінки детальної інформації про кінофільм */}
      <img
        src={movieData.poster_path ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}` : defaultImg}
        width={250}
        alt="poster"
      />
    </div>
  );
}

