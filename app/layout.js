import { Inter } from 'next/font/google'
import './globals.css'
import "tailwindcss";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Phone Login',
  description: 'Phone number based authentication system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
