import React, { useEffect,useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import Profile from "../components/Profile";
import AboutMe from "../components/AboutMe";
import Academics from "../components/Academics";
import ProfessionalExperience from "../components/ProfessionalExperience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { saveProfile } from "../reducers/profileReducer";
import { saveAboutMe } from "../reducers/aboutMeReducer";
import { saveAcademic } from "../reducers/academicReducer";
import { saveExperience } from "../reducers/experienceReducer";
import { saveProject } from "../reducers/projectReducer";
import { saveSkill } from "../reducers/skillReducer";
import { resetExperience } from "../reducers/experienceReducer";

const ViewResume = (props) => {  
  const resumeGlobal = useSelector(state => state);
  const dispatch = useDispatch();
  const { id } = useParams(); 
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/${id}`);
      const data = await response.json();
      console.log(data.resume)
      console.log(resumeGlobal)
      if(data.resume !== resumeGlobal){
      dispatch(saveProfile(data.resume.profile));
      dispatch(saveAboutMe(data.resume.aboutMe.aboutMeText));
      dispatch(saveAcademic(data.resume.academics.academics));
      dispatch(saveExperience(data.resume.experience.experience));
      dispatch(saveProject(data.resume.projects));
      dispatch(saveSkill(data.resume.skills.skills));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error (e.g., show an error message to the user)
    }
}
  useEffect(() => {
    fetchData()

    return () => {
        // Dispatch actions to reset relevant parts of the state
        dispatch(saveProfile(""));
        dispatch(saveAboutMe(""));
        dispatch(saveAcademic([]));
        dispatch(resetExperience());
        dispatch(saveProject([]));
        dispatch(saveSkill([]));
      };
  },[id]) 
  const deleteResume = async () => {
    try{
        fetch(`/api/${id}`, {
            method: 'DELETE',
          }).then(() => {
            navigate("/")
          });
    }
    catch(error){
        console.error(error)
    }
  }
  const saveChanges = async () => {
        try {
          const updatedData = {
            profile: resumeGlobal.profile,
      aboutMe: { aboutMeText: resumeGlobal.aboutMe.aboutMeText },
      academics: { academics: resumeGlobal.academics.academics },
      experience: resumeGlobal.experience,
      projects: resumeGlobal.projects,
      skills: { skills: resumeGlobal.skills.skills },
          };
      
          await fetch(`/api/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ resume: updatedData }),
          });
      
          navigate("/");
        } catch (error) {
          console.error("Error saving changes:", error);
          // Handle error (e.g., show an error message to the user)
        }
      
  };
  return (
    <div>
        
        <Profile edit={false}  /> 
      <AboutMe edit={false} /> 
       <Academics edit={false} />
      <ProfessionalExperience edit={false} />
      <Projects edit={false} />
      <Skills edit={false} />
      <div className="button-block">
      <button onClick={() => saveChanges()}>Save Changes</button>
      <button onClick={() => deleteResume()}>Delete Resume</button>
      </div>
      
      
    </div>
  )
};

export default ViewResume;
