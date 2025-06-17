import React, { createContext, useState, useContext, ReactNode } from 'react';
import { RiskLevel } from '../constants/riskLevels';

export type RiskZone = {
  id: string;
  coordinates: { latitude: number; longitude: number }[];
  level: RiskLevel;
};

type RiskContextType = {
  riskLevel: RiskLevel;
  setRiskLevel: (level: RiskLevel) => void;
  riskZones: RiskZone[];
  setRiskZones: (zones: RiskZone[]) => void;
};

export const RiskContext = createContext<RiskContextType | undefined>(undefined);

export function RiskProvider({ children }: { children: ReactNode }) {
  const [riskLevel, setRiskLevel] = useState<RiskLevel>('sem_risco');
  const [riskZones, setRiskZones] = useState<RiskZone[]>([]);

  return (
    <RiskContext.Provider value={{ riskLevel, setRiskLevel, riskZones, setRiskZones }}>
      {children}
    </RiskContext.Provider>
  );
}

export function useRiskContext() {
  const context = useContext(RiskContext);
  if (!context) throw new Error('useRiskContext must be used inside RiskProvider');
  return context;
}

