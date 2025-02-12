// src/app/api/workers/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // In a real application, fetch from database
  const workers = Array.from({ length: 10 }, (_, i) => ({
    id: `worker-${i + 1}`,
    name: `Worker ${i + 1}`,
    email: `worker${i + 1}@example.com`,
    phone: `+1234567890${i}`,
    address: `Address ${i + 1}`,
    salary: 3000 + (i * 200),
    rating: (Math.random() * 5).toFixed(1),
    joiningDate: '2024-01-01',
  }));

  return NextResponse.json({ workers });
}