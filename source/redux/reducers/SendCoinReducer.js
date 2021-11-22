import {
    SEND_COIN_FAILED,
    SEND_COIN_SUCCEEDED,
    CLEAR_SEND_COIN,
  } from '../constants';

  const initialState = {
    response: null,
    error: null,
  };

  const SendCoinReducer = (state = initialState, action) => {
    const {type} = action;

    switch (type) {
      case SEND_COIN_SUCCEEDED:
        const {
          response: {data},
        } = action;
        if (data) {
           return {
            ...state,
           response: data,
          };
        }
        return state;
      case SEND_COIN_FAILED:
        const {message} = action;
        return {
          ...state,
          error: message,
        };
  
      case CLEAR_SEND_COIN:
        return {
          ...state,
          response: null,
    error: null,
        };
  
      default:
        return state;
    }
  };
  export default SendCoinReducer;
  