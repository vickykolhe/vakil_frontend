// NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ClientNavbar() {
  return (
    <nav className="bg-[#222831] text-slate-300 shadow-md p-4 border-b border-gray-200">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-slate-300">
        Client Portal
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <Link to="/client-dash" className="hover:text-blue-500 font-medium">Home</Link>
        <Link to="/client-dash/search-lawyers" className="hover:text-blue-500 font-medium">Lawyers List</Link>
        <Link to="/client-dash/clientConsultation" className="hover:text-blue-500 font-medium">Consultations</Link>
        <Link to="/client-dash/clientCases" className="hover:text-blue-500 font-medium">My Cases</Link>
        <Link to="/client-dash/clientProfile" className="hover:text-blue-500 font-medium">Profile</Link>
      </div>

      {/* Logout Button */}
      <button
        onClick={() => alert('Logging out...')}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 font-semibold"
      >
        Logout
      </button>
    </div>
  </nav>
  )
}

export default ClientNavbar
