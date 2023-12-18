import {combineReducers} from 'redux';
import {profileReducer} from './profileReducer';
import {aboutMeReducer} from './aboutMeReducer';
import academicReducer from './academicReducer';
import skillReducer from './skillReducer';
import experienceReducer from './experienceReducer';
import projectReducer from "./projectReducer";
import {v4 as uuidv4} from 'uuid';
const generateResumeId = () => uuidv4 ();



const rootReducer = combineReducers ({
  resumeId: generateResumeId (),
  profile: profileReducer,
  aboutMe: aboutMeReducer,
  academics: academicReducer,
  experience: experienceReducer,
  projects: projectReducer,
  skills: skillReducer,
  // Add other sections here
});

export default rootReducer;
