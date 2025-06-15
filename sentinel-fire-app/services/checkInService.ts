import { CheckInData } from '../context/CheckInContext';
import { request } from './api';

export async function sendCheckIn(data: CheckInData): Promise<void> {
  await request('/check-in', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}