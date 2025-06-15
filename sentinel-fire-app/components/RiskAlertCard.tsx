import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

interface Props {
  message: string;
}

export default function RiskAlertCard({ message }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.alert,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: '600',
  },
});