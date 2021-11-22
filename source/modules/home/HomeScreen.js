import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';

import WelcomeCard from './cards/WelcomeCard';
import BalanceCard from './cards/BalanceCard';
import SendCoinCard from './cards/SendCoinCard';
import TransactionChartCard from './cards/TransactionChartCard';
import colors from 'styles/colors';
import {clearAllDataAction} from '../../redux/actions';

const HomeScreen = props => {
  const {navigation, clearAllDataAction} = props;

  const onPressLogout = () => {
    clearAllDataAction();
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{width: '100%'}}
        contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.subContainer}>
          <WelcomeCard signoutAction={onPressLogout} />
          <BalanceCard />
          <SendCoinCard />
          <TransactionChartCard />
        </View>
      </ScrollView>
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
  },
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  clearAllDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
