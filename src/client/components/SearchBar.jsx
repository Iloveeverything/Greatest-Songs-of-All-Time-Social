import React, { useState, useEffect } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6'; // Importing a search icon from react-icons
import './SearchBar.css'; // Importing the CSS file for styling
import './Playlist';
const SearchBar = () => {
  // Functional component for a search bar
  const [input, setInput] = useState(''); // State to handle the input value

  //   console.log(input);
  // Function to fetch data based on the input value
  const getMusic = async (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleChange = (value) => {
    setInput(value);
    getMusic(value);
  };
  return (
    <div className='search-bar-component'>
      <input
        placeholder='Type to search song...'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FaMagnifyingGlass id='search-icon' />
    </div>
  );
};

export default SearchBar;
