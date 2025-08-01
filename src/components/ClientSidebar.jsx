import React from 'react';
import { Link } from 'react-router-dom';

function ClientSidebar() {
  return (
      <aside className="w-1/4 bg-[#222831] p-6 h-full shadow-lg ">
    
    <ul className="space-y-4">
      <li>
        <Link to="/client-dash" className="block p-3 text-gray-200 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition duration-150 ease-in-out">
          Home
        </Link>
      </li>
      <li>
        <Link to="/client-dash/search-lawyers" className="block p-3 text-gray-200 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition duration-150 ease-in-out">
          Search Lawyers
        </Link>
      </li>
      <li>
        <Link to="/client-dash/clientCases" className="block p-3 text-gray-200 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition duration-150 ease-in-out">
          My Cases
        </Link>
    </li>
    <li>
        <Link to="/client-dash/clientMessage" className="block p-3 text-gray-200 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition duration-150 ease-in-out">
          Messages
        </Link>
      </li>
      <li>
        <Link to="/client-dash/clientDocument" className="block p-3 text-gray-200 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition duration-150 ease-in-out">
          Documents
        </Link>
      </li>
      <li>
        <Link to="/client-dash/clientSetting" className="block p-3 text-gray-200 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition duration-150 ease-in-out">
          Settings
        </Link>
      </li>
    </ul>
  </aside>
    
    )
}

export default ClientSidebar
