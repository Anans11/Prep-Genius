import React from 'react';
import './Header.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <div className="logo"><a href='/home'>PrepGenius</a></div>
      <div className="auth">
        <a href="/register"> <button className="signin">Register</button></a>
        <a href="/login"><button className="register">Login</button></a>
        <a href="/profile"><button className="profile">Profile</button></a>
      </div>
    </div>
  );
};

export default Header;
