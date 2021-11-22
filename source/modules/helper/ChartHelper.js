import {getTodayDate, getDate} from 'utils/Utils';
import {getUsername} from 'common/Common';

export const getTodayReceivedTransactions = transactions => {
  var todayTransaction = [];
  for (let transaction in transactions) {
    const {
      amount,
      timestamp,
      fromAddress = undefined,
    } = transactions[transaction];
    if (getTodayDate() === getDate(timestamp)) {
      if (fromAddress !== getUsername()) {
        todayTransaction.push(amount * 1);
      }
    }
  }
  return todayTransaction;
};

export const getTodaySentTransactions = transactions => {
  var todayTransaction = [];
  for (let transaction in transactions) {
    const {amount, timestamp, toAddress} = transactions[transaction];
    if (getTodayDate() === getDate(timestamp)) {
      if (toAddress !== getUsername()) {
        todayTransaction.push(amount * 1);
      }
    }
  }
  return todayTransaction;
};
