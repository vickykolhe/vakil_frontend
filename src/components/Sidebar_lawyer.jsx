// src/components/Sidebar_lawyer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar_lawyer = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6">
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/lawyer-dash" className="text-gray-300 hover:text-white">Dashboard Home</Link>
          </li>
          <li className="mb-4">
            <Link to="/lawyer-dash/lawyerProfile" className="text-gray-300 hover:text-white">Profile</Link>
          </li>
          <li className="mb-4">
            <Link to="/lawyer-dash/lawyerConsultations" className="text-gray-300 hover:text-white">Consultations</Link>
          </li>
          <li className="mb-4">
            <Link to="/lawyer-dash/lawyerCases" className="text-gray-300 hover:text-white">Cases</Link>
          </li>
          <li className="mb-4">
            <Link to="/lawyer-dash/lawyerMeetings" className="text-gray-300 hover:text-white">Calendar</Link>
          </li>
          <li className="mb-4">
            <Link to="/lawyer-dash/lawyerMessages" className="text-gray-300 hover:text-white">Messages</Link>
          </li>
          <li className="mb-4">
            <Link to="/lawyer-dash/lawyerFileCase" className="text-gray-300 hover:text-white">File Case</Link>
          </li>
          <li className="mb-4">
            <Link to="/lawyer-dash/lawyerDocuments" className="text-gray-300 hover:text-white">Documents</Link>
          </li>
          <li className="mb-4">
            <Link to="/lawyer-dash/lawyerSettings" className="text-gray-300 hover:text-white">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar_lawyer;
