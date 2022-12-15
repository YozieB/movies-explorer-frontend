import React from 'react';
import image from '../../images/promo.svg';
function Promo() {
  return (
    <div className="promo">
      <div className="promo__content">
        <div className="promo__info">
          <h1 className="promo__title">
            {/* мнемоника для переноса в точности как на макете */}
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className="link promo__button">Узнать больше</button>
        </div>
        <img className="promo__image" src={image} alt="Планета" />
      </div>
    </div>
  );
}

export default Promo;
