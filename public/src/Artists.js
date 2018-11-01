import React from 'react';

function Artists(props) {
  let artists = props.location.state.dataArtists;
  return(
    <div>
      <ul>
        {artists.map(track => Track(track))}
      </ul>
    </div>
  )
}

function Track(props){
  return(
    <li key={props.id}>{props.name}</li>
  )
}

export default Artists;
