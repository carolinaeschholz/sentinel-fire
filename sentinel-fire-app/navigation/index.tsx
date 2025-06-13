// navigation/index.tsx
import React from 'react';
// Importa o container principal de navegação do React Navigation
import { NavigationContainer } from '@react-navigation/native';
// Importa o criador de pilha de navegação nativa
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa as telas que serão usadas na navegação
import HomeScreen from '../screens/HomeScreen';
import RiskMapScreen from '../screens/RiskMapScreen';
import EvacuationScreen from '../screens/EvacuationScreen';
import CheckInScreen from '../screens/CheckInScreen';
import CheckInConfirmationScreen from '../screens/CheckInConfirmationScreen';

// Define os nomes das rotas e os parâmetros esperados para cada uma
export type RootStackParamList = {
  Home: undefined;
  RiskMap: undefined;
  Evacuation: undefined;
  CheckIn: undefined;
  CheckInConfirmation: undefined;
};

// Cria o objeto de navegação em pilha tipado
const Stack = createNativeStackNavigator<RootStackParamList>();

// Componente principal de navegação do app
export default function AppNavigator() {
  return (
    // NavigationContainer gerencia o estado da navegação
    <NavigationContainer>
      {/* Stack.Navigator define as rotas e a tela inicial */}
      <Stack.Navigator initialRouteName="Home">
        {/* Cada Stack.Screen representa uma tela na pilha de navegação */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Sentinel Fire' }} />
        <Stack.Screen name="RiskMap" component={RiskMapScreen} options={{ title: 'Risk Map' }} />
        <Stack.Screen name="Evacuation" component={EvacuationScreen} options={{ title: 'Evacuation Routes' }} />
        <Stack.Screen name="CheckIn" component={CheckInScreen} options={{ title: 'Community Check-In' }} />
        <Stack.Screen
          name="CheckInConfirmation"
          component={CheckInConfirmationScreen}
          options={{ title: 'Confirm Check-In' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
