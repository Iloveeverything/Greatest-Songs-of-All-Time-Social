import React, { useState, useEffect } from 'react';
import SongComponent from './songComponent';
import fakeDB from '../db.json';

const Playlist = () => {
  useEffect(() => {
    getPaylist();
  }, []);
  const [playlist, setPlaylist] = useState([]);
  const getPaylist = async () => {
    const url = '/playlist';
    // const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

    try {
      const response = await fetch(url);
      console.log(response);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setPlaylist(jsonResponse.songs);
    } catch (error) {
      console.log(error);
    }
    // setPlaylist(fakeDB); //only for testing
  };
  return (
    <div className='playlist-component'>
      {playlist.map((song, index) => {
        return <SongComponent key={index} data={song} />;
      })}
    </div>
  );
};

export default Playlist;
