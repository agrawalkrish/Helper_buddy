// src/lib/utils/api.ts
export async function fetchApi(endpoint: string, options = {}) {
    const response = await fetch(`/api/${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
  
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
  
    return response.json();
  }