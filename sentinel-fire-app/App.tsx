import React from 'react';
import AppNavigator from './navigation';
import { CheckInProvider } from './context/CheckInContext';

export default function App() {
  return (
    <CheckInProvider>
      <AppNavigator />
    </CheckInProvider>
  );
}