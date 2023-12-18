import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/navbar.css';
import {useDispatch} from "react-redux";
import { resetExperience } from '../reducers/experienceReducer';
import { resetProfile } from "../reducers/profileReducer";
import { resetAboutMe } from "../reducers/aboutMeReducer";
import { resetAcademic } from "../reducers/academicReducer";
import { resetProject } from "../reducers/projectReducer";
import { resetSkills } from "../reducers/skillReducer";

const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleHome = () => {
      dispatch(resetProfile());
        dispatch(resetAboutMe());
        dispatch(resetAcademic());
        dispatch(resetExperience());
        dispatch(resetProject());
        dispatch(resetSkills());
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
