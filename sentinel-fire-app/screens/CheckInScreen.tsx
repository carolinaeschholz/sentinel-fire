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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import colors from '../constants/colors';
import messages from '../constants/messages';
import CheckInButton from '../components/CheckInButton';

import { getCurrentLocation } from '../services/locationService';
import { CheckInContext, Companion } from '../context/CheckInContext';
import { RootStackParamList } from '../navigation/RootNavigator';

const ageGroups = ['child', 'adult', 'elderly'] as const;

const getAgeGroupLabel = (group: typeof ageGroups[number]) => {
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

export default function CheckInScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { setCheckInData } = useContext(CheckInContext);

  const [companions, setCompanions] = useState<Companion[]>([]);
  const [name, setName] = useState('');
  const [ageGroup, setAgeGroup] = useState<'child' | 'adult' | 'elderly'>('adult');

  const handleAddCompanion = () => {
    if (!name.trim()) {
      Alert.alert('Nome ausente', 'Por favor, preencha o nome.');
      return;
    }

    setCompanions([...companions, { name: name.trim(), ageGroup }]);
    setName('');
  };

  const handleRemove = (index: number) => {
    setCompanions(companions.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      const location = await getCurrentLocation();
      if (!location) {
        Alert.alert('Erro de localização', 'Não foi possível obter sua posição.');
        return;
      }

      const data = {
        timestamp: new Date().toISOString(),
        location,
        mainUser: { isSafe: true },
        companions,
      };

      setCheckInData(data);
      navigation.navigate('CheckInConfirmation');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível enviar o check-in. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check-In da Comunidade</Text>
      <Text style={styles.message}>Adicione informações das pessoas com você:</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#999"
      />

      <View style={styles.ageGroupContainer}>
        {ageGroups.map((group) => (
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
              {getAgeGroupLabel(group)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <CheckInButton title="Adicionar Pessoa" onPress={handleAddCompanion} />

      <FlatList
        data={companions}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.personRow}>
            <Text>{item.name} ({getAgeGroupLabel(item.ageGroup)})</Text>
            <TouchableOpacity onPress={() => handleRemove(index)}>
              <Text style={{ color: colors.alert }}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>{messages.noCompanions}</Text>}
        style={{ marginTop: 24 }}
      />

      <CheckInButton title="Enviar Check-In" onPress={handleSubmit} />
    </View>
  );
}

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
    justifyContent: 'center',
    marginBottom: 16,
  },
  ageGroupButton: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    marginHorizontal: 6,
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


