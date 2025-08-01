import React, { useState } from 'react';
import ClientSidebar from '../components/ClientSidebar'; // Importing the ClientSidebar

function ClientUploadDoc() {
    // Sample document request data
    const [documentRequests, setDocumentRequests] = useState([
        { id: 1, name: "ID Proof", description: "Upload a copy of your government-issued ID", status: "Pending", dueDate: "2024-11-05" },
        { id: 2, name: "Property Deed", description: "Upload your property ownership documents", status: "Under Review", dueDate: "2024-11-10" },
        { id: 3, name: "Financial Statements", description: "Provide latest bank statements", status: "Approved", dueDate: "2024-11-15" },
        { id: 4, name: "Contract", description: "Upload contract related to the case", status: "Rejected", dueDate: "2024-11-20", rejectionReason: "Unreadable document" },
    ]);

    const [selectedDocument, setSelectedDocument] = useState(null);
    const [progress, setProgress] = useState(3 / documentRequests.length * 100); // Sample progress calculation

    // Handle file selection
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            alert(`Uploaded ${file.name} for ${selectedDocument.name}`);
            // Logic to save the uploaded file would go here
            setSelectedDocument(null); // Close the upload modal after uploading
        }
    };

    // Filter approved documents
    const approvedDocuments = documentRequests.filter(doc => doc.status === "Approved");

    return (
        <div className="flex h-screen bg-[#222831]">
            {/* Sidebar */}
            <ClientSidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 max-w-4xl mx-auto bg-[#31363F] shadow-md rounded-lg overflow-y-auto text-[#EEEEEE]">
                <h1 className="text-2xl font-semibold mb-4">Document Requests</h1>
                <p className="text-gray-300 mb-6">Upload documents requested by your lawyer to support your case filing.</p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-600 rounded-full h-2.5 mb-6">
                    <div className="bg-[#76ABAE] h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-sm text-gray-300 mb-6">{progress}% of documents uploaded</p>

                {/* Document Requests Section */}
                <h2 className="text-xl font-semibold mb-4">Pending Document Requests</h2>
                <div className="space-y-4">
                    {documentRequests.filter(doc => doc.status !== "Approved").map((doc) => (
                        <div key={doc.id} className="p-4 border rounded-lg shadow-sm flex justify-between items-center bg-[#222831]">
                            <div>
                                <h3 className="text-lg font-semibold">{doc.name}</h3>
                                <p className="text-sm text-gray-400">{doc.description}</p>
                                <p className="text-sm text-gray-500">Due Date: {doc.dueDate}</p>
                                <p className={`text-sm font-medium ${doc.status === 'Pending' ? 'text-yellow-500' : doc.status === 'Under Review' ? 'text-blue-500' : doc.status === 'Rejected' ? 'text-red-500' : 'text-[#76ABAE]'}`}>
                                    Status: {doc.status}
                                </p>
                                {doc.status === 'Rejected' && <p className="text-sm text-red-500">Reason: {doc.rejectionReason}</p>}
                            </div>
                            <div>
                                {doc.status === 'Pending' || doc.status === 'Rejected' ? (
                                    <button 
                                        onClick={() => setSelectedDocument(doc)} 
                                        className="bg-[#76ABAE] text-white px-4 py-2 rounded hover:bg-[#6b9a94] transition"
                                    >
                                        {doc.status === 'Rejected' ? 'Re-upload Document' : 'Upload Document'}
                                    </button>
                                ) : (
                                    <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded cursor-not-allowed">
                                        {doc.status === 'Approved' ? 'View Document' : 'Under Review'}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Approved Documents Section */}
                <h2 className="text-xl font-semibold mt-8 mb-4">Approved Documents</h2>
                {approvedDocuments.length > 0 ? (
                    <div className="space-y-4">
                        {approvedDocuments.map((doc) => (
                            <div key={doc.id} className="p-4 border rounded-lg shadow-sm flex justify-between items-center bg-[#2d6b6e]">
                                <div>
                                    <h3 className="text-lg font-semibold">{doc.name}</h3>
                                    <p className="text-sm text-gray-400">{doc.description}</p>
                                    <p className="text-sm text-gray-400">Approved on: {doc.dueDate}</p>
                                </div>
                                <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded">
                                    View Document
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No approved documents available yet.</p>
                )}

                {/* Upload Modal */}
                {selectedDocument && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-[#31363F] p-6 rounded-lg shadow-lg w-96">
                            <h2 className="text-xl font-semibold mb-4">Upload {selectedDocument.name}</h2>
                            <p className="text-sm text-gray-300 mb-4">{selectedDocument.description}</p>
                            <input type="file" onChange={handleFileSelect} className="mb-4 w-full" />
                            <button 
                                onClick={() => setSelectedDocument(null)} 
                                className="text-gray-500 hover:text-gray-700 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ClientUploadDoc;
