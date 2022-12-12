import React from 'react';
import arrow from '../../images/arrow.svg';

function Portfolio(props) {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <a href="#" className="portfolio__link-item">
            Статичный сайт
          </a>
          <img src={arrow} alt="Стрелка" />
        </li>
        <li className="portfolio__link">
          <a href="#" className="portfolio__link-item">
            Адаптивный сайт
          </a>
          <img src={arrow} alt="Стрелка" />
        </li>
        <li className="portfolio__link">
          <a href="#" className="portfolio__link-item">
            Одностраничное приложение
          </a>
          <img src={arrow} alt="Стрелка" />
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
