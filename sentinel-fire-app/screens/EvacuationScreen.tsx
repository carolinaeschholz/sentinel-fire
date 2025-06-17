import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Constants from 'expo-constants';
import colors from '../constants/colors';

export default function EvacuationScreen() {
  // Coordenadas simuladas para a rota de evacuação
  const routeCoordinates = [
    { latitude: -23.561, longitude: -46.655 },
    { latitude: -23.562, longitude: -46.653 },
    { latitude: -23.563, longitude: -46.650 },
    { latitude: -23.564, longitude: -46.648 },
  ];

  return (
    <View style={styles.container}>
      <MapView
        provider="google" // força o uso do Google Maps
        style={styles.map}
        initialRegion={{
          latitude: -23.561,
          longitude: -46.655,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline
          coordinates={routeCoordinates}
          strokeColor={colors.primary}
          strokeWidth={5}
        />

        <Marker
          coordinate={routeCoordinates[0]}
          title="Start"
          description="You are here"
        />
        <Marker
          coordinate={routeCoordinates[routeCoordinates.length - 1]}
          title="Safe Zone"
        />
      </MapView>
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
});

