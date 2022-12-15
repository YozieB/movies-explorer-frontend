import React from 'react';
import testImage from '../../images/movie-pic.png';
import MoviesCard from '../MoviesCard/MoviesCard';
const movies = [
  {
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    isSaved: true,
    image: testImage,
  },
  {
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    isSaved: true,
    image: testImage,
  },
  {
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    isSaved: false,
    image: testImage,
  },
  {
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    isSaved: false,
    image: testImage,
  },
  {
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    isSaved: true,
    image: testImage,
  },
];
function MoviesCardList({ savedVariant }) {
  return (
    <div className="movies">
      <ul className="movies__list">
        {movies.map((el) => (
          <MoviesCard
            key={Date.now() + Math.random() * 100}
            title={el.title}
            duration={el.duration}
            image={el.image}
            isSaved={el.isSaved}
            savedVariant={savedVariant}
          />
        ))}
      </ul>
      <button className="movies__button">Ещё</button>
    </div>
  );
}

export default MoviesCardList;
