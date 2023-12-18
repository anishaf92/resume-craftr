// skillReducer.js
const initialState = {
  skills: [],
};
export const RESET_SKILLS = 'RESET_SKILLS';

export const resetSkills= () => ({
  type: RESET_SKILLS,
});

export default function skillReducer (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_SKILL':
      return {
        ...state,
        skills: action.payload,
      };
      case 'RESET_SKILL': 
        return initialState;
    // Handle other actions if needed
    default:
      return state;
  }
}

export const saveSkill = skillData => ({
  type: 'SAVE_SKILL',
  payload: skillData,
});
