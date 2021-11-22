import {StyleSheet} from 'react-native';

import colors from './colors';

const commonstyles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 50,
    backgroundColor: colors.primaryButtonColor,
    marginTop: 30,
    borderRadius: 10,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 50,
    backgroundColor: colors.primaryButtonColor,
    marginTop: 30,
    borderRadius: 10,
  },
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {commonstyles};
