import React, { useState } from "react";
import ImageUpload from "./imageUpload";

type UserProfile = {
  name: string;
  id: string;
  age: number;
  gender: string;
  country: string;
  rating: number;
  email: string;
  phone: string;
  rate: number;
  currency: string;
};

const Profile: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const userProfile: UserProfile = {
    name: "Atul Tiwari",
    id: "12345",
    age: 18,
    gender: "Male",
    country: "Nepal",
    email: "atultiwari@gmail.com",
    rating: 4.7,
    phone: "9711111111",
    rate: 1000,
    currency: "Nrs",
  };

  return (
    <div className="font-sans mx-auto max-w-2xl pl-0">
      <div className="text-center">
        <ImageUpload header={true} isEditMode={isEditMode} />
        <div className="relative flex items-center justify-center w-full mt-[-40px]">
          <div className="absolute left-0 ml-4">
            <ImageUpload header={false} isEditMode={isEditMode} />
          </div>
          <div className="flex-grow text-center mt-12">
            <h2 className="text-xl font-bold">{userProfile.name}</h2>
           
          </div>
          <div className="absolute right-0 mr-4 mt-12">
            <button
              className={`px-4 py-2 rounded-lg cursor-pointer ${
                isEditMode ? "bg-green-500" : "bg-blue-500"
              } text-white`}
              onClick={toggleEditMode}
            >
              {isEditMode ? "Done" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
