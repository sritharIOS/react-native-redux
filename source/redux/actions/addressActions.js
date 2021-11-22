import {
  FETCH_ADDRESS_DATA,
  CLEAR_ADDRESS_DATA,
  SET_USERNAME,
} from '../constants';

export const fetchAddressAction = username => {
  return {
    type: FETCH_ADDRESS_DATA,
    username,
  };
};

export const clearAddressDataAction = () => {
  return {
    type: CLEAR_ADDRESS_DATA,
  };
};
