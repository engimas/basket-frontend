import React, { useState } from "react";
import ImageUpload from "./imageUpload";
import History from "../pages/customer/history";

type UserProfile = {
  name: string;
  location: string;
  phone: string;
  email: string;
};

const Profile: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
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
                <input
                  type="text"
                  name="location"
                  value={userProfile.location}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 w-full mb-2"
                />
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
    </div>
  );
};

export default Profile;
