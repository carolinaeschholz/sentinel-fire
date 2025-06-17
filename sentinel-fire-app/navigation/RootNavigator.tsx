// navigation/index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import RiskMapScreen from '../screens/RiskMapScreen';
import EvacuationScreen from '../screens/EvacuationScreen';
import CheckInScreen from '../screens/CheckInScreen';
import CheckInConfirmationScreen from '../screens/CheckInConfirmationScreen';
import colors from '../constants/colors';

export type RootStackParamList = {
  Home: undefined;
  RiskMap: undefined;
  Evacuation: undefined;
  CheckIn: undefined;
  CheckInConfirmation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F4F4F4',
          },
          headerTitleAlign: 'center',
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.text,
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name="fire"
              size={24}
              color={colors.text}
              style={{ marginRight: 12 }}
            />
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Sentinel Fire' }} />
        <Stack.Screen name="RiskMap" component={RiskMapScreen} options={{ title: 'Mapa de Riscos' }} />
        <Stack.Screen name="Evacuation" component={EvacuationScreen} options={{ title: 'Rotas de Evacuação' }} />
        <Stack.Screen name="CheckIn" component={CheckInScreen} options={{ title: 'Check-In Comunitário' }} />
        <Stack.Screen
          name="CheckInConfirmation"
          component={CheckInConfirmationScreen}
          options={{ title: 'Confirmação de Check-In' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

