import React, { useState, useEffect } from 'react'; 
import SearchBar from './SearchBar'; 
import Playlist from './Playlist'; 



const MainSection = () => {

    return (
        <div className='MainSection'>
            <SearchBar />
            <Playlist />
        </div>
    );
};

export default MainSection; 