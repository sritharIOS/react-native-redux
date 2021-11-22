import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {connect} from 'react-redux';

import {
  sendCoinAction,
  fetchAddressAction,
  clearSendCoinAction,
} from '../../../redux/actions';
import colors from 'styles/colors';
import JCButton from 'components/JCButton';
import JCTextInput from 'components/JCTextInput';
import WarningText from 'components/WarningText';
import {
  getUsername,
  getBalance,
  getBalanceErrorDescription,
} from 'common/Common';
import {strings} from 'content/strings';

const SendCoinCard = props => {
  const [sendTo, setSendTo] = useState('');
  const [coin, setCoin] = useState('');
  const [errorDescription, setErrorDescription] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [showError, setShowError] = useState(false);
  const [animating, setAnimating] = useState(false);

  const {
    sendCoinAction,
    fetchAddressAction,
    clearSendCoinAction,
    error,
    response,
  } = props;

  useEffect(() => {
    if (sendTo.length === 0 || coin.length === 0) {
      setDisabled(true);
      return;
    }
    if (getBalance() < coin * 1) {
      setDisabled(true);
      setShowError(true);
      setErrorDescription(getBalanceErrorDescription());
      return;
    }
    setShowError(false);
    setDisabled(false);
  }, [sendTo, coin]);

  useEffect(() => {
    if (response === null || response === undefined) {
      return;
    }
    fetchAddressAction(getUsername());
    setAnimating(false);
  }, [response]);

  useEffect(() => {
    if (error === undefined || error === null) {
      setShowError(false);
      return;
    }
    setAnimating(false);
    setShowError(true);
    setErrorDescription(error);
  }, [error]);

  const onSendAddressEnter = text => {
    setSendTo(text);
  };

  const onJobCoinsEntered = text => {
    setCoin(text);
  };

  const onPressSend = () => {
    Keyboard.dismiss();
    clearSendCoinAction();
    setAnimating(true);
    sendCoinAction({
      fromAddress: getUsername(),
      toAddress: sendTo,
      amount: coin,
    });
  };

  return (
    <View style={styles.container}>
      <JCTextInput
        onChangeText={onSendAddressEnter}
        value={sendTo}
        placeHolder={strings.home.addressPlaceholder}
      />
      <JCTextInput
        onChangeText={onJobCoinsEntered}
        value={coin}
        placeHolder={strings.home.coinPlaceholder}
        keyboardType="numeric"
      />
      {showError && <WarningText description={errorDescription} />}
      <JCButton
        title={strings.home.sendTitle}
        buttonAction={onPressSend}
        disabled={disabled}
        animating={animating}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primaryCardBackgroundColor,
    borderRadius: 20,
    marginTop: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
});

const mapStateToProps = state => {
  const {
    sendCoin: {error, response},
  } = state;
  return {
    response,
    error,
  };
};

const mapDispatchToProps = {
  sendCoinAction,
  fetchAddressAction,
  clearSendCoinAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SendCoinCard);
