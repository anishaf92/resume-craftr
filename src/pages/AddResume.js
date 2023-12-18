import React,{useEffect} from 'react';
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import Academics from '../components/Academics';
import ProfessionalExperience from '../components/ProfessionalExperience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import '../css/addresume.css';
import { resetExperience } from '../reducers/experienceReducer';
import { resetProfile } from "../reducers/profileReducer";
import { resetAboutMe } from "../reducers/aboutMeReducer";
import { resetAcademic } from "../reducers/academicReducer";
import { resetProject } from "../reducers/projectReducer";
import { resetSkills } from "../reducers/skillReducer";

import {useDispatch} from "react-redux";

const AddResume = props => {
  const navigate = useNavigate();
  const resume = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch actions to reset each section of the state
    dispatch(resetProfile());
        dispatch(resetAboutMe());
        dispatch(resetAcademic());
        dispatch(resetExperience());
        dispatch(resetProject());
        dispatch(resetSkills());
  }, [dispatch]);
  const handleSubmit = () => {

    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {resume} ),
    })
      .then((res) => console.log(res.json()))
      .finally(()=>{
        navigate("/")
      })

  }
  return (
    <div>
      <Profile edit={true} />
      <AboutMe edit={true} />
      <Academics edit={true} />
      <ProfessionalExperience edit={true} />
      <Projects edit={true} />
      <Skills edit={true}/>
      <button onClick={() => handleSubmit()}>Submit Resume</button>
    </div>
  );
};

export default AddResume;
