// frontend/app/page.tsx (Next.js Ecommerce Homepage with TypeScript)
"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("Welcome to Our Store");

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-black text-white p-4 flex justify-between items-center">
        {/* Left Section - Logo */}
        <div className="text-xl font-bold">E-Shop</div>
        
        {/* Middle Section - Navigation Links */}
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
        </ul>
        
        {/* Right Section - User & Cart */}
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">User</a>
          <a href="#" className="hover:underline">Cart</a>
        </div>
      </nav>
      
      {/* Homepage Content */}
      {/* <div className="flex items-center justify-center h-screen text-4xl font-bold">
        {message}
      </div> */}

      {/* Split Section */}
      <div className="flex w-full h-[500px]">
        <div className="w-2/5 p-4 flex items-center justify-center">
          <p className="text-xl">Explore the latest trends and best deals.</p>
        </div>
        <div className="w-3/5 bg-gray-300 flex items-center justify-center">
          <img src="/placeholder.jpg" alt="Ecommerce Image" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white p-6 text-center">
        © 2024 E-Shop. All rights reserved.
      </footer>
    </div>
  );
}
