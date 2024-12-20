import React, { useState } from 'react'; // Import React and useState hook for state management
import { FaMagnifyingGlass } from 'react-icons/fa6'; // Import the magnifying glass icon from react-icons
// import './SearchBar.css'; // Import the CSS for the search bar
// import { response } from 'express';
// import Playlist from './Playlist'; // Import the Playlist component

const SearchBar = (props) => {
  const [input, setInput] = useState(''); // State to manage the search input value
  const [searchResults, setSearchResults] = useState([]); // State to manage the search results
  const [error, setError] = useState(null); // State to manage any error that occurs during fetch

  // Function to fetch data from the server based on the search input
  const fetchData = async (value) => {
    try {
      const response = await fetch(`/playlist/${value}`); // Fetch data from the server using the search input value
      if (!response.ok) {
        throw new Error('Network response was not ok'); // Throw an error if the response is not ok
      }
      const json = await response.json(); // Parse the JSON response
      console.log(json.songs); // Log the response for debugging
      setSearchResults(json.songs); // Update the search results state
      setError(null); // Reset error state if fetch is successful
    } catch (err) {
      setError(err.message); // Set error state if fetch fails
      setSearchResults([]); // Clear search results if fetch fails
    }
  };

  // Function to handle search button click
  const handleSearch = () => {
    if (input.trim() === '') {
      setSearchResults([]); // Clear search results if input is empty
    } else {
      fetchData(input); // Fetch results if input is not empty
    }
  };

  // Function to handle change in search input
  const handleChange = (value) => {
    setInput(value); // Update the search input state
    if (value.trim() === '') {
      setSearchResults([]); // Clear search results if input is empty
    }
  };
  const postFetch = async (song) => {
    setInput(''); 
    console.log(song);
    const data = {
      song: song.name,
      artist: song.artists[0].name,
      album: song.album.name,
      albumImageUrl: song.album.images[2].url,
      duration: song.duration_ms,
      releaseDate: song.album.release_date,
    };
    console.log('This is the song data:', data);

    try {
      const response = await fetch('/playlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      props.funct('hola'); //This function is going to be executed in father MainSection component as bridgeBetweenSiblins(params)
      setSearchResults([]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search for a song...' // Placeholder text for the search input
        value={input} // Bind the search input value to state
        onChange={(e) => handleChange(e.target.value)} // Update input state on change
      />
      <button id='search-icon' className='search-icon' onClick={handleSearch}>
        {/* Button to trigger search */}
        <FaMagnifyingGlass /> {/* Magnifying glass icon */}
      </button>
      {error && <div className='error-message'>{error}</div>}
      {/* Display error message if any */}
      {input && searchResults.length > 0 && (
        <div className='dropdown'>
          {searchResults.map((result, index) => (
            <div
              onClick={() => postFetch(result)}
              key={index}
              className='dropdown-item'
            >
              <p>
                {result.name} - {result.artists[0].name}
              </p>
              {/* Display song name and artist */}
            </div>
          ))}
        </div>
      )}
      {/* <Playlist results={searchResults} /> */}
      {/* Render the Playlist component with search results */}
    </div>
  );
};

export default SearchBar;
