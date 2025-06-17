import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MapLegend() {
  return (
    <View style={styles.legendContainer}>
      <View style={styles.legendItem}>
        <View style={[styles.circle, { backgroundColor: '#C0392B' }]} />
        <Text style={styles.text}>Alto</Text>
      </View>
      <View style={styles.legendItem}>
        <View style={[styles.circle, { backgroundColor: '#E67E22' }]} />
        <Text style={styles.text}>Médio</Text>
      </View>
      <View style={styles.legendItem}>
        <View style={[styles.circle, { backgroundColor: '#F1C40F' }]} />
        <Text style={styles.text}>Baixo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});
