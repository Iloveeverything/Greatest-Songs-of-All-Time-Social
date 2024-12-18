import React, { useState, useEffect } from 'react';

const songComponent = (props) => {
  console.log(props.data);
  return (
    <div className='song-component'>
      <img className='album-img' src={props.data.albumImageUrl} alt='#' />
      <p> - </p>
      <p>{props.data.song}</p>
      <p> - </p>
      <p>{props.data.artist}</p>
      <p> - </p>
      <p>{props.data.album}</p>
    </div>
  );
};

export default songComponent;
