import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import Routes from 'navigators/Routes';
import {fetchAddressAction, setUsernameAction} from '../../redux/actions';
import colors from 'styles/colors';
import JCButton from 'components/JCButton';
import JCTextInput from 'components/JCTextInput';
import {strings} from 'content/strings';

const SigninScreen = props => {
  const [username, setUsername] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [animating, setAnimating] = useState(false);
  const {
    navigation,
    fetchAddressAction,
    setUsernameAction,
    transactions,
    error,
  } = props;

  useEffect(() => {
    if (username.length === 0) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [username]);

  useEffect(() => {
    if (transactions === undefined || transactions === null) {
      return;
    }
    navigation.navigate(Routes.HOME_SCREEN);
    setAnimating(false);
  }, [transactions]);

  useEffect(() => {
    if (error === undefined || error === null) {
      return;
    }
    setAnimating(false);
  }, [error]);

  const onUsernameEntered = text => {
    setUsername(text);
  };

  const onPressLogin = () => {
    setUsernameAction(username);
    fetchAddressAction(username);
    setAnimating(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View testID="login_page" style={styles.subContainer}>
        <Text testID="welcome_text" style={{fontSize: 20, marginTop: 20}}>
          {strings.signin.title}
        </Text>
        <JCTextInput
          e2eID="username_text"
          onChangeText={onUsernameEntered}
          value={username}
          placeHolder={strings.signin.placeholder}
        />
        <JCButton
          e2eID="login_button"
          title={strings.signin.buttonTitle}
          buttonAction={onPressLogin}
          disabled={disabled}
          animating={animating}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primaryBackgroundColor,
  },

  subContainer: {
    width: '90%',
    height: 200,
    alignItems: 'center',
    backgroundColor: colors.primaryCardBackgroundColor,
    borderRadius: 20,
    marginTop: 100,
  },
});

const mapStateToProps = state => {
  const {
    addressData: {transactions, error},
  } = state;
  return {
    transactions,
    error,
  };
};

const mapDispatchToProps = {
  fetchAddressAction,
  setUsernameAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
