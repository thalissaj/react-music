import React from 'react';

function Tracks(props) {
  let tracks = props.location.state.dataTracks;
  return(
    <div>
      <ul>
        {tracks.map((track)=> Track(track))}
      </ul>
    </div>
  )
}

function Track(props){
  return(
    <div>
      <li key={props.id}>{props.title}</li>
      <iframe title={props.title} src={props.url}></iframe>
    </div>
  )
}
export default Tracks;
