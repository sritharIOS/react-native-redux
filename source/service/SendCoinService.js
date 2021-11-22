'use strict';
import {runPostAPI} from './AxiosClient';
import {host} from '../../env.json';

export const sendCoinService = action => {
  const {payload} = action;
  const url = `${host}` + `transactions`;
  return runPostAPI(url, payload);
};
