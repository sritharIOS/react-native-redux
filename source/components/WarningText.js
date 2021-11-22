import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WarningText = ({description, e2eID}) => {
  return (
    <View style={styles.container} testID={e2eID}>
      <Text testID="error-text" style={styles.errorDescriptionText}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  errorDescriptionText: {
    fontSize: 14,
    color: 'red',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default WarningText;
