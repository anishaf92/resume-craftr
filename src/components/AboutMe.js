import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveAboutMe} from '../reducers/aboutMeReducer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';

const AboutMe = ({edit, data}) => {
  const [editMode, setEditMode] = useState (edit);
  const [aboutMe, setAboutMe] = useState ('');
  const dispatch = useDispatch ();
  const aboutMeText = useSelector (state => state.aboutMe.aboutMeText);
  useEffect (
    () => {
      console.log(aboutMeText)
      setAboutMe (aboutMeText);
    },
    [editMode]
  );

  const handleSave = () => {
    dispatch (saveAboutMe (aboutMe));
    setEditMode (false);
  };

  return (
    <div>
      {console.log(aboutMeText)}
      {editMode
        ? <div className="container">
            <header>AboutMe</header>
            <div className="input-container">
              <label>Tell us about yourself:</label>
              <textarea
                onChange={e => setAboutMe (e.target.value)}
                value={aboutMe}
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
            <p className="details-display profile">{aboutMe.aboutMeText}</p>
          </div>}
    </div>
  );
};

export default AboutMe;
