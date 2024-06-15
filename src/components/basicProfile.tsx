import React, { useState } from "react";
import ImageUpload from "./imageUpload";
import History from "../pages/customer/history";
import marker from "../assets/marker.svg";
import LocationSelection from "./locationSelection";
import Modal from "react-modal";

type UserProfile = {
  name: string;
  location: string;
  phone: string;
  email: string;
};

const Profile: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "Atul Tiwari",
    location: "Kupondole -10, Lalitpur, Nepal",
    phone: "9711111111",
    email: "atultiwari@gmail.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleLocationSelection = (selectedLocation: string) => {
    setUserProfile({ ...userProfile, location: selectedLocation });
    setIsModalOpen(false);
  };

  return (
    <div className="font-sans mx-auto max-w-2xl p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full">
        <div className="flex items-center mb-4">
          <ImageUpload header={false} isEditMode={isEditMode} />
          <div className="ml-4 flex-grow">
            {isEditMode ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={userProfile.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 w-full mb-2"
                />
                <div className="w-full flex justify-end items-center relative">
                  <input
                    type="text"
                    name="location"
                    value={userProfile.location}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full mb-2 truncate"
                  />
                  <img
                    src={marker}
                    className="absolute mb-2 mr-2 w-8 cursor-pointer bg-white"
                    alt="Location Marker"
                    onClick={() => setIsModalOpen(true)}
                  />
                </div>
                <input
                  type="text"
                  name="phone"
                  value={userProfile.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 w-full mb-2"
                />
                <input
                  type="email"
                  name="email"
                  value={userProfile.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 w-full mb-2"
                />
              </>
            ) : (
              <>
                <p className="text-xl font-bold">Name: {userProfile.name}</p>
                <p>Address: {userProfile.location}</p>
                <p>Phone: {userProfile.phone}</p>
                <p>Email: {userProfile.email}</p>
              </>
            )}
            <button
              className={`mt-4 px-4 py-2 rounded ${
                isEditMode ? "bg-green-500" : "bg-blue-500"
              } text-white`}
              onClick={toggleEditMode}
            >
              {isEditMode ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
      <History />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Select Location"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-4 rounded-lg w-11/12 md:w-1/2" style={{height: '600px', overflow: 'auto'}}>
          <button
            onClick={() => setIsModalOpen(false)}
            className="float-right bg-red-500 text-white rounded px-2 py-1"
          >
            Close
          </button>
          <LocationSelection onLocationSelect={handleLocationSelection} />
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
