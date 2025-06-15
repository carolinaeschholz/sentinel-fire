const API_URL = 'https://example.com/api';

export async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error('API request failed');
  }
  return response.json() as Promise<T>;
}

export default API_URL;