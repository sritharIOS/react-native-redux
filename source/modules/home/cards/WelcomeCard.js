import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {getUsername} from 'common/Common';
import colors from 'styles/colors';
import {strings} from 'content/strings';

const WelcomeCard = ({signoutAction}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>{`${
        strings.home.welcome
      } ${getUsername()}`}</Text>
      <TouchableOpacity onPress={signoutAction}>
        <Text style={styles.singout}>{strings.home.signout}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
  },
  singout: {
    color: colors.primaryButtonColor,
    fontSize: 20,
  },
});

export default WelcomeCard;
