import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { saveSkill } from '../reducers/skillReducer';
import { saveAcademic } from '../reducers/academicReducer';

const Academics = ({ edit }) => {
  const [editMode, setEditMode] = useState(edit);
  const [academicsList, setAcademicsList] = useState([]);
  const academicState = useSelector (state => state.academics.academics);
  const [academics, setAcademics] = useState({
    degree: '',
    schoolname: '',
    specialization: '',
    start: '',
    end: '',
    description: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();
  useEffect (
    () => {
    setAcademicsList(academicState);
    
    },
    [editMode]
  );
  const validate =() =>{
    
    if(academics.degree === "" || academics.schoolname === "" || academics.specialization === ""){
      return false
    }
    return true
  }
  const addAcademic = () => {
    setEditMode(true);
    setAcademics({
        degree: '',
        schoolname: '',
        specialization: '',
        start: '',
        end: '',
        description: '',
    });
    setEditIndex(null);
  };

  const handleSave = () => {
    if(validate()){
    if (editIndex !== null) {
      const updatedAcademics = [...academicsList];
      updatedAcademics[editIndex] = academics;
      setAcademicsList(updatedAcademics);
      setEditMode(false);
      setEditIndex(null);
      dispatch(saveAcademic(updatedAcademics));
    } else {
        setAcademicsList([...academicsList, academics]);
      setEditMode(false);
      dispatch(saveAcademic([...academicsList, academics]));
    }
}
else{
    alert("Please enter all the mandatory details")
}
  };

  const handleEdit = (index) => {
    setAcademics(academicsList[index]);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedAcademics = [...academicsList];
    updatedAcademics.splice(index, 1);
    setAcademicsList(updatedAcademics);
    setEditMode(false);
    setEditIndex(null);
  };
  const handleClose = () =>{
    setEditMode(false)
  }
  

  return (
    <div>
        {console.log(academicState)}
      {editMode ? (
        <div className="container">
          <header>
          <span>Academics</span>
              <span onClick={() => handleClose ()}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </header>
            <div className="input-container">
              <label>Degree/course:* </label>
              <input
                type="text"
                name="degree"
                value={academics.degree}
                onChange={e => setAcademics ({...academics, degree: e.target.value})}
              />
            </div>
            <div className="input-container">
              <label>School/ College name:* </label>
              <input
                type="text"
                name="schoolname"
                value={academics.schoolname}
                onChange={e => setAcademics ({...academics, schoolname: e.target.value})}
              />
            </div>
            <div className="input-container">
              <label>Specialization:* </label>
              <input
                type="text"
                name="specialization"
                value={academics.specialization}
                onChange={e => setAcademics ({...academics, specialization: e.target.value})}
              />
            </div>
            <div className="input-container">
              <label>Start Year: </label>
              <input
                type="date"
                name="start"
                value={academics.start}
                onChange={e => setAcademics ({...academics, start: e.target.value})}
              />
            </div>
            <div className="input-container">
              <label>End Year: </label>
              <input
                type="date"
                name="end"
                value={academics.end}
                onChange={e => setAcademics ({...academics, end: e.target.value})}
              />
            </div>
            <div className="input-container">
              <label>Description: </label>
              <textarea
                type="text"
                name="description"
                onChange={e => setAcademics ({...academics, description: e.target.value})}
                value={academics.description}
              />

            </div>

          <footer>
            <button onClick={() => handleSave()}>Save</button>
          </footer>
        </div>
      ) : (
        <div className="container">
          <header>
            <span>Academics</span>
        
          </header>
          {academicsList &&
            academicsList.map((academic, index) => (
              <div key={index} className="profile">
                <div className="heading">{academic.degree} ({academic.specialization})</div>
                <div>{academic.schoolname}</div>
                <div>{academic.start} To {academic.end}</div>
                <p>{academic.description}</p>
                <div className="button-block">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
            <button className="btn" onClick = {() =>{addAcademic()}}>Add More</button>
        </div>
        
      )}
      
    </div>
  );
};

export default Academics;
