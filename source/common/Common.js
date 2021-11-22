import store from '../redux/store/configureStore';

export const getUsername = () => {
  const {common} = store.getState();
  if (common === null || common === undefined) {
    return '';
  }
  const {username} = common;
  return username;
};

export const getBalance = () => {
  const {addressData} = store.getState();
  if (addressData === null || addressData === undefined) {
    return 0;
  }
  const {balance} = addressData;
  return balance * 1;
};

export const getBalanceErrorDescription = () => {
  return `${getUsername()} only has ${getBalance()} jobcoins`;
};
