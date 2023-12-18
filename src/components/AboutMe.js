import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveAboutMe} from '../reducers/aboutMeReducer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';

const AboutMe = ({edit, data}) => {
  const [editMode, setEditMode] = useState (edit);
  const [aboutMe, setAboutMe] = useState ("");
  const dispatch = useDispatch ();
  const aboutMeText = useSelector (state => state.aboutMe.aboutMe);
  const useEffect = (() => {
    setAboutMe(aboutMeText.aboutMe)
  },[])
  const validate =() =>{
    console.log(aboutMe)
    if(aboutMe === ""){
      return false
    }
    return true
  }

  const handleSave = () => {
    if(validate()){
    dispatch(saveAboutMe(aboutMe));
    setEditMode (false);
    }
    else{
      alert("Please Enter all the details to continue")
    }
  };

  return (
    <div>
      {editMode
        ? <div className="container">
            <header>AboutMe</header>
            <div className="input-container">
              <label>Tell us about yourself:</label>
              <textarea
              value={aboutMe}
                onChange={e => setAboutMe(e.target.value)}
                
              />
            </div>
            <footer>
              <button onClick={() => handleSave ()}>Save</button>
            </footer>
          </div>
        : <div className="container">
            <header>
              <span>AboutMe</span>
              <span onClick={() => setEditMode (true)}>
                <FontAwesomeIcon icon={faPen} />
              </span>
            </header>
            <p className="details-display profile">{aboutMe}</p>
          </div>}
    </div>
  );
};

export default AboutMe;
