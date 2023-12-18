const SAVE_PROFILE = 'SAVE_PROFILE';

export const saveProfile = profileData => ({
  type: SAVE_PROFILE,
  payload: profileData,
});
export const RESET_PROFILE = 'RESET_PROFILE';

export const resetProfile = () => ({
  type: RESET_PROFILE,
});
const profileInitialState = {
  fullName: '',
  designation: '',
  email: '',
  phone: '',
  location: '',
  website: '',
};

export const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case SAVE_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
      case 'RESET_PROFILE':
      return profileInitialState;
    default:
      return state;
  }
};
