import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../css/home.css';
import { saveProfile } from "../reducers/profileReducer";
import { saveAboutMe } from "../reducers/aboutMeReducer";
import { saveAcademic } from "../reducers/academicReducer";
import { saveExperience } from "../reducers/experienceReducer";
import { saveProject } from "../reducers/projectReducer";
import { saveSkill } from "../reducers/skillReducer";
import { useDispatch } from 'react-redux';

const Home = props => {
  const navigate = useNavigate ();
  const [resumeList,setResumeList] = useState([])
  const dispatch = useDispatch();
  const addResume = () => {
      dispatch(saveProfile(""));
      dispatch(saveAboutMe(""));
      dispatch(saveAcademic([]));
      dispatch(saveExperience([]));
      dispatch(saveProject([]));
      dispatch(saveSkill([]));
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
