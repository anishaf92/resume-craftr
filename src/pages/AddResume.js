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
import { saveProfile } from "../reducers/profileReducer";
import { saveAboutMe } from "../reducers/aboutMeReducer";
import { saveAcademic } from "../reducers/academicReducer";
import { saveExperience } from "../reducers/experienceReducer";
import { saveProject } from "../reducers/projectReducer";
import { saveSkill } from "../reducers/skillReducer";
import {useDispatch} from "react-redux";

const AddResume = props => {
  const navigate = useNavigate();
  const resume = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch actions to reset each section of the state
    dispatch(saveProfile({fullName: '',
    designation: '',
    email: '',
    phone: '',
    location: '',
    website: '',}));
    dispatch(saveAboutMe({ aboutMeText: '' }));
    dispatch(saveAcademic([]));
    dispatch(saveExperience([]));
    dispatch(saveProject([]));
    dispatch(saveSkill([]));
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
