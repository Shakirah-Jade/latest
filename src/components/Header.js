import React from 'react';
import '../styles/Header.css';


function Header() {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
