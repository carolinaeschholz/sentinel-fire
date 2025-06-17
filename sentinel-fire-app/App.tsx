import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import { CheckInProvider } from './context/CheckInContext';
import { RiskProvider } from './context/RiskContext';

export default function App() {
  return (
    <CheckInProvider>
      <RiskProvider>
        <RootNavigator />
      </RiskProvider>
    </CheckInProvider>
  );
}

