export const routes = {
  HOME: 'Home',
  CHECK_IN: 'CheckIn',
  CHECK_IN_CONFIRM: 'CheckInConfirmation',
  MAP: 'RiskMap',
  EVACUATION: 'Evacuation',
} as const;

export type RouteNames = typeof routes[keyof typeof routes];



