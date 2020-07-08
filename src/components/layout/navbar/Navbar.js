import React from 'react';
import PropTypes from 'prop-types';
//import './App.css';
import '../navbar/Navbar.css'

const Navbar = ({ title }) => {
  return (
    <nav>
      <h1>
        {title}
      </h1>
      <ul>
        <li>
        Home
        </li>
        <li>
          About
        </li>
        <li>
        Contact
        </li>
      </ul>

    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Portfolio'
}


export default Navbar;
