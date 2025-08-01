import React, { useState } from 'react';
import Sidebar_lawyer from '../components/Sidebar_lawyer';
import lawyerPhoto from '../components/lawyerPhoto.jpg';

function LawyerProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [lawyerData, setLawyerData] = useState({
        name: "Avinash Mishra",
        photo: lawyerPhoto,
        personalInfo: {
            email: "avinashm@example.com",
            phone: "1234567890",
            address: "Nagpur",
        },
        professionalInfo: {
            practiceAreas: ["Corporate Law", "Land Law"],
            yearsOfExperience: 5,
            education: "LLB Institute of Pune, Pune",
        },
    });

    const handleInputChange = (e, category, field) => {
        setLawyerData((prevData) => ({
            ...prevData,
            [category]: {
                ...prevData[category],
                [field]: e.target.value,
            },
        }));
    };

    const handleSave = () => {
        setIsEditing(false);
        // Add functionality to save the updated data if required
    };

    return (
        <div className="flex">
            <Sidebar_lawyer />
            <div className="flex-1 p-6 bg-[#222831]">
                <h1 className="text-3xl text-[#EEEEEE] font-bold mb-6">Lawyer Profile</h1>
                <div className="flex items-center mb-6">
                    <img
                        src={lawyerData.photo}
                        alt="Lawyer"
                        className="w-32 h-32 rounded-full border-4 border-[#76ABAE] mr-4"
                    />
                    <div>
                        <h2 className="text-2xl text-[#EEEEEE] font-semibold">{lawyerData.name}</h2>
                    </div>
                </div>

                <h3 className="text-xl text-[#EEEEEE] font-semibold mb-2">Personal Information</h3>
                <div className="bg-[#31363F] p-4 rounded-lg shadow">
                    <p className="mb-2 text-[#EEEEEE]">
                        Email: 
                        {isEditing ? (
                            <input
                                type="email"
                                value={lawyerData.personalInfo.email}
                                onChange={(e) => handleInputChange(e, 'personalInfo', 'email')}
                                className="border rounded p-1 ml-2 bg-[#222831] text-[#EEEEEE]"
                            />
                        ) : (
                            <span className="ml-2">{lawyerData.personalInfo.email}</span>
                        )}
                    </p>
                    <p className="mb-2 text-[#EEEEEE]">
                        Phone: 
                        {isEditing ? (
                            <input
                                type="tel"
                                value={lawyerData.personalInfo.phone}
                                onChange={(e) => handleInputChange(e, 'personalInfo', 'phone')}
                                className="border rounded p-1 ml-2 bg-[#222831] text-[#EEEEEE]"
                            />
                        ) : (
                            <span className="ml-2">{lawyerData.personalInfo.phone}</span>
                        )}
                    </p>
                    <p className="mb-2 text-[#EEEEEE]">
                        Address: 
                        {isEditing ? (
                            <input
                                type="text"
                                value={lawyerData.personalInfo.address}
                                onChange={(e) => handleInputChange(e, 'personalInfo', 'address')}
                                className="border rounded p-1 ml-2 bg-[#222831] text-[#EEEEEE]"
                            />
                        ) : (
                            <span className="ml-2">{lawyerData.personalInfo.address}</span>
                        )}
                    </p>
                </div>

                <h3 className="text-xl text-[#EEEEEE] font-semibold mt-6 mb-2">Professional Information</h3>
                <div className="bg-[#31363F] p-4 rounded-lg shadow">
                    <p className="mb-2 text-[#EEEEEE]">
                        Practice Areas: 
                        {isEditing ? (
                            <input
                                type="text"
                                value={lawyerData.professionalInfo.practiceAreas.join(', ')}
                                onChange={(e) => handleInputChange(e, 'professionalInfo', 'practiceAreas')}
                                className="border rounded p-1 ml-2 bg-[#222831] text-[#EEEEEE]"
                            />
                        ) : (
                            <span className="ml-2">{lawyerData.professionalInfo.practiceAreas.join(', ')}</span>
                        )}
                    </p>
                    <p className="mb-2 text-[#EEEEEE]">
                        Years of Experience: 
                        {isEditing ? (
                            <input
                                type="number"
                                value={lawyerData.professionalInfo.yearsOfExperience}
                                onChange={(e) => handleInputChange(e, 'professionalInfo', 'yearsOfExperience')}
                                className="border rounded p-1 ml-2 bg-[#222831] text-[#EEEEEE]"
                            />
                        ) : (
                            <span className="ml-2">{lawyerData.professionalInfo.yearsOfExperience}</span>
                        )}
                    </p>
                    <p className="mb-2 text-[#EEEEEE]">
                        Education: 
                        {isEditing ? (
                            <input
                                type="text"
                                value={lawyerData.professionalInfo.education}
                                onChange={(e) => handleInputChange(e, 'professionalInfo', 'education')}
                                className="border rounded p-1 ml-2 bg-[#222831] text-[#EEEEEE]"
                            />
                        ) : (
                            <span className="ml-2">{lawyerData.professionalInfo.education}</span>
                        )}
                    </p>
                </div>

                <div className="mt-6">
                    {isEditing ? (
                        <button 
                            onClick={handleSave} 
                            className="bg-[#76ABAE] text-[#222831] px-4 py-2 rounded hover:bg-[#67989B]"
                        >
                            Save
                        </button>
                    ) : (
                        <button 
                            onClick={() => setIsEditing(true)} 
                            className="bg-[#76ABAE] text-[#222831] px-4 py-2 rounded hover:bg-[#67989B]"
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LawyerProfile;
