import React from 'react';
import {TextInput} from 'react-native';

import {commonstyles} from 'styles/CommonStyles';

const JCTextInput = ({
  onChangeText,
  value,
  placeHolder,
  keyboardType = 'default',
  e2eID,
}) => {
  return (
    <TextInput
      testID={e2eID}
      style={commonstyles.textInput}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeHolder}
      placeholderTextColor={'lightgray'}
      keyboardType={keyboardType}
    />
  );
};

export default JCTextInput;
