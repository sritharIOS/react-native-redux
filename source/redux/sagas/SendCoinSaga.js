'use strict';
import {call, put, takeEvery} from 'redux-saga/effects';

import {sendCoinService} from '../../service/SendCoinService';
import {SEND_COIN_SUCCEEDED, SEND_COIN, SEND_COIN_FAILED} from '../constants';
import {ErrorSaga} from './ErrorSaga';

function* sendCoinSaga(action) {
  try {
    const response = yield call(sendCoinService, action);
    yield put({type: SEND_COIN_SUCCEEDED, response});
  } catch (e) {
    let errorSaga = new ErrorSaga(e, SEND_COIN_FAILED);
    yield put(errorSaga.sendError);
  }
}

export function* sendCoinSagas() {
  yield takeEvery(SEND_COIN, sendCoinSaga);
}
