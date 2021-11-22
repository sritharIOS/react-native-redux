'use strict';
import axios from 'axios';

const setInterceptors = (deviceToken = null) => {
  axios.defaults.timeout = 10000;
  axios.defaults.timeoutErrorMessage = 'This request has timed out.';
  const headerObj = {
    'Content-Type': 'application/json;charset=utf-8',
  };
  return {headers: headerObj};
};

export const runPostAPI = (url, params) => {
  const headers = setInterceptors();
  return axios.post(url, params, headers);
};

export const runGetAPI = url => {
  const headers = setInterceptors();
  return axios.get(url, headers);
};
