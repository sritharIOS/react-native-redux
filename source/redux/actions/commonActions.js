import {CLEAR_DATA, SET_USERNAME} from '../constants';

export const clearAllDataAction = () => {
  return {
    type: CLEAR_DATA,
  };
};

export const setUsernameAction = username => {
  return {
    type: SET_USERNAME,
    username,
  };
};
