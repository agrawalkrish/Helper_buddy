
// src/hooks/useServices.ts
import { useState, useEffect } from 'react';
import { fetchApi } from '@/lib/utils/api';

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const data = await fetchApi('services');
      setServices(data.services);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { services, loading, error, refetch: fetchServices };
}