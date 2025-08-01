import React, { useState } from 'react';
import Sidebar_lawyer from '../components/Sidebar_lawyer';

const LawyerFilecase = () => {
  const [formData, setFormData] = useState({
    courtName: '',
    courtCity: '',
    courtAddress:'',
    courtPin:'',
    caseTitle: '',
    plaintiffName: '',
    plaintiffDescription: '',
    plaintiffAddress: '',
    defendantName: '',
    defendantDescription: '',
    defendantAddress: '',
    causeOfAction: '',
    legalProvision:'',
    jurisdiction: '',
    relief: '',
    verification: 'I verify that the statements made in this plaint are true to my knowledge.',
    courtFees: '',
    numCopies: 2,
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex h-screen bg-[#222831] text-[#EEEEEE]">
      <Sidebar_lawyer />

      <div className=" bg-[#31363F] flex-1 flex flex-col overflow-y-auto p-7">
        <h1 className="text-3xl font-bold mb-6 text-center">Draft a Plaint</h1>

        <form className="space-y-6">
          {/* Court Details */}
          <div className="bg-[#222831] p-4 rounded-md shadow-md">
            <h2 className="text-xl mb-4">Court Details</h2>
            <input
              type="text"
              name="courtName"
              value={formData.courtName}
              onChange={handleChange}
              placeholder="Court Name"
              className="w-full p-2 mb-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            
            <input
              type="text"
              name="courtAddress"
              value={formData.courtAddress}
              onChange={handleChange}
              placeholder="Court Detailed Address"
              className="w-full p-2 mb-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <input
              type="text"
              name="courtCity"
              value={formData.courtCity}
              onChange={handleChange}
              placeholder="Court City"
              className="w-full p-2 mb-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <input
              type="text"
              name="courtPin"
              value={formData.courtPin}
              onChange={handleChange}
              placeholder="Court Pin Code"
              className="w-full p-2 mb-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <input
              type="text"
              name="caseTitle"
              value={formData.caseTitle}
              onChange={handleChange}
              placeholder="Case Title (Plaintiff v/s Defendant)"
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
          </div>

          {/* Parties Information */}
          <div className="bg-[#222831] p-4 rounded-md shadow-md">
            <h2 className="text-xl mb-4">Parties Information</h2>
            <input
              type="text"
              name="plaintiffName"
              value={formData.plaintiffName}
              onChange={handleChange}
              placeholder="Plaintiff's Name"
              className="w-full p-2 mb-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <textarea
              name="plaintiffDescription"
              value={formData.plaintiffDescription}
              onChange={handleChange}
              placeholder="Plaintiff's Description"
              className="w-full p-2 mb-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <textarea
              name="plaintiffAddress"
              value={formData.plaintiffAddress}
              onChange={handleChange}
              placeholder="Plaintiff's Address"
              className="w-full p-2 mb-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <input
              type="text"
              name="defendantName"
              value={formData.defendantName}
              onChange={handleChange}
              placeholder="Defendant's Name"
              className="w-full p-2 mb-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <textarea
              name="defendantDescription"
              value={formData.defendantDescription}
              onChange={handleChange}
              placeholder="Defendant's Description"
              className="w-full p-2 mb-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <textarea
              name="defendantAddress"
              value={formData.defendantAddress}
              onChange={handleChange}
              placeholder="Defendant's Address"
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
          </div>

          {/* Cause of Action */}
          <div className="bg-[#222831] p-4 rounded-md shadow-md">
            <h2 className="text-xl mb-4">Cause of Action</h2>
            <textarea
              name="causeOfAction"
              value={formData.causeOfAction}
              onChange={handleChange}
              placeholder="Detail of the events or facts that led to the dispute (including dates). 
              e.g On March 1, 2023, the defendant breached the contract by failing to deliver the goods as agreed upon, causing financial loss to the plaintiff."
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
          </div>
          <div className="bg-[#222831] p-4 rounded-md shadow-md">
            <h2 className="text-xl mb-4">Sections and Legal Provisions</h2>
            <textarea
              name="legalProvision"
              value={formData.legalProvision}
              onChange={handleChange}
              placeholder="Sections under which case is being filed."
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
          </div>

          {/* Jurisdiction */}
          <div className="bg-[#222831] p-4 rounded-md shadow-md">
            <h2 className="text-xl mb-4">Jurisdiction</h2>
            <textarea
              name="jurisdiction"
              value={formData.jurisdiction}
              onChange={handleChange}
              placeholder="Explain why the court has the authority to hear your case."
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
          </div>

          {/* Relief */}
          <div className="bg-[#222831] p-4 rounded-md shadow-md">
            <h2 className="text-xl mb-4">Relief Sought</h2>
            <textarea
              name="relief"
              value={formData.relief}
              onChange={handleChange}
              placeholder="Specify the relief being sought"
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
          </div>

          {/* Verification */}
          <div className="bg-[#222831] p-4 rounded-md shadow-md">
            <h2 className="text-xl mb-4">Verification</h2>
            <textarea
              name="verification"
              value={formData.verification}
              readOnly
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
          </div>

          {/* Document Upload */}
          <div className="bg-[#222831] p-4 rounded-md shadow-md space-y-4">
            <h2 className="text-xl mb-4">Supporting Documents</h2>
            <p>e.g Contracts, agreements, receipts, correspondences, photographs, etc. (in .pdf form)</p>
            <p></p>
            <input
              type="file"
              name="documents"
              onChange={handleChange}
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <input
              type="file"
              name="documents"
              onChange={handleChange}
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <input
              type="file"
              name="documents"
              onChange={handleChange}
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <input
              type="file"
              name="documents"
              onChange={handleChange}
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
          </div>


          {/* Actions */}
          <div className="flex justify-between items-center bg-[#222831] p-4 rounded-md shadow-md">
            <input
              type="number"
              name="courtFees"
              value={formData.courtFees}
              onChange={handleChange}
              placeholder="Court Fees"
              className="w-1/3 p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
          </div>
          <div className='items-center bg-[#222831] p-4 rounded-md shadow-md space-y-3'>
            <p>Fees Recipt</p>
            <input
              type="file"
              name="documents"
              onChange={handleChange}
              className="w-full p-2 bg-[#EEEEEE] text-[#31363F] rounded-md"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#76ABAE] text-[#EEEEEE] p-2 rounded-md hover:bg-[#5E9596]"
            >
              Submit
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LawyerFilecase;
