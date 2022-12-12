import React from 'react';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';
function Header({ isLogged }) {
  return (
    <header className="header">
      <div className="header__nav">
        <picture className="header__logo">
          <img src={logo} alt="Лого" />
        </picture>
        {isLogged && (
          <nav className="header__menu">
            <ul className="header__list">
              <li className="header__list-item">Фильмы</li>
              <li className="header__list-item">Сохранённые фильмы</li>
            </ul>
          </nav>
        )}
        {isLogged ? (
          <ul className="header__profile">
            <li className="header__profile-link">Аккаунт</li>
            <li className="header__profile-image">
              <picture className="header__logo">
                <img src={profile} alt="Лого" />
              </picture>
            </li>
          </ul>
        ) : (
          <ul className="header__btns">
            <li className="header__btns-item">
              <a
                href="https://google.com"
                className="header__btn header__btn_register"
              >
                Регистрация
              </a>
            </li>
            <li className="header__btns-item">
              <a
                href="https://google.com"
                className="header__btn header__btn_login"
              >
                Войти
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
