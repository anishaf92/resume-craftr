import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../css/home.css';
import { resetExperience } from '../reducers/experienceReducer';
import { resetProfile } from "../reducers/profileReducer";
import { resetAboutMe } from "../reducers/aboutMeReducer";
import { resetAcademic } from "../reducers/academicReducer";
import { resetProject } from "../reducers/projectReducer";
import { resetSkills } from "../reducers/skillReducer";

import { useDispatch } from 'react-redux';

const Home = props => {
  const navigate = useNavigate ();
  const [resumeList,setResumeList] = useState([])
  const dispatch = useDispatch();
  const addResume = () => {
    dispatch(resetProfile());
    dispatch(resetAboutMe());
    dispatch(resetAcademic());
    dispatch(resetExperience());
    dispatch(resetProject());
    dispatch(resetSkills());
    navigate ('/addResume');
  };
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setResumeList(data));
  },[])
  return (
    <div>
      <div className="home-container">
      <button onClick={() => addResume ()} className="addResume">
        Add Resume
      </button>
      </div>
      <div class="card-container">
        {resumeList && resumeList.map((resume,index) => (
          <div className="card" onClick={() => {navigate(`/${resume.id}`)}}>
          <h1>{resume.resume.profile.fullName}</h1>
          <p className="title">{resume.resume.profile.designation}</p>
          <p>{resume.resume.profile.email}</p>
          <p>{resume.resume.profile.phone}</p>
          <p>{resume.resume.profile.location}</p>
        </div>
        ))}
      
</div>
    </div>
  );
};

export default Home;
