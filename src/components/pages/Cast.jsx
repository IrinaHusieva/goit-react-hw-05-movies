import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

 const Cast = () => {
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      // Повернення назад або інше дії, якщо movieId відсутній
    }
  }, [movieId]);

  return (
    <div>
      {/* Вміст сторінки інформації про акторський склад */}
    </div>
  );
}
export default Cast;