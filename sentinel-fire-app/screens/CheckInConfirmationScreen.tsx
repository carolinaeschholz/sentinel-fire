import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

import colors from '../constants/colors';
import messages from '../constants/messages';
import { routes } from '../constants/routes';
import RiskAlertCard from '../components/RiskAlertCard';
import CheckInButton from '../components/CheckInButton';
import { CheckInContext } from '../context/CheckInContext';

const getAgeGroupLabel = (group: 'child' | 'adult' | 'elderly') => {
  switch (group) {
    case 'child':
      return 'Criança';
    case 'adult':
      return 'Adulto';
    case 'elderly':
      return 'Idoso';
    default:
      return '';
  }
};

export default function CheckInConfirmationScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data } = useContext(CheckInContext);

  if (!data) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.message}>Nenhum dado de check-in encontrado.</Text>
      </SafeAreaView>
    );
  }

  const handleConfirm = () => {
    Alert.alert('Check-In Enviado', messages.successCheckIn);
    navigation.navigate(routes.HOME);
  };

  return (
    <SafeAreaView style={styles.container}>
      <RiskAlertCard message="Confirme seu check-in e envie sua localização com os dados do grupo." />

      <Text style={styles.title}>Confirme seu Check-In</Text>

      <Text style={styles.label}>Localização:</Text>
      <Text style={styles.text}>
        Latitude: {data.location.latitude.toFixed(4)}
        {'\n'}
        Longitude: {data.location.longitude.toFixed(4)}
      </Text>

      <Text style={styles.label}>Pessoas com você:</Text>
      {data.companions.length === 0 ? (
        <Text style={styles.text}>{messages.noCompanions}</Text>
      ) : (
        data.companions.map((person, i) => (
          <Text key={i} style={styles.text}>
            - {person.name} ({getAgeGroupLabel(person.ageGroup)})
          </Text>
        ))
      )}

      <CheckInButton title="Confirmar e Enviar" onPress={handleConfirm} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: colors.primary,
    marginTop: 12,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 6,
  },
  message: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});

