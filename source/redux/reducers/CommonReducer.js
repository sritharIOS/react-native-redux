import {SET_USERNAME, CLEAR_DATA} from '../constants';

const initialState = {
  username: '',
};

const CommonReducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case CLEAR_DATA:
      state = {};
      return state;

    case SET_USERNAME:
      const {username} = action;
      return {
        ...state,
        username: username,
      };
    default:
      return state;
  }
};
export default CommonReducer;
