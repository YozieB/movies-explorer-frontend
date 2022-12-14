import React from 'react';

function FilterCheckbox(props) {
  return (
    <div className="filter">
      <input className="filter__checkbox" type="checkbox" />
      <p className="filter__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
