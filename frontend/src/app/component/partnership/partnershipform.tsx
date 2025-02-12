// src/components/partnerships/PartnershipForm.tsx
'use client';
import { useState } from 'react';

const services = [
  'Cleaning', 'Plumbing', 'Electrical', 'Painting', 'Gardening',
  'Home Repair', 'Moving', 'Pet Care', 'Pest Control', 'Security'
];

export default function PartnershipForm({ onSubmit, initialData = null }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    email: initialData?.email || '',
    services: initialData?.services || [],
    profitShare: initialData?.profitShare || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const toggleService = (service) => {
    const newServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];
    setFormData({ ...formData, services: newServices });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Partner Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Assigned Services
        </label>
        <div className="grid grid-cols-2 gap-2">
          {services.map((service) => (
            <label
              key={service}
              className="flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => toggleService(service)}
                className="rounded text-blue-500"
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>
