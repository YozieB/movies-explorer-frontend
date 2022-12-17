import React from 'react';
import logo from '../../images/logo.svg';

function EntryComponent({ title }) {
  return (
    <div className="entry">
      <img className="entry__logo" src={logo} alt="Лого" />
      <h1 className="entry__title">{title}</h1>
    </div>
  );
}

export default EntryComponent;
