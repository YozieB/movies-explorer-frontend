import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <div className="footer__copy">&copy; {new Date().getFullYear()}</div>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__link" href="google.com">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" href="google.com">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
