import React from 'react';
import './Header.css';
import logo from './header_logo.png';
import user from './user.jpg';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="logo">
            <Link to='/'>
              <img src={logo} alt="logo"/>
            </Link>
        </div>
        <div className="user">
            <Link to='/about'>
              <img src={user} alt="Utente" />
            </Link>
        </div>
    </header>
  );
}

export default Header;