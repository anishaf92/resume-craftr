import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Resume Craftr</div>
        <div className="home" onClick={() => navigate("/")}>
          Home
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
