import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import Color from '../config/Colors';

const AppTextInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="titel title" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
});

export default AppTextInput;
