import {combineReducers} from 'redux';
import AddressDataReducer from './AddressDataReducer';
import SendCoinReducer from './SendCoinReducer';
import CommonReducer from './CommonReducer';

const allReducer = combineReducers({
  addressData: AddressDataReducer,
  sendCoin: SendCoinReducer,
  common: CommonReducer,
});
export default (state, action) =>
  allReducer(action.type === 'CLEAR_DATA' ? {} : state, action);
