const SAVE_PROFILE = 'SAVE_PROFILE';

export const saveProfile = profileData => ({
  type: SAVE_PROFILE,
  payload: profileData,
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
    default:
      return state;
  }
};
