import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Polygon, PROVIDER_GOOGLE } from 'react-native-maps';
import colors from '../constants/colors';

export default function RiskMapScreen() {
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
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.561,
          longitude: -46.655,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {mockRiskZones.map((zone) => (
          <Polygon
            key={zone.id}
            coordinates={zone.coordinates}
            strokeColor={colors.alert}
            fillColor="rgba(192, 57, 43, 0.4)"
            strokeWidth={2}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
});
