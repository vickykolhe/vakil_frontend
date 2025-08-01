import React from 'react';
import ClientSidebar from '../components/ClientSidebar';
import ClientNavbar from '../components/ClientNavbar';
import ClientMainContent from './ClientMainContent';
import FooterSmall from '../components/FooterSmall';

function ClientDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-[#222831">
      <ClientNavbar />
      <div className="flex flex-1 overflow-hidden ">
        <ClientSidebar />
        <div className="flex-1 overflow-y-auto bg-[#222831]">
          <ClientMainContent />
        </div>
      </div>
      <FooterSmall />
    </div>
  );
}

export default ClientDashboard;
