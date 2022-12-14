import React from 'react';
import savedImage from '../../images/saved-movies.svg';
function MoviesCard({ title, duration, image, isSaved }) {
  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__title">{title}</h2>
        <p className="card__duration">{duration}</p>
      </div>
      <img
        className="card__image"
        src={image}
        alt={`Обложка фильма "${title}"`}
      />
      <button className={`card__button${isSaved ? ' card__button_saved' : ''}`}>
        {isSaved ? <img src={savedImage} alt="Сохранить" /> : 'Сохранить'}
      </button>
    </li>
  );
}

export default MoviesCard;
