import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveProfile} from '../reducers/profileReducer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import '../css/profile.css';

const Profile = ({edit, data}) => {
  const [editMode, setEditMode] = useState (edit);
  const profile = useSelector (state => state.profile);
  const [profileData, setProfileData] = useState ({
    fullName: '',
    designation: '',
    email: '',
    phone: '',
    location: '',
    website: '',
  });

  const dispatch = useDispatch ();
  useEffect (
    () => {
      
      setProfileData (profile);
    },
    [editMode]
  );
  const validate =() =>{
    
    if(profileData.fullName === "" && profileData.designation === "" && profileData.email === "" && profileData.phone === ""){
      return false
    }
    return true
  }
  
  const handleInputChange = e => {
    const {name, value} = e.target;
    setProfileData (prevData => ({...prevData, [name]: value}));
  };
  const handleSave = () => {
    if(validate()){
    console.log (profileData);
    dispatch (saveProfile (profileData));
    setEditMode (false);
    }
    else{
      alert("Please enter all the mandatory fields")
    }
  };
  return (
    <div>
      {editMode
        ? <div className="container">
            <header>Profile</header>
            <div className="input-container">
              <label>Full Name: </label>
              <input
                type="text"
                name="fullName"
                value={profileData.fullName}
                onChange={e => handleInputChange (e)}
              />
            </div>
            <div className="input-container">
              <label>Designation: </label>
              <input
                type="text"
                name="designation"
                value={profileData.designation}
                onChange={e => handleInputChange (e)}
              />
            </div>
            <div className="input-container">
              <label>Email: </label>
              <input
                type="text"
                name="email"
                value={profileData.email}
                onChange={e => handleInputChange (e)}
              />
            </div>
            <div className="input-container">
              <label>Phone: </label>
              <input
                type="number"
                name="phone"
                value={profileData.phone}
                onChange={e => handleInputChange (e)}
              />
            </div>
            <div className="input-container">
              <label>Location: </label>
              <input
                type="text"
                name="location"
                value={profileData.location}
                onChange={e => handleInputChange (e)}
              />
            </div>
            <div className="input-container">
              <label>Website: </label>
              <input
                type="text"
                name="website"
                value={profileData.website}
                onChange={e => handleInputChange (e)}
              />
            </div>
            <footer>
              <button onClick={() => handleSave ()}>Save</button>
            </footer>
          </div>
        : <div className="container">
            <header>
              <span>Profile</span>
              <span onClick={() => setEditMode (true)}>
                <FontAwesomeIcon icon={faPen} />
              </span>
            </header>
            <div className="profile">
              <span className="heading">{profile.fullName}</span>
              <span className="designation">
                {profile.designation}
              </span>
              <span className="email">{profile.email}</span>
              <span className="phone">{profile.phone}</span>
            </div>

          </div>}
    </div>
  );
};

export default Profile;
