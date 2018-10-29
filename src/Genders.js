import React from 'react';

export default function Genders(props) {
  let gendersArr = []; //contem os generos existentes
  let artistsGenre = {}; //contem o artista de cada gênero
  let artists = props.location.state.dataArtists;
  artists.map((artist) => {
      if(gendersArr.indexOf(artist.genre) === -1){
        gendersArr.push(artist.genre);
        artistsGenre[artist.genre] = [artist];
      }else{
        let index = artistsGenre[artist.genre].length;
        artistsGenre[artist.genre][index] = artist;
      }
      return gendersArr;
    });
  return(
    <div>
      <ul>
        {gendersArr.map((genre) => Genre(genre))}
      </ul>
    </div>
  )
}

function Genre (props){
  return(
    <li>{props}</li>
  )
}
