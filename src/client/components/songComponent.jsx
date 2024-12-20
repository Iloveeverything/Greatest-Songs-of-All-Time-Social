import React, { useState, useEffect } from 'react';

const songComponent = (props) => {
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
  const onCLickHandler = () => {
    props.func(props.data.song);
  };
  return (
    <div className='song-component'>
      <div className='songData'>
        <img className='album-img' src={props.data.albumImageUrl} alt='#' />

        <div className='song'>{props.data.song}</div>
        <p className='dash'> - </p>
        <div className='artist'>{props.data.artist}</div>
        <p className='dash'> - </p>
        <div className='album'>{props.data.album}</div>
        <p className='dash'> - </p>
        <div className='date'>{props.data.releaseDate}</div>
        <p className='dash'> - </p>
        <div className='duration'> {millisToMinutesAndSeconds(props.data.duration)}</div>
      </div>
      <div className='deleteButton'>
        <div className='close-button' onClick={onCLickHandler}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default songComponent;
