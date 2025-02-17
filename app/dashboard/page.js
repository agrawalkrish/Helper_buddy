"use client";
import { useState } from "react";

const TabButton = ({ tabId, activeTab, setActiveTab, children }) => {
  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`px-4 py-2 rounded-lg ${
        activeTab === tabId ? "bg-blue-500 text-white" : "bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="flex space-x-4 mb-6">
        <TabButton tabId="orders" activeTab={activeTab} setActiveTab={setActiveTab}>
          Orders
        </TabButton>
        <TabButton tabId="workers" activeTab={activeTab} setActiveTab={setActiveTab}>
          Workers
        </TabButton>
      </div>

      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        {activeTab === "orders" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Orders</h2>
            <p>List of all orders...</p>
          </div>
        )}
        {activeTab === "workers" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Workers</h2>
            <p>List of all workers...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;