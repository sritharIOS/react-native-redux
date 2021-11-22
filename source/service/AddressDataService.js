'use strict';
import {runGetAPI} from './AxiosClient';
import {host} from '../../env.json';

export const addressDataService = action => {
  const {username} = action;
  const url = `${host}addresses/${username}`;
  return runGetAPI(url);
};
