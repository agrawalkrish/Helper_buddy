import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Lazily require Razorpay inside the handler so it only runs at
    // request time (when env vars are available), not at build time.
    const Razorpay = (await import("razorpay")).default;
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const { amount } = await req.json();

    if (!amount || isNaN(amount)) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const order = await razorpay.orders.create({
      amount: amount, // Amount in paise (e.g., 79900 for ₹799)
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
