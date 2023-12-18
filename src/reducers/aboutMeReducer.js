const SAVE_ABOUT_ME = 'SAVE_ABOUT_ME';



const aboutMeInitialState = {
  aboutMeText: '',
};

export const aboutMeReducer = (state = aboutMeInitialState, action) => {
  switch (action.type) {
    case SAVE_ABOUT_ME:
      return {
        ...state,
        aboutMeText: action.payload,
      };
    default:
      return state;
  }
};

export const saveAboutMe = aboutMeText => ({
  type: SAVE_ABOUT_ME,
  payload: aboutMeText,
});
