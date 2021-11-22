'use strict';
import {call, put, takeEvery} from 'redux-saga/effects';
import {addressDataService} from '../../service/AddressDataService';
import {
  FETCH_ADDRESS_DATA_SUCCEEDED,
  FETCH_ADDRESS_DATA,
  FETCH_ADDRESS_DATA_FAILED,
} from '../constants';
import {ErrorSaga} from './ErrorSaga';

function* fetchAddressData(action) {
  try {
    const response = yield call(addressDataService, action);
    yield put({type: FETCH_ADDRESS_DATA_SUCCEEDED, response});
  } catch (e) {
    let errorSaga = new ErrorSaga(e, FETCH_ADDRESS_DATA_FAILED);
    yield put(errorSaga.sendError);
  }
}

export function* fetchAddressDataSagas() {
  yield takeEvery(FETCH_ADDRESS_DATA, fetchAddressData);
}
