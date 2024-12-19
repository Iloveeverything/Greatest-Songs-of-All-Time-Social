import React, { useState, useEffect, useCallback } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6'; // Importing a search icon from react-icons
import './SearchBar.css'; // Importing CSS for styling
import Playlist from './Playlist'; // Importing a child component to display the search results
import _ from 'lodash'; // Importing lodash to help use debounce function
// SearchBar Component: Handles the user input, debounced API calls, and passes search results to Playlist
const SearchBar = () => {
  // State to store the user's input in the search bar
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]); // State for storing search results
  const fetchData = (value) => {
    fetch('/playlist')
      .then((response) => response.json())
      .then((json) => {
        setSearchResults(json); // Save fetched data to searchResults state
        console.log(json); // log fetched data for debug
      });
  };
  // Create a debounced function to prevent unnecessary API calls for every key stroke
  const debouncedFetchData = useCallback(_.debounce(fetchData, 300), []);
  const handleChange = (value) => {
    setInput(value);
    if (value.trim() === '') {
      setSearchResults([]); // Clear search results if input is empty
    } else {
      debouncedFetchData(value); // Use the debounced function
    }
  };
  return (
    <div className='search-bar'>
      {/* Input field where users type their search queries */}
      <input
        type='text'
        placeholder='Search for a song...' // Placeholder text displayed in the input field
        value={input} // Binds the input value to the `input` state
        onChange={(e) => {
          //   console.log(`Input changed: ${e.target.value}`); // Debug log to show the current input value
          handleChange(e.target.value); // Update the input state with the user's typed value
        }}
      />
      {/* Search icon for visual representation */}
      <FaMagnifyingGlass id='search-icon' />
      {/* Display the search results using the Playlist component */}
      <Playlist results={searchResults} />
    </div>
  );
};

export default SearchBar; // Exporting the component for use in other parts of the app
