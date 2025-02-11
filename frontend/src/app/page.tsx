// frontend/app/page.tsx (Next.js Ecommerce Homepage with TypeScript)
"use client";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Home() {
  const [message, setMessage] = useState<string>("Welcome to Our Store");

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-black text-white p-4 flex justify-between items-center">
        {/* Left Section - Logo */}
        <div className="text-3xl px-8 font-bold">HB</div>

        <div className="flex items-center space-x-12 px-10">
          {/* Middle Section - Navigation Links */}
          <div>
            <ul className="text-xl flex space-x-12">
              <li><a href="/" className="hover:text-gray-300 hover:underline transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 hover:underline transition duration-300">Services</a></li>
              <li><a href="/Testimonial" className="hover:text-gray-300 hover:underline transition duration-300">Blog</a></li>
              <li><a href="/about" className="hover:text-gray-300 hover:underline transition duration-300">About</a></li>
            </ul>
          </div>

          {/* Right Section - User & Cart */}
          <div className="flex items-center space-x-12 px-10">
            <ul className="text-xl flex space-x-10">
              <li><a href="#" className="hover:text-gray-300 transition duration-300"><FaRegUserCircle size={30} /></a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300"><MdOutlineShoppingBag size={30} /></a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Homepage Content */}
      {/* <div className="flex items-center justify-center h-screen text-4xl font-bold">
        {message}
      </div> */}

      {/* Split Section */}
      <div className="flex w-full h-[500px]">
        <div className="w-2/5 p-4 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold">Expert Services</h1><br />
          <h1 className="text-4xl font-bold">At Your Doorstep!</h1>
          <br />
          <button className="bg-black text-white px-10 py-3 text-lg rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105">
            Book Now!
          </button>
          <br />
          <p className="text-4xl mb-4 font-bold">Reliable-Fast-Affordable</p>
        </div>
        <div className="w-3/5 bg-gray-300 flex items-center justify-center">
          <img src="https://www.capermint.com/wp-content/uploads/2020/07/Urban-Company-Service-Provider.jpg" alt="Ecommerce Image" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-around p-6">
        <button className="bg-black text-white px-16 py-5 text-lg rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105">
          Dusting & Cleaning
        </button>
        <button className="bg-black text-white px-16 py-5 text-lg rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105">
          Repairing & Maintenance
        </button>
        <button className="bg-black text-white px-16 py-5 text-lg rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105">
          Plumbing & Electrical
        </button>
      </div>
     {/*  Testimonial */}
      <div className="">
        
      </div>
      {/* Footer Section */}
      <footer className="bg-black text-white p-6 text-center">
        © 2024 E-Shop. All rights reserved.
      </footer>
    </div>
    
  );
}
