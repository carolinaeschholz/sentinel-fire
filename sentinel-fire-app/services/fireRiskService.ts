import { request } from './api';
import { RiskZone } from '../context/RiskContext';

export async function fetchRiskZones(): Promise<RiskZone[]> {
  return request<RiskZone[]>('/risk-zones');
}