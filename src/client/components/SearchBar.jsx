import React, { useState, useEffect } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6'; // Importing a search icon from react-icons
import './SearchBar.css'; // Importing the CSS file for styling
const SearchBar = () => {
  // Functional component for a search bar
  const { input, setInput } = useState(''); // State to handle the input value
  // Function to fetch data based on the input value
  const fetchData = (value) => {};
  return (
    <div className='search-bar-component'>
      <input
        placeholder='Type to search song...'
        // value={input}
        // onChange={(e) => setInput(e.target.value)}
      />
      <FaMagnifyingGlass id='search-icon' />
    </div>
  );
};

export default SearchBar;
