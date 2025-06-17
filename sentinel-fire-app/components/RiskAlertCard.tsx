import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

type RiskLevel = 'sem_risco' | 'baixo' | 'medio' | 'alto';

type Props = {
  message: string;
  level?: RiskLevel;
};

const getColorByLevel = (level: RiskLevel) => {
  switch (level) {
    case 'alto':
      return { bg: '#FDECEA', color: '#C0392B' };
    case 'medio':
      return { bg: '#FFF4E5', color: '#E67E22' };
    case 'baixo':
      return { bg: '#FEF9E7', color: '#F1C40F' };
    case 'sem_risco':
    default:
      return { bg: '#F2F4F4', color: '#7F8C8D' };
  }
};

export default function RiskAlertCard({ message, level = 'sem_risco' }: Props) {
  const { bg, color } = getColorByLevel(level);

  return (
    <View style={[styles.alertBox, { backgroundColor: bg }]}>
      <View style={styles.alertHeader}>
        <Ionicons name="alert-circle-outline" size={20} color={color} />
        <Text style={[styles.alertText, { color }]}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alertBox: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertText: {
    fontSize: 14,
    marginLeft: 6,
    flex: 1,
    flexWrap: 'wrap',
  },
});

