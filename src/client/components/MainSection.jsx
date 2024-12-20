import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Playlist from './Playlist';

const MainSection = () => {
  const [sharedData, setSharedData] = useState(null);

  const bridgeBetweenSiblins = (newData) => {
    setSharedData(newData);
  };

  //   console.log(sharedData);

  return (
    <div className='MainSection'>
      <SearchBar funct={bridgeBetweenSiblins} />
      <Playlist state={sharedData} />
    </div>
  );
};

export default MainSection;
