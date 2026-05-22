# 🛠️ HelperBuddy — Home Services Booking Platform

> A full-stack home services marketplace built with **Next.js 15**, **Tailwind CSS**, and **Razorpay** payment integration. HelperBuddy connects customers with skilled service professionals for home repairs, cleaning, appliance servicing, and more.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Pages & Routes](#-pages--routes)
- [API Endpoints](#-api-endpoints)
- [Payment Integration](#-payment-integration)
- [Known Issues](#-known-issues)
- [Deployment](#-deployment)

---

## 🌟 Overview

**HelperBuddy** is a home services booking platform inspired by platforms like Urban Company. It allows users to:

- Browse and search for home services (AC repair, plumbing, electrical work, etc.)
- Add services to a cart and pay securely via **Razorpay**
- Manage their profile, wallet, orders, ratings, and referrals
- Admins can manage services, workers, orders, and view business analytics

---

## ✨ Features

### 👤 User Side
| Feature | Description |
|---|---|
| **Services Catalogue** | Browse 15+ home services across 12 categories with search & filter |
| **Shopping Cart** | Sliding cart panel with quantity controls and subtotal calculation |
| **Razorpay Checkout** | Secure in-app payment with real-time order creation & signature verification |
| **User Dashboard** | Tabbed dashboard for Profile, Wallet, Orders, Ratings, and Referrals |
| **Profile Management** | Edit personal info, upload profile photo |
| **Wallet & Transactions** | View balance, credit/debit transaction history |
| **Order History** | Track past and in-progress service orders |
| **Service Ratings** | Rate completed services with star ratings and text feedback |
| **Referral System** | Share referral codes and track referral earnings |

### 🔧 Admin Side
| Feature | Description |
|---|---|
| **Analytics Dashboard** | Revenue line charts and service performance bar charts (Recharts) |
| **Services CRUD** | Add, edit (inline), and delete services with price & worker count |
| **Workers CRUD** | Add, edit (inline), and delete workers with specialty & rating |
| **Orders Overview** | View all customer orders with status badges |
| **Settings Panel** | Business info, worker commission settings, and security options |

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | TypeScript (config/layout), JavaScript (pages) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Payments** | [Razorpay](https://razorpay.com/) (Node.js SDK + Checkout.js) |
| **Routing** | Next.js App Router + (react-router-dom in dependency) |
| **Runtime** | Node.js |
| **Backend (standalone)** | Express.js + CORS (`/backend` folder) |

---

## 📁 Project Structure

```
Helper_buddy-main/
├── src/
│   └── app/
│       ├── layout.tsx              # Root layout — loads Razorpay script globally
│       ├── page.tsx                # Default Next.js landing page (index route)
│       ├── globals.css             # Global CSS reset & base styles
│       │
│       ├── admin/
│       │   └── page.js             # Admin dashboard (analytics, CRUD for services & workers)
│       │
│       ├── services1/
│       │   └── page.js             # Services catalogue with cart & Razorpay payment
│       │
│       ├── user-dashboard/
│       │   └── page.js             # User dashboard (profile, wallet, orders, ratings, referrals)
│       │
│       └── api/
│           ├── create-order/
│           │   └── route.js        # POST /api/create-order — creates Razorpay order
│           └── verify-payment/
│               └── route.js        # POST /api/verify-payment — verifies HMAC signature
│
├── backend/                        # Standalone Express.js backend (optional / future use)
│   ├── package.json                # express + cors dependencies
│   └── .gitignore
│
├── frontend/                       # Legacy/empty frontend folder (not actively used)
│
├── public/                         # Static assets (Next.js default SVGs)
├── next.config.ts                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── postcss.config.mjs              # PostCSS configuration
├── tsconfig.json                   # TypeScript configuration
├── eslint.config.mjs               # ESLint configuration
└── package.json                    # Root dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- A **Razorpay** account (for payment features)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Helper_buddy.git
cd Helper_buddy-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
```

> ⚠️ Never commit `.env.local` to version control. It is already excluded in `.gitignore`.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RAZORPAY_KEY_ID` | ✅ Yes | Razorpay API Key ID (server-side) |
| `RAZORPAY_KEY_SECRET` | ✅ Yes | Razorpay API Secret (server-side only) |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | ✅ Yes | Razorpay Key ID exposed to the browser (prefixed with `NEXT_PUBLIC_`) |

> Get your API keys from the [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys).

---

## 🗺️ Pages & Routes

| Route | File | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Default Next.js home page |
| `/services1` | `src/app/services1/page.js` | Services catalogue, cart & payment |
| `/user-dashboard` | `src/app/user-dashboard/page.js` | User profile, wallet, orders, ratings & referrals |
| `/admin` | `src/app/admin/page.js` | Admin panel with analytics & management |

---

## 🔌 API Endpoints

### `POST /api/create-order`

Creates a Razorpay order server-side.

**Request Body:**
```json
{
  "amount": 79900,
  "items": [
    { "id": 1, "title": "AC Repair", "price": 799, "quantity": 1 }
  ]
}
```

**Response:**
```json
{
  "id": "order_XXXXXXXXXX",
  "amount": 79900,
  "currency": "INR",
  ...
}
```

---

### `POST /api/verify-payment`

Verifies Razorpay payment signature using HMAC SHA-256.

**Request Body:**
```json
{
  "razorpay_order_id": "order_XXXXXXXXXX",
  "razorpay_payment_id": "pay_XXXXXXXXXX",
  "razorpay_signature": "signature_string",
  "items": [...]
}
```

**Response:**
```json
{ "success": true }
```

---

## 💳 Payment Integration

HelperBuddy uses **Razorpay** for payments. The payment flow is:

```
User clicks "Pay Now"
       ↓
Frontend calls POST /api/create-order
       ↓
Server creates a Razorpay order (returns order_id)
       ↓
Razorpay Checkout modal opens in browser
       ↓
User completes payment
       ↓
Frontend calls POST /api/verify-payment
       ↓
Server validates HMAC signature
       ↓
Payment confirmed → cart cleared → success alert
```

The Razorpay Checkout script is loaded globally via `src/app/layout.tsx`:
```html
<script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
```

---

## ⚠️ Known Issues

- **Merge conflict in `package.json`**: The file contains unresolved Git merge conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`). Resolve this before building for production by keeping the following dependencies:
  ```json
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.2.0",
  "recharts": "^2.15.1",
  "razorpay": "^2.9.5"
  ```

- **Mock data only**: The admin dashboard and user dashboard currently use static/mock data. No database integration is implemented yet.

- **No authentication**: There is no login/signup system. Any user can access `/admin` or `/user-dashboard` directly by URL.

- **Backend folder**: The `backend/` directory contains an Express.js setup (`express` + `cors`) but has no implemented routes. It appears to be scaffolded for future development.

- **`console.log` in production**: `src/app/api/create-order/route.js` logs Razorpay API keys to the server console. Remove these before deploying to production.

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## ☁️ Deployment

### Deploy on Vercel (Recommended)

1. Push your repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in the Vercel dashboard:
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID`
4. Deploy!

> See [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 🔧 Service Categories

HelperBuddy currently supports the following service categories:

- 🌬️ AC Service
- 🚿 Bathroom & Kitchen Cleaning
- 🪚 Carpenter
- 🍳 Chimney Repair
- ⚡ Electrician
- 📡 Microwave Repair
- 🔧 Plumbers
- ❄️ Refrigerator Repair
- 🛋️ Sofa & Carpet Cleaning
- 🫧 Washing Machine Repair
- 💧 Water Purifier Repair

---

## 📄 License

This project is private and not licensed for public distribution.

---

<p align="center">Made with ❤️ by the HelperBuddy Team</p>
