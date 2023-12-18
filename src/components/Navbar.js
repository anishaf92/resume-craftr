import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/navbar.css';
import {useDispatch} from "react-redux";
import { resetExperience } from '../reducers/experienceReducer';

const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleHome = () => {
    dispatch(resetExperience());
    navigate("/")
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Resume Craftr</div>
        <div className="home" onClick={() => handleHome()}>
          Home
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
