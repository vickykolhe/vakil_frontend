import React from 'react';
import { useCaseContext } from '../components/CaseContext';
import ClientSidebar from '../components/ClientSidebar';

function ClientMycases() {
  const { cases } = useCaseContext();
  
  // Sample case data for demonstration
  const caseInfo = {
    title: "Ramesh - Anjali – Breach of Contract",
    caseNumber: "Case No. 1234/2024",
    status: "In Progress",
    numberOfHearings: 3,
    evidenceStatus: "Collected",
    witnessFromYourSide: "Rajesh Sharma",
    additionalInfo: "Custody evaluation in progress.",
    lawyerName: "Anjali Mehta",
    districtCourt: "Family Court, Downtown District",
    hearingDates: ["20th November 2024", "10th October 2024"],
    courtName: "Pune Civil Court",
    judgeName: "Hon. Justice Patel",
    plaintiff: "Mr. Ramesh Kumar",
    defendant: "Ms. Anjali Sharma",
    plaintiffLawyer: "Ms. Priya Singh",
    defendantLawyer: "Mr. Arjun Mehta",
    caseHistory: "Filed on 1st October 2024, First Hearing on 10th October 2024",
    documents: ["Plaint", "Defendant's Response", "Evidence Submissions"],
    upcomingDeadlines: ["Submit Witness Statements by 15th November 2024"],
  };

  return (
    <div className="flex h-screen bg-[#222831]">
      {/* Sidebar */}
      <ClientSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 flex justify-center items-start bg-[#31363F] overflow-auto">
        <div className="bg-[#EEEEEE] p-6 rounded-lg shadow-md w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-[#76ABAE] mb-6 text-center">My Case Status</h2>
          <h3 className="text-2xl font-semibold text-[#31363F] mb-4">{caseInfo.title}</h3>
          <table className="min-w-full divide-y divide-[#76ABAE]">
            <tbody className="bg-[#EEEEEE] divide-y divide-[#76ABAE]">
              {/* Case Title */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Case Title:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.title}</td>
              </tr>
              {/* Case Number */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Case Number:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.caseNumber}</td>
              </tr>
              {/* Current Status */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Status:</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                      caseInfo.status === 'Pending' ? 'bg-[#76ABAE] text-[#222831]' :
                      caseInfo.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}
                  >
                    {caseInfo.status}
                  </span>
                </td>
              </tr>
              {/* Hearing Dates */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Hearing Dates:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.hearingDates.join(", ")}</td>
              </tr>
              {/* Court Name */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Court:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.courtName}</td>
              </tr>
              {/* Judge Name */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Judge:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.judgeName}</td>
              </tr>
              {/* Plaintiff and Defendant */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Plaintiff:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.plaintiff}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Defendant:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.defendant}</td>
              </tr>
              {/* Lawyer Details */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Plaintiff's Lawyer:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.plaintiffLawyer}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Defendant's Lawyer:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.defendantLawyer}</td>
              </tr>
              {/* Case History */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Case History:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.caseHistory}</td>
              </tr>
              {/* Documents */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Documents:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.documents.join(", ")}</td>
              </tr>
              {/* Upcoming Deadlines */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Upcoming Deadlines:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.upcomingDeadlines.join(", ")}</td>
              </tr>
              {/* Evidence Status */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Evidence Status:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.evidenceStatus}</td>
              </tr>
              {/* Witness */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Witness From Your Side:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.witnessFromYourSide}</td>
              </tr>
              {/* Lawyer Name */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Lawyer Name:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.lawyerName}</td>
              </tr>
              {/* District Court */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">District Court:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.districtCourt}</td>
              </tr>
              {/* Additional Information */}
              <tr>
                <td className="px-6 py-4 font-medium text-[#31363F]">Additional Information:</td>
                <td className="px-6 py-4 text-[#31363F]">{caseInfo.additionalInfo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ClientMycases;
