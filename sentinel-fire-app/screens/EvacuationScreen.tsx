import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import RiskAlertCard from '../components/RiskAlertCard';
import colors from '../constants/colors';

type Coordinate = {
  latitude: number;
  longitude: number;
};

export default function EvacuationScreen() {
  const [routeCoordinates, setRouteCoordinates] = useState<Coordinate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula chamada à API
    setTimeout(() => {
      setRouteCoordinates([
        { latitude: -23.561, longitude: -46.655 },
        { latitude: -23.562, longitude: -46.653 },
        { latitude: -23.563, longitude: -46.650 },
        { latitude: -23.564, longitude: -46.648 },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <RiskAlertCard message="Esta rota mostra o caminho mais seguro até um ponto de evacuação. Use-a apenas se instruído pelas autoridades." />

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: routeCoordinates[0].latitude,
            longitude: routeCoordinates[0].longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Polyline
            coordinates={routeCoordinates}
            strokeColor={colors.primary}
            strokeWidth={5}
          />

          {/* Início da rota */}
          <Marker
            coordinate={routeCoordinates[0]}
            title="Início"
            description="Você está aqui"
            pinColor="#2ECC71"
          />

          {/* Destino */}
          <Marker
            coordinate={routeCoordinates[routeCoordinates.length - 1]}
            title="Ponto Seguro"
            description="Área de evacuação"
            pinColor="#E74C3C"
          />
        </MapView>
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
    height: Dimensions.get('window').height * 0.65,
    borderRadius: 12,
    overflow: 'hidden',
  },
});


