import React from 'react';
import './Header.css'; // Import CSS file for styling
const Header = () => {
  return (
    <div className="header">
      <div className="logo">PrepGenius</div>
      <div className="auth">
        <a href="/register"> <button className="signin">Register</button></a>
        <a href="/login"><button className="register">Login</button></a>
      </div>
    </div>
  );
};

export default Header;
