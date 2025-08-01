// src/pages/LawyerDashboard.js
import React, { useState, useEffect } from 'react';
import Sidebar_lawyer from '../components/Sidebar_lawyer';
import Header_lawyer from '../components/Header_lawyer';
import StatsWidgets_lawyer from '../components/StatsWidgets_lawyer';
import NotificationPanel_lawyer from '../components/NotificationPanel_lawyer';
import CaseOverview_lawyer from '../components/CaseOverview_lawyer';
import { useCaseContext } from '../components/CaseContext';

function LawyerDashboard() {
 
  const { cases } = useCaseContext();
  const [lawyerInfo, setLawyerInfo] = useState({
    name: 'Avinash Mishra',
    specialization: 'Corporate Law',
    experience: 8,
  });

  const activeCases = cases.filter(caseItem => caseItem.status === 'Pending').length;
  const upcomingMeetings = 5; 
  const totalClients = 10; 

  useEffect(() => {
    const fetchLawyerInfo = async () => {
      // Fetch or retrieve lawyer's data from an API or local storage
    };
    fetchLawyerInfo();
  }, []);

  return (
    <div className="flex h-screen bg-[#222831]">
      <Sidebar_lawyer />
      <div className="flex-1 flex flex-col p-6">
        <Header_lawyer />
        
        <div className="p-6 bg-[#EEEEEE] shadow-lg rounded-lg mb-8 border border-gray-300">
          <h2 className="text-3xl font-semibold text-[#31363F]">Welcome, {lawyerInfo.name}</h2>
          <p className="text-[#31363F] mt-1">Specialization: <span className="text-[#76ABAE]">{lawyerInfo.specialization}</span></p>
          <p className="text-[#31363F]">Experience: <span className="text-[#76ABAE]">{lawyerInfo.experience} years</span></p>
        </div>
        
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsWidgets_lawyer title="Active Cases" count={activeCases} bgColor="bg-[#76ABAE]" textColor="text-[#222831]" />
            <StatsWidgets_lawyer title="Upcoming Meetings" count={upcomingMeetings} bgColor="bg-[#76ABAE]" textColor="text-[#222831]" />
            <StatsWidgets_lawyer title="Total Clients" count={totalClients} bgColor="bg-[#76ABAE]" textColor="text-[#222831]" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NotificationPanel_lawyer />
            <div className="case-list bg-[#EEEEEE] p-6 rounded-lg shadow-lg border border-gray-300">
              <h3 className="text-2xl font-semibold text-[#31363F] mb-4">Current Cases</h3>
              {cases.length ? (
                <ul className="space-y-4">
                  {cases.map((caseItem, index) => (
                    <li key={index} className="border-b border-gray-300 pb-3">
                      <h4 className="font-semibold text-[#31363F]">{caseItem.title}</h4>
                      <p className="text-[#31363F]">Client: <span className="text-[#76ABAE]">{caseItem.clientName}</span></p>
                      <p className="text-[#31363F]">Status: <span className={`font-semibold ${caseItem.status === 'Pending' ? 'text-orange-500' : 'text-green-600'}`}>{caseItem.status}</span></p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No cases available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LawyerDashboard;
