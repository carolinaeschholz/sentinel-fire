import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native';
import MapView, { Polygon, PROVIDER_GOOGLE } from 'react-native-maps';

import colors from '../constants/colors';
import RiskAlertCard from '../components/RiskAlertCard';
import MapLegend from '../components/MapLegend';
import { useRiskContext } from '../context/RiskContext';
import { RiskLevel, RISK_COLORS, RISK_FILL_COLORS } from '../constants/riskLevels';

export default function RiskMapScreen() {
  const { riskZones, setRiskZones } = useRiskContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRiskZones([
        {
          id: 'zone1',
          level: 'alto',
          coordinates: [
            { latitude: -23.561, longitude: -46.655 },
            { latitude: -23.562, longitude: -46.652 },
            { latitude: -23.564, longitude: -46.653 },
            { latitude: -23.563, longitude: -46.656 },
          ],
        },
        {
          id: 'zone2',
          level: 'medio',
          coordinates: [
            { latitude: -23.559, longitude: -46.654 },
            { latitude: -23.558, longitude: -46.651 },
            { latitude: -23.557, longitude: -46.652 },
            { latitude: -23.558, longitude: -46.655 },
          ],
        },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <RiskAlertCard message="Este mapa mostra as zonas de risco de incêndio da sua região. As cores indicam o nível de perigo." />

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <>
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
            {riskZones.map((zone) => (
              <Polygon
                key={zone.id}
                coordinates={zone.coordinates}
                strokeColor={RISK_COLORS[zone.level]}
                fillColor={RISK_FILL_COLORS[zone.level]}
                strokeWidth={2}
              />
            ))}
          </MapView>

          <MapLegend />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  map: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height * 0.6,
    borderRadius: 12,
    overflow: 'hidden',
  },
});

