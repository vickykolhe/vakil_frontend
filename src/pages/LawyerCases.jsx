import React, { useState } from 'react';
import Sidebar_lawyer from '../components/Sidebar_lawyer'; // Assuming Sidebar_lawyer is imported from the correct location

function LawyerCases() {
  const [caseDetails, setCaseDetails] = useState({
    title: "",
    caseNumber: "",
    filingDate: "",
    courtName: "",
    jurisdiction: "",
    plaintiff: {
      name: "",
      address: "",
      contact: "",
    },
    defendant: {
      name: "",
      address: "",
      contact: "",
    },
    lawyer: {
      name: "",
      contact: "",
    },
    causeOfAction: "",
    reliefSought: "",
    caseDescription: "",
    documents: [],
    importantDates: [],
    status: "Pending",
    notes: "",
  });

  const [pendingCases, setPendingCases] = useState([
    {
      caseNumber: "001",
      title: "Case 1",
      status: "Pending",
      filingDate: "2024-11-01",
    },
    {
      caseNumber: "002",
      title: "Case 2",
      status: "Pending",
      filingDate: "2024-11-10",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCaseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    setCaseDetails((prevDetails) => ({
      ...prevDetails,
      documents: [...prevDetails.documents, ...files],
    }));
  };

  return (
    <div className="flex h-screen bg-[#222831] text-[#EEEEEE]">
      {/* Sidebar */}
      <Sidebar_lawyer />

      {/* Main Content */}
      <div className="bg-slate-800 flex-1 flex flex-col overflow-y-auto p-7">
        <h2 className="text-3xl text-[#76ABAE] mb-6 text-center">Lawyer Dashboard</h2>

        {/* Add New Case */}
        <div className="bg-slate-400 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl text-[#31363F] mb-4">Add New Case</h3>
          <form>
            <div className="mb-4">
              <label className="block text-[#31363F]">Case Title</label>
              <input
                type="text"
                name="title"
                value={caseDetails.title}
                onChange={handleChange}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#31363F]">Case Number</label>
              <input
                type="text"
                name="caseNumber"
                value={caseDetails.caseNumber}
                onChange={handleChange}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#31363F]">Filing Date</label>
              <input
                type="date"
                name="filingDate"
                value={caseDetails.filingDate}
                onChange={handleChange}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#31363F]">Court Name</label>
              <input
                type="text"
                name="courtName"
                value={caseDetails.courtName}
                onChange={handleChange}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#31363F]">Jurisdiction</label>
              <input
                type="text"
                name="jurisdiction"
                value={caseDetails.jurisdiction}
                onChange={handleChange}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <h3 className="text-2xl font-semibold text-[#31363F] mb-4">Plaintiff Details</h3>
            <div className="mb-4">
              <label className="block text-[#31363F]">Name</label>
              <input
                type="text"
                name="plaintiffName"
                value={caseDetails.plaintiff.name}
                onChange={(e) =>
                  setCaseDetails((prev) => ({
                    ...prev,
                    plaintiff: { ...prev.plaintiff, name: e.target.value },
                  }))
                }
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#31363F]">Address</label>
              <input
                type="text"
                name="plaintiffAddress"
                value={caseDetails.plaintiff.address}
                onChange={(e) =>
                  setCaseDetails((prev) => ({
                    ...prev,
                    plaintiff: { ...prev.plaintiff, address: e.target.value },
                  }))
                }
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#31363F]">Contact</label>
              <input
                type="text"
                name="plaintiffContact"
                value={caseDetails.plaintiff.contact}
                onChange={(e) =>
                  setCaseDetails((prev) => ({
                    ...prev,
                    plaintiff: { ...prev.plaintiff, contact: e.target.value },
                  }))
                }
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <h3 className="text-2xl font-semibold text-[#31363F] mb-4">Defendant Details</h3>
            <div className="mb-4">
              <label className="block text-[#31363F]">Name</label>
              <input
                type="text"
                name="defendantName"
                value={caseDetails.defendant.name}
                onChange={(e) =>
                  setCaseDetails((prev) => ({
                    ...prev,
                    defendant: { ...prev.defendant, name: e.target.value },
                  }))
                }
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#31363F]">Address</label>
              <input
                type="text"
                name="defendantAddress"
                value={caseDetails.defendant.address}
                onChange={(e) =>
                  setCaseDetails((prev) => ({
                    ...prev,
                    defendant: { ...prev.defendant, address: e.target.value },
                  }))
                }
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#31363F]">Contact</label>
              <input
                type="text"
                name="defendantContact"
                value={caseDetails.defendant.contact}
                onChange={(e) =>
                  setCaseDetails((prev) => ({
                    ...prev,
                    defendant: { ...prev.defendant, contact: e.target.value },
                  }))
                }
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            {/* Case Details */}
            <div className="mb-4">
              <label className="block text-[#31363F]">Cause of Action</label>
              <textarea
                name="causeOfAction"
                value={caseDetails.causeOfAction}
                onChange={handleChange}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#31363F]">Relief Sought</label>
              <input
                type="text"
                name="reliefSought"
                value={caseDetails.relieSought}
                onChange={handleChange}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#31363F]">Case Description</label>
              <textarea
                name="caseDescription"
                value={caseDetails.caseDescription}
                onChange={handleChange}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            {/* Documents */}
            <div className="mb-4">
              <label className="block text-[#31363F]">Supporting Documents</label>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
              <button
                type="submit"
                className="bg-[#76ABAE] text-white mt-3 py-2 px-4 rounded"
              >
                Add document
              </button>
              
            </div>

            {/* Important Dates */}
            <div className="mb-4">
              <label className="block text-[#31363F]">Important Dates</label>
              <textarea
                name="importantDates"
                value={caseDetails.importantDates}
                onChange={handleChange}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            {/* Status and Notes */}
            <div className="mb-4">
              <label className="block text-[#31363F]">Status</label>
              <select
                name="status"
                value={caseDetails.status}
                onChange={handleChange}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              >
                <option value="Pending">Pending</option>
                <option value="Closed">Closed</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-[#31363F]">Notes</label>
              <textarea
                name="notes"
                value={caseDetails.notes}
                onChange={handleChange}
                className="w-full p-2 bg-[#ffffff] text-[#31363F] rounded"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#76ABAE] text-white py-2 px-4 rounded"
              >
                Save Case
              </button>
            </div>
          </form>

        </div>

        {/* Pending Cases */}
        <div className="bg-slate-400 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl text-[#31363F] mb-4">Pending Cases</h3>
          {pendingCases.length > 0 ? (
            <table className="w-full text-[#31363F] bg-white rounded-lg">
              <thead>
                <tr>
                  <th className="border p-2">Case Number</th>
                  <th className="border p-2">Title</th>
                  <th className="border p-2">Filing Date</th>
                  <th className="border p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingCases.map((pendingCase, index) => (
                  <tr key={index}>
                    <td className="border p-2">{pendingCase.caseNumber}</td>
                    <td className="border p-2">{pendingCase.title}</td>
                    <td className="border p-2">{pendingCase.filingDate}</td>
                    <td className="border p-2">{pendingCase.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-[#31363F]">No pending cases found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LawyerCases;
