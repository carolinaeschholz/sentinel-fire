export type RiskLevel = 'sem_risco' | 'baixo' | 'medio' | 'alto';

export const RISK_COLORS = {
  alto: '#C0392B',
  medio: '#E67E22',
  baixo: '#F1C40F',
  sem_risco: '#95A5A6',
};

export const RISK_FILL_COLORS = {
  alto: 'rgba(192, 57, 43, 0.4)',
  medio: 'rgba(230, 126, 34, 0.4)',
  baixo: 'rgba(241, 196, 15, 0.4)',
  sem_risco: 'rgba(149, 165, 166, 0.4)',
};
