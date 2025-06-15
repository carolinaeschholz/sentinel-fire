import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function MapLegend() {
  return (
    <View style={styles.container}>
      <View style={[styles.swatch, { backgroundColor: 'rgba(192, 57, 43, 0.4)' }]} />
      <Text style={styles.label}>High Risk Zone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  swatch: {
    width: 16,
    height: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.alert,
  },
  label: {
    color: colors.text,
    fontSize: 14,
  },
});