import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { saveSkill } from '../reducers/skillReducer';
import { saveAcademic } from '../reducers/academicReducer';
import { saveExperience } from '../reducers/experienceReducer';
import { saveProject } from '../reducers/projectReducer';

const Projects = ({ edit }) => {
  const [editMode, setEditMode] = useState(edit);
  const [projectList, setProjectList] = useState([]);
  const projectState = useSelector (state => state.projects.projects);
  const [project, setProject] = useState({
    title: '',
    url: '',
    skills: '',
    start: '',
    end: '',
    description: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();
  useEffect (
    () => {
       
    setProjectList(projectState);
    },
    [editMode]
  );
  const addProject = () => {
    setEditMode(true);
    setProject({
      title: '',
      url: '',
      skills: '',
      start: '',
      end: '',
      description: '',
    });
    setEditIndex(null);
  };

  const handleSave = () => {
    if (editIndex !== null) {

      const updatedProjects = [...projectList];
      updatedProjects[editIndex] = project;
      setProjectList(updatedProjects);
      setEditMode(false);
      setEditIndex(null);
      dispatch(saveProject(updatedProjects));
    } else {
      setProjectList([...projectState, project]);
      setEditMode(false);
      dispatch(saveProject([...projectState, project]));
    }
  };

  const handleEdit = (index) => {
    setProject(projectList[index]);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProject = [...projectList];
    updatedProject.splice(index, 1);
    setProjectList(updatedProject);
    setEditMode(false);
    setEditIndex(null);
  };
  const handleClose = () =>{
    setEditMode(false)
  }
 

  return (
    <div>
      {console.log(projectState)}
      {editMode ? (
        <div className="container">
          <header>
          <span>Projects</span>
              <span onClick={() => handleClose ()}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </header>
            <div className="input-container">
              <label>Title: </label>
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={e => setProject ({...project, title: e.target.value}) }
              />
            </div>
            <div className="input-container">
              <label>URL: </label>
              <input
                type="text"
                name="url"
                value={project.url}
                onChange={e => setProject ({...project, url: e.target.value}) }
              />
            </div>
            <div className="input-container">
              <label>Technologies Used: </label>
              <input
                type="text"
                name="skills"
                value={project.skills}
                onChange={e => setProject ({...project, skills: e.target.value}) }
              />
            </div>
            <div className="input-container">
              <label>Start Date: </label>
              <input
                type="date"
                name="start"
                value={project.start}
                onChange={e => setProject ({...project, start: e.target.value}) }
              />
            </div>
            <div className="input-container">
              <label>End Year: </label>
              <input
                type="date"
                name="end"
                value={project.end}
                onChange={e => setProject ({...project, end: e.target.value}) }
              />
            </div>
            <div className="input-container">
              <label>Description: </label>
              <textarea
                type="text"
                name="description"
                value={project.description}
                onChange={e => setProject ({...project, project: e.target.value}) }
                
              />

            </div>

          <footer>
            <button onClick={() => handleSave()}>Save</button>
          </footer>
        </div>
      ) : (
        <div className="container">
          <header>
            <span>Projects</span>
        
          </header>
          {projectList &&
            projectList.map((project, index) => (
              <div key={index} className='profile'>
                {console.log(project)}
                <div className="heading">{project.title}</div>
                <div>URL: {project.url}</div>
                <div>Skills: {project.skills}</div>

                <p>{project.description}</p>
                <div className="button-block">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
            <button className="btn" onClick = {() =>{addProject()}}>Add Project</button>
        </div>
        
      )}
      
    </div>
  );
};

export default Projects;
