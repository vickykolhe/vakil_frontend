import React from 'react'
import { FaBell, FaSearch } from 'react-icons/fa';

function Header_lawyer() {
  return (
    <div className="bg-grey-800 shadow p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <FaSearch className="text-gray-500" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-500 cursor-pointer" />
        <div className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer"></div>
      </div>
    </div>
  )
}

export default Header_lawyer
