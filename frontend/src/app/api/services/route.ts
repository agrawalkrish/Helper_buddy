// src/app/api/services/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // In a real application, fetch from database
  const services = Array.from({ length: 30 }, (_, i) => ({
    id: `service-${i + 1}`,
    name: `Service ${i + 1}`,
    description: `Description for Service ${i + 1}`,
    image: `/api/placeholder/300/200`,
    price: Math.floor(Math.random() * 200) + 50,
    rating: (Math.random() * 5).toFixed(1),
    orders: Math.floor(Math.random() * 100),
  }));

  return NextResponse.json({ services });
}
