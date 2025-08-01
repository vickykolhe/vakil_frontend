import React, { useState } from 'react'; // Ensure useState is imported
import Sidebar_lawyer from '../components/Sidebar_lawyer';

const LawyerConsultations = () => {
    const [consultationRequests, setConsultationRequests] = useState([
        {
            id: 1,
            clientName: 'Aarav Sharma',
            date: '2024-11-01',
            time: '10:00 AM',
            status: 'Pending',
            contactInfo: 'aarav.sharma@example.com',
            notes: 'Need advice on family law regarding inheritance matters.'
        },
        {
            id: 2,
            clientName: 'Ishita Patel',
            date: '2024-11-03',
            time: '2:00 PM',
            status: 'Pending',
            contactInfo: 'ishita.patel@example.com',
            notes: 'Seeking help with a criminal case related to property fraud.'
        },
        {
            id: 3,
            clientName: 'Rohan Mehta',
            date: '2024-11-04',
            time: '11:30 AM',
            status: 'Pending',
            contactInfo: 'rohan.mehta@example.com',
            notes: 'Consultation for a property dispute in urban area.'
        },
        {
            id: 4,
            clientName: 'Divya Nair',
            date: '2024-11-05',
            time: '1:00 PM',
            status: 'Pending',
            contactInfo: 'divya.nair@example.com',
            notes: 'Need advice on intellectual property rights for a tech startup.'
        },
        {
            id: 5,
            clientName: 'Amitabh Rao',
            date: '2024-11-06',
            time: '3:00 PM',
            status: 'Pending',
            contactInfo: 'amitabh.rao@example.com',
            notes: 'Consultation regarding a civil lawsuit involving contract breach.'
        },
        {
            id: 6,
            clientName: 'Priya Singh',
            date: '2024-11-07',
            time: '10:00 AM',
            status: 'Pending',
            contactInfo: 'priya.singh@example.com',
            notes: 'Need guidance on family law matters related to child custody.'
        },
        {
            id: 7,
            clientName: 'Vikram Kapoor',
            date: '2024-11-08',
            time: '4:00 PM',
            status: 'Pending',
            contactInfo: 'vikram.kapoor@example.com',
            notes: 'Seeking advice on business formation and tax planning.'
        },
        {
            id: 8,
            clientName: 'Ananya Iyer',
            date: '2024-11-09',
            time: '5:30 PM',
            status: 'Pending',
            contactInfo: 'ananya.iyer@example.com',
            notes: 'Consulting about a personal injury case from a traffic accident.'
        }
    ]);
    

    const [filter, setFilter] = useState('all');

    const handleAccept = (id) => {
        setConsultationRequests((prev) =>
            prev.map((req) =>
                req.id === id ? { ...req, status: 'Accepted' } : req
            )
        );
    };

    const handleDecline = (id) => {
        setConsultationRequests((prev) =>
            prev.map((req) =>
                req.id === id ? { ...req, status: 'Declined' } : req
            )
        );
    };

    const filteredRequests = consultationRequests.filter((req) => {
        if (filter === 'all') return true;
        return req.status.toLowerCase() === filter;
    });

    return (
        <div className="flex">
            <Sidebar_lawyer />
            <div className="flex-1 p-6 bg-gray-100">
                <h1 className="text-3xl font-bold mb-6">Consultation Requests</h1>
                <div className="mb-4">
                    <button 
                        onClick={() => setFilter('all')} 
                        className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        All
                    </button>
                    <button 
                        onClick={() => setFilter('pending')} 
                        className={`px-4 py-2 rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        Pending
                    </button>
                    <button 
                        onClick={() => setFilter('accepted')} 
                        className={`px-4 py-2 rounded ${filter === 'accepted' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        Accepted
                    </button>
                    <button 
                        onClick={() => setFilter('declined')} 
                        className={`px-4 py-2 rounded ${filter === 'declined' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        Declined
                    </button>
                </div>
                <div className="bg-white rounded-lg shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredRequests.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-4">No consultation requests available.</td>
                                </tr>
                            ) : (
                                filteredRequests.map((request) => (
                                    <tr key={request.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.clientName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.time}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.status}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.notes}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {request.status === 'Pending' && (
                                                <div>
                                                    <button 
                                                        onClick={() => handleAccept(request.id)} 
                                                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                                                    >
                                                        Accept
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDecline(request.id)} 
                                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                                    >
                                                        Decline
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LawyerConsultations;
