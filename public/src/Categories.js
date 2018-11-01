import React from 'react';
import ButtonFunc from './Button.js';
import {Link} from 'react-router-dom';
import './Categories.css'

function Categories(props) {
  let artists = props.artistsInf;
  let tracks = props.tracksInf;
  return(
    <div className="categories-container">
      <h3>Categorias</h3>
      <Link className="link" to={{
        pathname:'/artists',
        state: {
          dataArtists: artists
        }}}>
        <ButtonFunc>Artistas</ButtonFunc>
      </Link>
      <Link className="link" to={{
        pathname:'/genders',
        state: {
          dataArtists: artists
        }}}
        ><ButtonFunc>Gêneros</ButtonFunc>
      </Link>
      <Link className="link" to={{
        pathname:'/tracks',
        state: {
          dataTracks: tracks
        }}}>
        <ButtonFunc>Musicas</ButtonFunc>
      </Link>
      <Link className="link" to={{
        pathname:'/playlist',
        state: {
          dataArtists: artists
        }}}><ButtonFunc color="primary">Playlists</ButtonFunc></Link>
    </div>
  )
}

export default Categories;
