import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
function Header({ isLogged, onBurgerClick, onClose }) {
  return (
    <header className="header">
      <div className="header__nav">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Лого" />
        </Link>
        <Navigation isLogged={isLogged} />
        <div className="header__burger" onClick={onBurgerClick}>
          <div className="header__burger-line"></div>
          <div className="header__burger-line"></div>
          <div className="header__burger-line"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
