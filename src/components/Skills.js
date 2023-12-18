import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { saveSkill } from '../reducers/skillReducer';
import StarRating from './StarRating';

const Skills = ({ edit }) => {
 
  const [editMode, setEditMode] = useState(edit);
  const [skillsList, setSkillsList] = useState([]);
  const [skill, setSkill] = useState({
    skillname: '',
    rating: '',
  });
  const skillState = useSelector (state => state.skills.skills);
  const [editIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();
  useEffect (
    () => {  
      console.log(skillState)
    setSkillsList(skillState);
    },
    [editMode]
  );
  const addSkill = () => {
    setEditMode(true);
    setSkill({
      skillname: '',
      rating: '',
    });
    setEditIndex(null);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedSkills = [...skillState];
      updatedSkills[editIndex] = skill;
      setSkillsList(updatedSkills);
      setEditMode(false);
      setEditIndex(null);
      dispatch(saveSkill(updatedSkills));
    } else {

      setSkillsList([...skillState, skill]);
      setEditMode(false);
      dispatch(saveSkill([...skillState, skill]));
    }
  };

  const handleEdit = (index) => {
    setSkill(skillsList[index]);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedSkills = [...skillsList];
    updatedSkills.splice(index, 1);
    setSkillsList(updatedSkills);
    setEditMode(false);
    setEditIndex(null);
    dispatch(saveSkill(skillsList));
  };

  return (
    <div>
      {console.log(skillState)}
      {editMode ? (
        <div className="container">
          <header>Skills</header>
          <div className="input-container">
            <label>Skill </label>
            <input
              onChange={(e) =>
                setSkill({ ...skill, skillname: e.target.value })
              }
              value={skill.skillname}
            />
          </div>
          <div className="input-container">
            <label>Rating (1 to 5) </label>
            <input
              type="number"
              max={5}
              min={1}
              onChange={(e) => setSkill({ ...skill, rating: e.target.value })}
              value={skill.rating}
            />
          </div>
          <footer>
            <button onClick={() => handleSave()}>Save</button>
          </footer>
        </div>
      ) : (
        <div className="container">
          <header>
            <span>Skills</span>
            <span onClick={() => addSkill()}>
              <FontAwesomeIcon icon={faPen} />
            </span>
          </header>
          {skillState &&
            skillState.map((skill, index) => (
              <div key={index} className="profile">
                <div className="skills">
                <div>{skill.skillname}</div>
                <StarRating rating={skill.rating} />
                </div>

                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ))}
            <button className="btn" onClick = {() =>{addSkill()}}>Add Skill</button>
        </div>
        
      )}
      
    </div>
  );
};

export default Skills;
