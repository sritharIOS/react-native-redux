import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {LineChart, YAxis, Grid} from 'react-native-svg-charts';

import colors from 'styles/colors';
import {ChartType} from 'common/Constants';
import {
  getTodayReceivedTransactions,
  getTodaySentTransactions,
} from 'helpers/ChartHelper';
import {strings} from 'content/strings';

const TransactionChartCard = props => {
  const {transactions} = props;
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const contentInset = {top: 20, bottom: 20};

  useEffect(() => {
    loadChart(selectedIndex);
  }, [transactions]);

  const handleIndexChange = index => {
    setSelectedIndex(index);
    loadChart(index);
  };

  const loadChart = index => {
    switch (index) {
      case ChartType.RECEIVED:
        setData(getTodayReceivedTransactions(transactions));
        break;

      case ChartType.SENT:
        setData(getTodaySentTransactions(transactions));
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <SegmentedControlTab
        values={[strings.home.received, strings.home.sent]}
        selectedIndex={selectedIndex}
        onTabPress={handleIndexChange}
      />
      <View style={styles.subContainer}>
        <YAxis
          data={data}
          contentInset={contentInset}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          numberOfTicks={5}
          formatLabel={value => `${value}`}
        />
        <LineChart
          style={{flex: 1, marginLeft: 16}}
          data={data}
          svg={{stroke: 'rgb(134, 65, 244)'}}
          contentInset={contentInset}>
          <Grid />
        </LineChart>
      </View>
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
    flexDirection: 'column',
  },

  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 200,
  },
});

const mapStateToProps = state => {
  const {
    addressData: {transactions},
  } = state;
  return {
    transactions,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionChartCard);
