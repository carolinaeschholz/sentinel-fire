import React, { createContext, useState, ReactNode } from 'react';

export interface RiskZone {
  id: string;
  coordinates: { latitude: number; longitude: number }[];
  level: 'low' | 'medium' | 'high';
}

interface RiskContextType {
  zones: RiskZone[];
  setZones: (zones: RiskZone[]) => void;
}

export const RiskContext = createContext<RiskContextType>({
  zones: [],
  setZones: () => {},
});

export function RiskProvider({ children }: { children: ReactNode }) {
  const [zones, setZones] = useState<RiskZone[]>([]);

  return (
    <RiskContext.Provider value={{ zones, setZones }}>
      {children}
    </RiskContext.Provider>
  );
}