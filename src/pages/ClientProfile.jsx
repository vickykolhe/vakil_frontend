import React, { useState } from 'react';
import ClientSidebar from '../components/ClientSidebar';

function ClientProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        personalInfo: {
            fullName: "Varad Jumbad",
            email: "varad.jumbad@example.com",
            phone: "+123456789",
            address: "Bibwewadi, Pune",
        },
        professionalInfo: {
            occupation: "Software Engineer",
            company: "Tech Solutions",
        },
        idProofs: {
            panCard: null,
            aadhaar: null,
            passport: null,
        },
        additionalInfo: "No additional information provided.",
        photo: null,  // Initially no photo is set
    });

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    // Handle input changes for text fields
    const handleChange = (section, field, value) => {
        setProfile(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            }
        }));
    };

    // Toggle edit mode
    const toggleEdit = () => setIsEditing(!isEditing);

    // Handle photo upload
    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedPhoto(URL.createObjectURL(file));
            setProfile(prev => ({ ...prev, photo: file.name }));  // Store file name
        }
    };

    return (
        <div className="flex h-screen bg-[#222831]">
            {/* Sidebar */}
            <ClientSidebar className="h-full" />

            {/* Profile Content */}
            <div className="flex-1 p-6 max-w-4xl mx-auto bg-[#31363F] shadow-md rounded-lg h-full overflow-y-auto">
                <h1 className="text-2xl font-semibold mb-4 text-[#76ABAE]">Client Profile</h1>

                {/* Profile Photo */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-[#76ABAE]">Profile Photo</h2>
                    <div className="flex items-center space-x-4">
                        <div className="w-40 h-40 border border-[#76ABAE] rounded-full overflow-hidden">
                            {selectedPhoto ? (
                                <img src={selectedPhoto} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    No photo
                                </div>
                            )}
                        </div>
                        {isEditing && (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                className="border border-[#76ABAE] p-2 rounded"
                            />
                        )}
                    </div>
                </div>

                {/* Personal Information */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-[#76ABAE]">Personal Information</h2>
                    <div className="space-y-4">
                        {Object.entries(profile.personalInfo).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between">
                                <label className="text-[#EEEEEE] capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleChange("personalInfo", key, e.target.value)}
                                        className="border border-[#76ABAE] p-2 rounded w-2/3"
                                    />
                                ) : (
                                    <p className="text-[#EEEEEE]">{value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Professional Information */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-[#76ABAE]">Professional Information</h2>
                    <div className="space-y-4">
                        {Object.entries(profile.professionalInfo).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between">
                                <label className="text-[#EEEEEE] capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleChange("professionalInfo", key, e.target.value)}
                                        className="border border-[#76ABAE] p-2 rounded w-2/3"
                                    />
                                ) : (
                                    <p className="text-[#EEEEEE]">{value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ID Proofs */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-[#76ABAE]">ID Proofs</h2>
                    <div className="space-y-4">
                        {Object.entries(profile.idProofs).map(([idType, fileName]) => (
                            <div key={idType} className="flex items-center justify-between">
                                <label className="text-[#EEEEEE] capitalize">{idType.replace(/([A-Z])/g, ' $1')}</label>
                                {isEditing ? (
                                    <input
                                        type="file"
                                        onChange={(e) => handlePhotoUpload(e, idType)}
                                        className="border border-[#76ABAE] p-2 rounded w-2/3"
                                    />
                                ) : (
                                    <p className="text-[#EEEEEE]">{fileName ? fileName : "Not uploaded"}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-[#76ABAE]">Additional Information</h2>
                    {isEditing ? (
                        <textarea
                            value={profile.additionalInfo}
                            onChange={(e) => handleChange("additionalInfo", "additionalInfo", e.target.value)}
                            className="border border-[#76ABAE] p-2 rounded w-full h-24"
                        />
                    ) : (
                        <p className="text-[#EEEEEE]">{profile.additionalInfo}</p>
                    )}
                </div>

                {/* Edit/Save Button */}
                <div className="flex justify-end">
                    <button
                        onClick={toggleEdit}
                        className={`px-6 py-2 font-semibold rounded ${isEditing ? 'bg-[#76ABAE] text-[#222831]' : 'bg-blue-500 text-white'} hover:opacity-90`}
                    >
                        {isEditing ? 'Save Changes' : 'Edit Profile'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ClientProfile;
