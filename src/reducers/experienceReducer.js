
const initialState = {
    experience: [],
  };
export const RESET_EXP = 'RESET_EXP';

export const resetExperience = () => ({
  type: RESET_EXP,
});
  export default function experienceReducer (state = initialState, action) {
    switch (action.type) {
      case 'SAVE_EXPERIENCE':
        return {
          ...state,
          experience: action.payload,
        };
        case 'RESET_EXP':
      return initialState;
    
      default:
        return state;
    }
  }
  
  export const saveExperience = experienceData => ({
    type: 'SAVE_EXPERIENCE',
    payload: experienceData,
  });
  