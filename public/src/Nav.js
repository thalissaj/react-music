import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav(props) {
  return (
    <div className="container-nav">
      <Link to='/' className="logo"><h1>Music Fy</h1></Link>
      <div className="user">
        <i className="fas fa-user"></i>
        <p>User</p>
      </div>
    </div>
  );
}

export default Nav;
