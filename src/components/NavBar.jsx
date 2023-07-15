import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="navbar">
      <FontAwesomeIcon icon={faHome} className='navbar-icon' />
      <div className='company-title'>
        <h2>MIKE'S ROOFING LLC</h2>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className='navbar-link'>Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/store" className='navbar-link'>Store</Link>
        </li>
        <li className="navbar-item">
          <Link to="/aboutus" className='navbar-link'>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
