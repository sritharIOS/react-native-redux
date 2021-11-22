import React from 'react';
import {Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import colors from 'styles/colors';
import {commonstyles} from 'styles/CommonStyles';

const JCButton = ({buttonAction, disabled, title, animating, e2eID}) => {
  const showActivityIndicator = () => {
    if (animating === true) {
      return (
        <ActivityIndicator
          animating={animating}
          style={commonstyles.indicator}
          size="small"
          color="white"
        />
      );
    } else {
      return null;
    }
  };

  const buttonTitle = () => {
    if (animating === true) {
      return null;
    } else {
      return title;
    }
  };
  const onPressButton = () => {
    buttonAction();
  };
  return (
    <TouchableOpacity
      testID={e2eID}
      style={[
        commonstyles.button,
        {
          backgroundColor: disabled
            ? colors.secondaryButtonColor
            : colors.primaryButtonColor,
        },
      ]}
      onPress={onPressButton}
      disabled={disabled}>
      <Text style={{color: 'white'}}> {buttonTitle()}</Text>
      {showActivityIndicator()}
    </TouchableOpacity>
  );
};

export default JCButton;
