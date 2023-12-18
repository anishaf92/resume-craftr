// skillReducer.js
const initialState = {
    projects: [],
  };
  export const RESET_PROJECT = 'RESET_PROJECT';

export const resetProject= () => ({
  type: RESET_PROJECT,
});
  export default function projectReducer (state = initialState, action) {
    switch (action.type) {
      case 'SAVE_PROJECT':
        return {
          ...state,
          projects : action.payload,
        };
        case 'RESET_PROJECT':
        return initialState;
        
      default:
        return state;
    }
  }
  
  export const saveProject = projectData => ({
    type: 'SAVE_PROJECT',
    payload: projectData,
  });
  