import React from 'react';
import ClientSidebar from '../components/ClientSidebar';

const consultations = [
  { id: 1, lawyerName: "Ravi Sharma", specialization: "Criminal Law", experience: 10, status: "Accepted" },
  { id: 2, lawyerName: "Anita Patel", specialization: "Corporate Law", experience: 5, status: "Rejected" },
  { id: 3, lawyerName: "Karan Mehta", specialization: "Family Law", experience: 8, status: "Pending" },
];

function ClientConsultation() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      
        <ClientSidebar />
      

      {/* Main Content */}
      <div className="consultation-page flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-6">Consultation Requests</h2>
        
        <div className="consultation-list space-y-4">
          {consultations.map((consultation) => (
            <div
              key={consultation.id}
              className="consultation-item p-4 border rounded-md flex justify-between items-center bg-white shadow-md"
            >
              <div>
                <h3 className="text-lg font-medium">{consultation.lawyerName}</h3>
                <p className="text-sm text-gray-500">Specialization: {consultation.specialization}</p>
                <p className="text-sm text-gray-500">Experience: {consultation.experience} years</p>
              </div>
              <div className={`status ${consultation.status.toLowerCase()} font-bold`}>
                {consultation.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .status.accepted {
          color: green;
        }
        .status.rejected {
          color: red;
        }
        .status.pending {
          color: orange;
        }
      `}</style>
    </div>
  );
}

export default ClientConsultation;
