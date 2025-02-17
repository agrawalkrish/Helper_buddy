import React from 'react';

const TabButton = ({ label, tabId, activeTab, onClick }) => (
  <button
    className={`px-4 py-2 rounded-lg ${
      activeTab === tabId ? 'bg-blue-500 text-white' : 'bg-gray-100'
    }`}
    onClick={() => onClick(tabId)}
  >
    {label}
  </button>
);

export default TabButton;