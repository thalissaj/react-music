import React, { Component } from 'react';
import './Main.css';
import Categories from './Categories.js';
import {Route} from 'react-router-dom';
import IndexMain from './IndexMain.js'
import PlaylistsUser from './Playlists.js'
import Artists from './Artists.js';
import Genders from './Genders.js';
import Tracks from './Tracks.js';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists:[],
      genders:[],
      tracks:[],
      playlists: []
    };
  }

    componentDidMount(){
    const BASE_URL = "https://peaceful-badlands-98440.herokuapp.com"
    const options = {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ email: "rafael@laboratoria.la", password: "banana" })
    };

    fetch(`${BASE_URL}/login`, options)
      .then(res => {
        const options = {
          method: "get",
          credentials: 'include'
      };

      fetch(`${BASE_URL}/artists`, options)
        .then(res => res.json())
        .then(data => this.setState({ artists: data }));

        fetch(`${BASE_URL}/tracks`, options)
          .then(res => res.json())
          .then(data => this.setState({ tracks: data }));

      });
  }
  render(){
    return(
      <div className="container-main">
        <Categories className="categories" artistsInf={this.state.artists} tracksInf={this.state.tracks}/>
        <Route path='/' render={IndexMain}/>
        <Route path='/artists' render={Artists}/>
        <Route path='/genders' render={Genders}/>
        <Route path='/tracks' render={Tracks}/>
        <Route path='/playlists' render={PlaylistsUser}/>
      </div>
    )
  }
}

export default Main;
