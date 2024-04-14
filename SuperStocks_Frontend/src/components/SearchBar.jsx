// SearchBar.js
import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <div>
      <h2>Search Stock Symbol</h2>
      <input type="text" onChange={(e) => { if(e.target.value.trim()!="") handleSearch(e.target.value)}} />
    </div>
  );
};

export default SearchBar;
