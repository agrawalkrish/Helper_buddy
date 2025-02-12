
// src/components/orders/OrderAnalytics.tsx
'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const analyticsData = [
  { name: 'Cleaning', orders: 120, rating: 4.5, revisits: 45 },
  { name: 'Plumbing', orders: 80, rating: 4.2, revisits: 30 },
  { name: 'Electrical', orders: 95, rating: 4.7, revisits: 40 },
  { name: 'Painting', orders: 70, rating: 4.1, revisits: 25 },
  { name: 'Gardening', orders: 60, rating: 4.4, revisits: 20 },
];

export default function OrderAnalytics() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Service Performance Analysis</h3>
      <div className="h-80">
        <BarChart width={800} height={300} data={analyticsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="orders" fill="#8884d8" name="Total Orders" />
          <Bar dataKey="revisits" fill="#82ca9d" name="Revisits" />
        </BarChart>
      </div>
    </div>
  );
}