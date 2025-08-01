import React, { useEffect, useState } from 'react';
import ClientSidebar from '../components/ClientSidebar';
import axios from 'axios';
const LawyerList = () => {
  const [lawyers, setLawyers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    experience: '',
    specialization: '',
  });

  // Fetch the list of lawyers from backend API
  useEffect(() => {
    const getLawyer = async()=>{
      try {
        const res = await axios.get('http://localhost:4001/lawyer');
        console.log(res.data);
        setLawyers(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getLawyer();
  }, []);

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Filtered lawyers based on client-side filters
  const filteredLawyers = lawyers.filter((lawyer) => {
    const { location, experience, specialization } = filters;
    return (
      lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!location || lawyer.location === location) &&
      (!experience || lawyer.experience >= parseInt(experience)) &&
      (!specialization || lawyer.specialization === specialization)
    );
  });

  const uniqueLocations = [...new Set(lawyers.map((lawyer) => lawyer.location))];
  const uniqueSpecializations = [...new Set(lawyers.map((lawyer) => lawyer.specialization))];

  return (
    <div className="min-h-screen flex bg-[#222831]">
      <ClientSidebar />
      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-3xl font-bold text-center text-[#76ABAE] mb-10">Find the Right Lawyer</h2>
        
        <div className="container mx-auto mt-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by lawyer's name..."
              className="input input-bordered w-full md:w-1/4 text-[#222831] bg-[#EEEEEE]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="select select-bordered w-full md:w-1/4 text-[#222831] bg-[#EEEEEE]"
            >
              <option value="">Select Location</option>
              {uniqueLocations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
            <input
              type="number"
              name="experience"
              placeholder="Min. Experience (years)"
              className="input input-bordered w-full md:w-1/4 text-[#222831] bg-[#EEEEEE]"
              value={filters.experience}
              onChange={handleFilterChange}
            />
            <select
              name="specialization"
              value={filters.specialization}
              onChange={handleFilterChange}
              className="select select-bordered w-full md:w-1/4 text-[#222831] bg-[#EEEEEE]"
            >
              <option value="">Select Specialization</option>
              {uniqueSpecializations.map((specialization, index) => (
                <option key={index} value={specialization}>{specialization}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLawyers.map((lawyer) => (
              <div key={lawyer.id} className="card bg-[#31363F] shadow-md border border-[#EEEEEE] rounded-lg">
                <div className="card-body p-6">
                  <h3 className="text-xl font-bold text-[#76ABAE]">{lawyer.name}</h3>
                  <p className="text-sm text-[#EEEEEE]">Specialization: {lawyer.specialization}</p>
                  <p className="text-sm text-[#EEEEEE] mb-2">Experience: {lawyer.experience} years</p>
                  <p className="text-sm text-[#EEEEEE] mb-4">Location: {lawyer.location}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-outline btn-[#76ABAE]">View Profile</button>
                    <button className="btn btn-sm btn-outline btn-[#76ABAE]">Consult</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerList;
