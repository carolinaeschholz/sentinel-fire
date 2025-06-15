import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../constants/colors';
import { getCurrentLocation } from '../services/locationService';
import { CheckInContext, Companion } from '../context/CheckInContext';

// Define os grupos de idade possíveis
const ageGroups = ['child', 'adult', 'elderly'] as const;

export default function CheckInScreen() {
  const navigation = useNavigation(); // Hook para navegação
  const { setCheckInData } = useContext(CheckInContext); // Função para atualizar o contexto

  // Estado para armazenar acompanhantes, nome e grupo de idade selecionado
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [name, setName] = useState('');
  const [ageGroup, setAgeGroup] = useState<'child' | 'adult' | 'elderly'>('adult');

  // Adiciona um acompanhante à lista
  const handleAddCompanion = () => {
    if (!name.trim()) {
      Alert.alert('Missing name', 'Please enter a name.');
      return;
    }

    setCompanions([...companions, { name: name.trim(), ageGroup }]);
    setName('');
  };

  // Remove um acompanhante da lista pelo índice
  const handleRemove = (index: number) => {
    setCompanions(companions.filter((_, i) => i !== index));
  };

  // Envia o check-in, obtendo localização e salvando no contexto
  const handleSubmit = async () => {
    const location = await getCurrentLocation();
    if (!location) {
      Alert.alert('Location error', 'Unable to get current location.');
      return;
    }

    const data = {
      timestamp: new Date().toISOString(),
      location,
      mainUser: { isSafe: true },
      companions,
    };

    setCheckInData(data);

    Alert.alert('Check-In submitted', 'Thank you for checking in!');
    navigation.navigate('CheckInConfirmation');
  };

  // Renderização da tela
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Check-In</Text>
      <Text style={styles.message}>Enter info about people with you:</Text>

      {/* Campo para nome do acompanhante */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#999"
      />

      {/* Botões para selecionar grupo de idade */}
      <View style={styles.ageGroupContainer}>
        {ageGroups.map(group => (
          <TouchableOpacity
            key={group}
            style={[
              styles.ageGroupButton,
              ageGroup === group && styles.ageGroupSelected,
            ]}
            onPress={() => setAgeGroup(group)}
          >
            <Text
              style={[
                styles.ageGroupText,
                ageGroup === group && styles.ageGroupTextSelected,
              ]}
            >
              {group}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botão para adicionar acompanhante */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddCompanion}>
        <Text style={styles.buttonText}>Add Person</Text>
      </TouchableOpacity>

      {/* Lista de acompanhantes adicionados */}
      <FlatList
        data={companions}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.personRow}>
            <Text>{item.name} ({item.ageGroup})</Text>
            <TouchableOpacity onPress={() => handleRemove(index)}>
              <Text style={{ color: colors.alert }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No one added yet.</Text>}
        style={{ marginTop: 24 }}
      />

      {/* Botão para enviar o check-in */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Check-In</Text>
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
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  ageGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  ageGroupButton: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  ageGroupSelected: {
    backgroundColor: colors.primary,
  },
  ageGroupText: {
    color: colors.text,
  },
  ageGroupTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  submitButton: {
    backgroundColor: colors.button,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  personRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  empty: {
    color: '#999',
    textAlign: 'center',
    marginTop: 16,
  },
});
