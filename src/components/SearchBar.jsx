import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return <input type="text" placeholder="Поиск..." onChange={handleSearch} />;
};

export default SearchBar;
