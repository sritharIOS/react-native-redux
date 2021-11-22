'use strict';
import {fetchAddressDataSagas} from './FetchAddressDataSaga';
import { sendCoinSagas } from './SendCoinSaga';

export default [
  fetchAddressDataSagas,
  sendCoinSagas,
];
