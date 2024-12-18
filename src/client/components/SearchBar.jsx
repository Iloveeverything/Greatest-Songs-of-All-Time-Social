import React, { useState, useEffect } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6'; // Importing a search icon from react-icons
import './SearchBar.css'; // Importing the CSS file for styling

const SearchBar = ({ onSearchResults }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchSearchResults = async () => {
        onSearchResults([]); // Clear search results when input is empty
        return;
      }

      try {
        const response = await fetch(`/playlist/${encodeURIComponent(input)}`);
        const data = await response.json();
        onSearchResults(data.songs); // Pass search results to the parent component
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    const debounceTimeout = setTimeout(fetchSearchResults, 300); // Debounce API calls
    return () => clearTimeout(debounceTimeout); // Cleanup timeout
  }, [input, onSearchResults]);

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search for a song...'
        value={input}
        onChange={(e) => {
          console.log(`Input changed: ${e.target.value}`); // Debug log
          setInput(e.target.value);
        }}
      />
      <FaMagnifyingGlass id='search-icon' />
    </div>
  );
};

export default SearchBar;
