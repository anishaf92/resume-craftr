// skillReducer.js
const initialState = {
    projects: [],
  };
  
  export default function experienceReducer (state = initialState, action) {
    switch (action.type) {
      case 'SAVE_PROJECT':
        return {
          ...state,
          projects: action.payload,
        };
      // Handle other actions if needed
      default:
        return state;
    }
  }
  
  export const saveProject = projectData => ({
    type: 'SAVE_PROJECT',
    payload: projectData,
  });
  