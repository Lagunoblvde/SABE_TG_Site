import React from 'react';
import '../Styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Введите название для поиска" />
      <i className="fas fa-search search-icon"></i>
    </div>
  );
};

export default SearchBar;
