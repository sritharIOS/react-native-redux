import {
  FETCH_ADDRESS_DATA_FAILED,
  FETCH_ADDRESS_DATA_SUCCEEDED,
  CLEAR_ADDRESS_DATA,
  SET_USERNAME,
} from '../constants';

const initialState = {
  balance: 0,
  transactions: null,
  error: null,
  username: '',
};

const AddressDataReducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case FETCH_ADDRESS_DATA_SUCCEEDED:
      const {
        response: {data},
      } = action;
      if (data) {
        const {balance, transactions} = data;
        return {
          ...state,
          balance,
          transactions,
        };
      }
      return state;
    case FETCH_ADDRESS_DATA_FAILED:
      const {message} = action;
      return {
        ...state,
        error: message,
      };

    case CLEAR_ADDRESS_DATA:
      return {
        ...state,
        balance: 0,
        transactions: [],
        error: null,
      };

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
export default AddressDataReducer;
