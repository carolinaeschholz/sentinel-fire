import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import colors from '../constants/colors';

export default function HomeScreen() {
  // Hook para navegação entre telas
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Título de alerta */}
      <Text style={styles.title}>🔥 Fire Risk Alert</Text>

      {/* Mensagem de alerta sobre risco de incêndio */}
      <Text style={styles.alertText}>
        High fire risk detected in your area. Stay alert and be ready to evacuate if necessary.
      </Text>

      {/* Botão para acessar o check-in comunitário */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CheckIn')}
      >
        <Text style={styles.buttonText}>Community Check-In</Text>
      </TouchableOpacity>

      {/* Botão para visualizar o mapa de risco */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RiskMap')}
      >
        <Text style={styles.buttonText}>View Risk Map</Text>
      </TouchableOpacity>

      {/* Botão para acessar rotas de evacuação */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Evacuation')}
      >
        <Text style={styles.buttonText}>Evacuation Routes</Text>
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
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.alert,
    marginBottom: 12,
    textAlign: 'center',
  },
  alertText: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: '600',
  },
});
