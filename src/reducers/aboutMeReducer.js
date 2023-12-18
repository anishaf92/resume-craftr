const SAVE_ABOUT_ME = 'SAVE_ABOUT_ME';

export const RESET_ABOUTME = 'RESET_ABOUTME';

export const resetAboutMe = () => ({
  type: RESET_ABOUTME,
});

const aboutMeInitialState = {
  aboutMeText: '',
};

export const aboutMeReducer = (state = aboutMeInitialState, action) => {
  switch (action.type) {
    case SAVE_ABOUT_ME:
      return {
        ...state,
        ...action.payload,
      };
      case 'RESET_ABOUTME':
      return aboutMeInitialState;
    default:
      return state;
  }
};

export const saveAboutMe = aboutMeText => ({
  type: SAVE_ABOUT_ME,
  payload: aboutMeText,
});
