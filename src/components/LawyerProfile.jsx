// src/components/LawyerProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const LawyerProfile = ({ lawyers }) => {
  const { lawyerId } = useParams();
  const lawyer = lawyers.find(l => l.id === parseInt(lawyerId));

  if (!lawyer) {
    return <div className="text-center">Lawyer not found!</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">{lawyer.name}</h1>
      <div className="flex items-center mb-4">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
          {/* Placeholder for lawyer's image */}
        </div>
      </div>
      <p className="text-lg"><strong>Specialization:</strong> {lawyer.specialization}</p>
      <p className="text-lg"><strong>Experience:</strong> {lawyer.experience} years</p>
      <p className="text-lg"><strong>Location:</strong> {lawyer.location}</p>
      <p className="text-lg"><strong>Ongoing Cases:</strong> {lawyer.casesInProgress}</p>
      {/* You can add more details as needed */}
    </div>
  );
};

export default LawyerProfile;
