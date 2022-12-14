import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search">
      <div className="search__field">
        <input className="search__input" placeholder="Фильм" />
        <button className="search__button"></button>
      </div>
      <FilterCheckbox />
      <div className="search__divider"></div>
    </div>
  );
}

export default SearchForm;
