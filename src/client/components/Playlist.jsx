import React, { useState, useEffect } from 'react';
import SongComponent from './songComponent';

const Playlist = (props) => {
  useEffect(() => {
    getPaylist();
  }, []);
  const [playlist, setPlaylist] = useState([]);
  const getPaylist = async () => {
    const url = '/playlist';
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setPlaylist(jsonResponse.songs);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteSong = async (song) => {
    try {
      const response = await fetch(`/playlist/${song}`, {
        method: 'DELETE',
      });
      alert('Song Deleted');
      const newResponse = await fetch('/playlist');
      const jsonResponse = await newResponse.json();
      setPlaylist(jsonResponse.songs);
    } catch (error) {
      console.log('error trying to delete a song', error);
      alert('Song could not be deleted');
    }
  };

  const [stateFromSearchbar, setStateFromSearchbar] = useState();
  useEffect(() => {
    const updateComponent = async () => {
      const newResponse = await fetch('/playlist');
      const jsonResponse = await newResponse.json();
      setPlaylist(jsonResponse.songs);
    };
    updateComponent();
  }, stateFromSearchbar);

  return (
    <div className='playlist-component'>
      {playlist.map((song, index) => {
        return <SongComponent key={index} data={song} func={deleteSong} />;
      })}
    </div>
  );
};

export default Playlist;
