// skillReducer.js
const initialState = {
    experience: [],
  };
  
  export default function experienceReducer (state = initialState, action) {
    switch (action.type) {
      case 'SAVE_EXPERIENCE':
        return {
          ...state,
          experience: action.payload,
        };
      // Handle other actions if needed
      default:
        return state;
    }
  }
  
  export const saveExperience = experienceData => ({
    type: 'SAVE_EXPERIENCE',
    payload: experienceData,
  });
  