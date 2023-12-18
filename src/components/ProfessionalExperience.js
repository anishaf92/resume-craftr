import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { saveSkill } from '../reducers/skillReducer';
import { saveAcademic } from '../reducers/academicReducer';
import { saveExperience } from '../reducers/experienceReducer';

const ProfessionalExperience = ({ edit }) => {
  const [editMode, setEditMode] = useState(edit);
  const [experienceList, setExperienceList] = useState([]);
  const experienceState = useSelector (state => state.experience.experience);
  const [experience, setExperience] = useState({
    designation: '',
    companyName: '',
    location: '',
    start: '',
    end: '',
    description: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();
  useEffect (
    () => {
       
    setExperienceList(experienceState);
    },
    [editMode]
  );
  const addExperience = () => {
    setEditMode(true);
    setExperience({
      designation: '',
      companyName: '',
      location: '',
      start: '',
      end: '',
      description: '',
    });
    setEditIndex(null);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedAcademics = [...experienceList];
      updatedAcademics[editIndex] = experience;
      setExperienceList(updatedAcademics);
      setEditMode(false);
      setEditIndex(null);
      dispatch(saveExperience(updatedAcademics));
    } else {
      setExperienceList([...experienceState, experience]);
      setEditMode(false);
      dispatch(saveExperience([...experienceState, experience]));
    }
  };

  const handleEdit = (index) => {
    setExperience(experienceList[index]);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedExperience = [...experienceList];
    updatedExperience.splice(index, 1);
    setExperienceList(updatedExperience);
    setEditMode(false);
    setEditIndex(null);
  };
  const handleClose = () =>{
    setEditMode(false)
  }
 

  return (
    <div>
      {console.log(experienceState)}
      {editMode ? (
        <div className="container">
          <header>
          <span>Professional Experience</span>
              <span onClick={() => handleClose ()}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </header>
            <div className="input-container">
              <label>Designation: </label>
              <input
                type="text"
                name="designation"
                value={experience.designation}
                onChange={e => setExperience ({...experience, designation: e.target.value}) }
              />
            </div>
            <div className="input-container">
              <label>Organisation name: </label>
              <input
                type="text"
                name="companyName"
                value={experience.companyName}
                onChange={e => setExperience ({...experience, companyName: e.target.value})}
              />
            </div>
            <div className="input-container">
              <label>Location: </label>
              <input
                type="text"
                name="location"
                value={experience.location}
                onChange={e => setExperience ({...experience, location: e.target.value})}
              />
            </div>
            <div className="input-container">
              <label>Start Year: </label>
              <input
                type="date"
                name="start"
                value={experience.start}
                onChange={e => setExperience ({...experience, start: e.target.value})}
              />
            </div>
            <div className="input-container">
              <label>End Year: </label>
              <input
                type="date"
                name="end"
                value={experience.end}
                onChange={e => setExperience ({...experience, end: e.target.value})}
              />
            </div>
            <div className="input-container">
              <label>Description: </label>
              <textarea
                type="text"
                name="description"
                onChange={e => setExperience ({...experience, description: e.target.value})}
                value={experience.description}
              />

            </div>

          <footer>
            <button onClick={() => handleSave()}>Save</button>
          </footer>
        </div>
      ) : (
        <div className="container">
          <header>
            <span> Professional Experience</span>
        
          </header>
          {experienceList &&
            experienceList.map((exp, index) => (
              <div key={index} className='profile'>
                {console.log(exp)}
                <div>{exp.designation} at {exp.companyName}</div>
                <div>{exp.location}</div>
                <div>{exp.start} - {exp.end}</div>
                <p>{exp.description}</p>
                <div className="button-block">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
            <button className="btn" onClick = {() =>{addExperience()}}>Add Experience</button>
        </div>
        
      )}
      
    </div>
  );
};

export default ProfessionalExperience;
