// screens/RiskMapScreen.tsx
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Polygon } from 'react-native-maps';
import colors from '../constants/colors';

export default function RiskMapScreen() {
  // Mock de zonas de risco para exibição no mapa
  const mockRiskZones = [
    {
      id: 'zone1',
      coordinates: [
        { latitude: -23.561, longitude: -46.655 },
        { latitude: -23.562, longitude: -46.652 },
        { latitude: -23.564, longitude: -46.653 },
        { latitude: -23.563, longitude: -46.656 },
      ],
      level: 'high',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Mapa exibindo as zonas de risco */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.561,
          longitude: -46.655,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Desenha cada zona de risco como um polígono no mapa */}
        {mockRiskZones.map((zone) => (
          <React.Fragment key={zone.id}>
            <Polygon
              coordinates={zone.coordinates}
              strokeColor={colors.alert}
              fillColor="rgba(192, 57, 43, 0.4)"
              strokeWidth={2}
            />
          </React.Fragment>
        ))}
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
