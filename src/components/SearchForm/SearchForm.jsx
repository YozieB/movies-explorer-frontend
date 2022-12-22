import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search">
      <form className="search__field">
        <input required className="search__input" placeholder="Фильм" />
        <button className="search__button"></button>
      </form>
      <FilterCheckbox />
      <div className="search__divider"></div>
    </div>
  );
}

export default SearchForm;
