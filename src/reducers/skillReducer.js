// skillReducer.js
const initialState = {
  skills: [],
};

export default function skillReducer (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_SKILL':
      return {
        ...state,
        skills: action.payload,
      };
    // Handle other actions if needed
    default:
      return state;
  }
}

export const saveSkill = skillData => ({
  type: 'SAVE_SKILL',
  payload: skillData,
});
