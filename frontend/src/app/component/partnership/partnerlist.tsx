
// src/components/partnerships/PartnerList.tsx
'use client';
import { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const partners = Array.from({ length: 10 }, (_, i) => ({
  id: `partner-${i + 1}`,
  name: `Partner ${i + 1}`,
  email: `partner${i + 1}@example.com`,
  services: ['Service 1', 'Service 2', 'Service 3'].slice(0, Math.floor(Math.random() * 3) + 1),
  profit: Math.floor(Math.random() * 10000) + 5000,
  performance: Array.from({ length: 6 }, (_, j) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][j],
    profit: Math.floor(Math.random() * 2000) + 1000,
  })),
}));

export default function PartnerList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPartner, setSelectedPartner] = useState(null);

  const filteredPartners = partners.filter(partner =>
    partner.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search partners..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Partners List</h3>
          <div className="space-y-4">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedPartner(partner)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{partner.name}</h4>
                    <p className="text-sm text-gray-600">{partner.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${partner.profit}</p>
                    <p className="text-sm text-gray-600">
                      {partner.services.length} services
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedPartner && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Partner Performance</h3>
            <div className="h-64">
              <LineChart width={500} height={250} data={selectedPartner.performance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="#8884d8" 
                  name="Monthly Profit"
                />
              </LineChart>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Assigned Services</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPartner.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}