import React, { useState, useEffect } from 'react';
import SongComponent from './songComponent';
import fakeDB from '../db.json';

const Playlist = () => {
  useEffect(() => {
    getPaylist();
  }, []);
  const [playlist, setPlaylist] = useState([]);
  const getPaylist = async () => {
    // const url: 'http://localhost:8080/playlist';
    // const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

    // try {
    //   const response = await fetch(url);
    //   const jsonResponse = await response.json();
    //   setPlaylist(jsonResponse.game_indices);
    // } catch (error) {
    //   console.log(error);
    // }
    setPlaylist(fakeDB); //only for testing
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
