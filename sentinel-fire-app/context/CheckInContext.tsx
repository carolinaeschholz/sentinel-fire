import React, { createContext, useState, ReactNode } from 'react';

// Define os grupos de idade possíveis para acompanhantes
type AgeGroup = 'child' | 'adult' | 'elderly';

// Interface para um acompanhante
export interface Companion {
  name: string;
  ageGroup: AgeGroup;
}

// Interface para os dados do check-in
export interface CheckInData {
  timestamp: string; // Data e hora do check-in
  location: {
    latitude: number;
    longitude: number;
  };
  mainUser: {
    isSafe: boolean; // Indica se o usuário principal está seguro
  };
  companions: Companion[]; // Lista de acompanhantes
}

// Interface do contexto, define o formato dos dados e função de atualização
interface CheckInContextType {
  data: CheckInData | null;
  setCheckInData: (data: CheckInData) => void;
}

// Cria o contexto com valores padrão
export const CheckInContext = createContext<CheckInContextType>({
  data: null,
  setCheckInData: () => {},
});

// Provedor do contexto, responsável por armazenar e fornecer os dados do check-in
export const CheckInProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<CheckInData | null>(null);

  // Função para atualizar os dados do check-in
  const setCheckInData = (checkInData: CheckInData) => {
    setData(checkInData);
  };

  // Retorna o provedor com os valores do contexto para os componentes filhos
  return (
    <CheckInContext.Provider value={{ data, setCheckInData }}>
      {children}
    </CheckInContext.Provider>
  );
};
