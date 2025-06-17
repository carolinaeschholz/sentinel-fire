import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import colors from '../constants/colors';
import { useRiskContext } from '../context/RiskContext';
import RiskAlertCard from '../components/RiskAlertCard';
import { RootStackParamList } from '../navigation/RootNavigator';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { riskLevel, setRiskLevel } = useRiskContext();

  // ⚠️ TESTE TEMPORÁRIO: força o nível de risco para mostrar botão de evacuação
  useEffect(() => {
    setRiskLevel('alto'); // ou 'medio'
  }, []);

  const getAlertMessage = () => {
    switch (riskLevel) {
      case 'alto':
        return 'Alto risco de incêndio. Consulte rotas de evacuação.';
      case 'medio':
        return 'Risco moderado. Recomendamos revisar rotas.';
      case 'baixo':
        return 'Baixo risco. Fique atento a atualizações.';
      case 'sem_risco':
      default:
        return 'Nenhum risco detectado no momento.';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <RiskAlertCard message={getAlertMessage()} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CheckIn')}
      >
        <Ionicons
          name="checkmark-circle-outline"
          size={20}
          color={colors.primary}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Check-In Comunitário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RiskMap')}
      >
        <Ionicons
          name="map-outline"
          size={20}
          color={colors.primary}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Ver Mapa de Risco</Text>
      </TouchableOpacity>

      {(riskLevel === 'alto' || riskLevel === 'medio') && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Evacuation')}
        >
          <Ionicons
            name="exit-outline"
            size={20}
            color={colors.primary}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Rotas de Evacuação</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.footer}>Última atualização: há 2 minutos</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  buttonIcon: {
    marginRight: 12,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginTop: 20,
  },
});
