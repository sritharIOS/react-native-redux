import {SEND_COIN, CLEAR_SEND_COIN} from '../constants';

export const sendCoinAction = payload => {
  return {
    type: SEND_COIN,
    payload,
  };
};

export const clearSendCoinAction = () => {
  return {
    type: CLEAR_SEND_COIN,
  };
};
