import * as Location from 'expo-location';

// Função para obter a localização atual do usuário
export async function getCurrentLocation(): Promise<{
  latitude: number;
  longitude: number;
} | null> {
  // Solicita permissão para acessar a localização em primeiro plano
  const { status } = await Location.requestForegroundPermissionsAsync();

  // Se a permissão não for concedida, retorna null e exibe um aviso
  if (status !== 'granted') {
    console.warn('Permission to access location was denied');
    return null;
  }

  // Obtém a posição atual do dispositivo
  const location = await Location.getCurrentPositionAsync({});
  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
}