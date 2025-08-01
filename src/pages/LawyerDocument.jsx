import React from 'react';
import Sidebar_lawyer from '../components/Sidebar_lawyer';

const LawyerDocument = () => {
  return (
    <div className="flex h-screen bg-[#222831] text-[#EEEEEE]">
      <Sidebar_lawyer/>


      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Document Requests</h1>

        {/* Request Documents Section */}
        <div className="bg-[#EEEEEE] text-[#31363F] p-6 rounded mb-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">Request Documents from Client</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select
                className="border p-2 rounded bg-[#EEEEEE] text-[#31363F] border-zinc-600"
                placeholder="Select Client"
              >
                <option>Select Client</option>
              </select>
              <select
                className="border p-2 rounded bg-[#EEEEEE] text-[#31363F]  border-zinc-600"
                placeholder="Select Case"
              >
                <option>Select Case</option>
              </select>
            </div>
            <textarea
              className="border p-2 rounded w-full bg-[#EEEEEE] text-[#31363F] mb-4  border-zinc-600"
              placeholder="Add document description"
            ></textarea>
            <select
              className="border p-2 rounded w-full bg-[#EEEEEE] text-[#31363F] mb-4  border-zinc-600"
            >
              <option value="id-proof">ID Proof</option>
              <option value="case-evidence">Case Evidence</option>
              <option value="agreement">Agreement</option>
            </select>
            <button
              className="bg-[#76ABAE] text-[#EEEEEE] py-2 px-4 rounded hover:bg-[#65A0A3]"
              type="button"
            >
              Send Request
            </button>
          </form>
        </div>

        {/* Uploaded Documents Section */}
        <div className="bg-[#EEEEEE] text-[#31363F] p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Client-Uploaded Documents</h2>
          <input
            type="text"
            className="border p-2 rounded w-full mb-4 bg-[#EEEEEE] text-[#31363F]  border-zinc-600"
            placeholder="Search documents..."
          />
          <table className="w-full border-collapse border  border-zinc-600">
            <thead>
              <tr className='border border-zinc-600'>
                <th className="border p-2 ">Document Name</th>
                <th className="border p-2">Uploaded By</th>
                <th className="border p-2">Case</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Upload Date</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Sample Document</td>
                <td className="border p-2">Virat Jagtap</td>
                <td className="border p-2">Case #123</td>
                <td className="border p-2">Evidence</td>
                <td className="border p-2">2024-11-18</td>
                <td className="border p-2">
                  <button className="bg-[#76ABAE] text-[#EEEEEE] px-4 py-2 rounded">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LawyerDocument
