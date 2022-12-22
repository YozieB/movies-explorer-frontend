import React from 'react';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="link portfolio__link">
          <a
            href="https://github.com/YozieB/how-to-learn"
            className="portfolio__link-item"
            target="_blank"
          >
            Статичный сайт
          </a>
        </li>
        <li className="link portfolio__link">
          <a
            href="https://github.com/YozieB/russian-travel"
            className="portfolio__link-item"
            target="_blank"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="link portfolio__link">
          <a
            href="https://github.com/YozieB/mesto-react"
            className="portfolio__link-item"
            target="_blank"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
