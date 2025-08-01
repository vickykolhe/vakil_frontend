import React from 'react'

function ClientMainContent() {
  return (
    <main className="flex-grow p-8  bg-[#222831] text-[#EEEEEE]">
      <h1 className="text-3xl font-bold mb-6 text-[#76ABAE]">Welcome to the Client Dashboard!</h1>
      <p className="text-lg text-[#EEEEEE] mb-8">
        Hello! Your Trusted Legal Partner. Here you can manage your cases, consult with lawyers, and more.
      </p>

      {/* Additional dynamic content will appear here based on sidebar navigation */}

      <div className="bg-[#31363F] p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-[#76ABAE] mb-4">Manage Your Cases</h2>
        <p className="text-[#EEEEEE]">View, edit, and track the progress of your ongoing and completed cases.</p>
      </div>

      <div className="bg-[#31363F] mt-8 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-[#76ABAE] mb-4">Consult with Lawyers</h2>
        <p className="text-[#EEEEEE]">Reach out to your lawyer directly or schedule a consultation for legal advice.</p>
      </div>
    </main>
  )
}

export default ClientMainContent
