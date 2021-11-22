import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import colors from 'styles/colors';

const BalanceCard = props => {
  const {balance} = props;
  return (
    <View style={styles.container}>
      <Text>I have</Text>
      <Text style={{fontSize: 20}}>{balance}</Text>
      <Text>coins</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryCardBackgroundColor,
    borderRadius: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
});

const mapStateToProps = state => {
  const {
    addressData: {balance},
  } = state;
  return {
    balance,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BalanceCard);
