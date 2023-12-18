const initialState = {
  academics: []
};

export default function academicReducer (state = initialState, action) {
  console.log ('Current State:', state);
  console.log ('Action:', action);
  switch (action.type) {
    case 'SAVE_ACADEMIC':
      console.log ('state:', state);
        return {
          ...state,
          academics:action.payload,
        };
      
    // Handle other actions if needed
    default:
      return state;
  }
}

export const saveAcademic = academicData => ({
  type: 'SAVE_ACADEMIC',
  payload: academicData,
});
