import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CheckInContext } from '../context/CheckInContext';
import colors from '../constants/colors';

// Tela de confirmação do check-in
export default function CheckInConfirmationScreen() {
  const navigation = useNavigation(); // Hook para navegação entre telas
  const { data } = useContext(CheckInContext); // Obtém os dados do check-in do contexto

  // Se não houver dados de check-in, exibe uma mensagem
  if (!data) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No check-in data found.</Text>
      </View>
    );
  }

  // Função chamada ao confirmar o check-in
  const handleConfirm = () => {
    // Aqui você pode integrar com o checkInService futuramente
    Alert.alert('Check-In Enviado', 'Seus dados foram registrados com sucesso.');
    navigation.navigate('Home'); // Volta para a tela inicial
  };

  // Renderiza os dados do check-in para confirmação
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Your Check-In</Text>

      <Text style={styles.label}>Location:</Text>
      <Text style={styles.text}>
        Latitude: {data.location.latitude.toFixed(4)}
        {'\n'}
        Longitude: {data.location.longitude.toFixed(4)}
      </Text>

      <Text style={styles.label}>People with you:</Text>
      {data.companions.length === 0 ? (
        <Text style={styles.text}>No one added.</Text>
      ) : (
        data.companions.map((person, i) => (
          <Text key={i} style={styles.text}>
            - {person.name} ({person.ageGroup})
          </Text>
        ))
      )}

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm & Send</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: 'center',
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
  button: {
    backgroundColor: colors.button,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 32,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: '600',
  },
});