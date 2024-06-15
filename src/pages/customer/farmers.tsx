import { useState } from "react";

import { Link } from "react-router-dom";
import farmer2 from "../../assets/farmers/farmer2.png";
import farmer3 from "../../assets/farmers/farmer3.png";
import farmer4 from "../../assets/farmers/farmer4.png";
import farmer5 from "../../assets/farmers/farmer5.png";
import farmer6 from "../../assets/farmers/farmer6.png";
import farmer1 from "../../assets/farmers/farmer1.png";


const farmers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    bio: "I am a poor farmer from a small village in India. I work hard every day to provide for my family and make a living from farming. Despite the challenges I face, I am proud of my work and the food I produce for my community.",
    farm: "Surya Farms",
    videos: ["https://www.youtube.com/embed/video1", "https://www.youtube.com/embed/video2", "https://www.youtube.com/embed/video3"],
    image: farmer1,
  },
  {
    id: 2,
    name: "Sita Devi",
    bio: "I come from a long line of farmers in India. Farming is not just a job for me, it is a way of life. I am passionate about sustainable agriculture and preserving our traditional farming practices. I believe in the power of organic farming to nourish both the land and the people.",
    farm: "Ganga Organic Farms",
    videos: ["https://www.youtube.com/embed/video4", "https://www.youtube.com/embed/video5"],
    image: farmer2,
  },
  {
    id: 3,
    name: "Rajesh Verma",
    bio: "I am a third-generation farmer from Punjab, India. Farming is in my blood, and I take great pride in continuing my family's legacy. I specialize in growing wheat and rice using modern agricultural techniques. I am dedicated to providing high-quality grains to the market.",
    farm: "Verma Farms",
    videos: ["https://www.youtube.com/embed/video11", "https://www.youtube.com/embed/video12"],
    image: farmer3,
  },
  {
    id: 4,
    name: "Priya Patel",
    bio: "I am a young and ambitious farmer from Gujarat, India. I have recently started my own organic farm and focus on growing a variety of vegetables and fruits. I believe in sustainable farming practices and aim to provide fresh and healthy produce to my local community.",
    farm: "Green Acres Farm",
    videos: ["https://www.youtube.com/embed/video13", "https://www.youtube.com/embed/video14"],
    image: farmer4,
  },
  // Add more farmers here
  {
    id: 5,
    name: "Amit Singh",
    bio: "I am a farmer from the state of Uttar Pradesh, India. I have been practicing organic farming for over a decade and have seen the positive impact it has on the environment and the quality of the produce. I am passionate about promoting sustainable agriculture and educating others about its benefits.",
    farm: "Harmony Farms",
    videos: ["https://www.youtube.com/embed/video15", "https://www.youtube.com/embed/video16"],
    image: farmer5,
  },
  {
    id: 6,
    name: "Anita Sharma",
    bio: "I am a female farmer from Rajasthan, India. I have overcome many challenges to pursue my passion for farming. I specialize in growing traditional Indian crops and herbs. I am proud to be a part of the agricultural community and contribute to the food security of our nation.",
    farm: "Sharma Organic Farm",
    videos: ["https://www.youtube.com/embed/video17", "https://www.youtube.com/embed/video18"],
    image: farmer6,
  },
];


function Farmer() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {farmers.map((farmer) => (
          <div key={farmer.id} className="p-4 border border-gray-300 rounded-lg">
            <Link to={`/farmer/${farmer.id}`}>
          <img src={farmer.image} alt={farmer.name} className="w-36 h-36 object-cover rounded-full mx-auto" />
          <h2 className="mt-4 text-xl font-semibold">{farmer.name}</h2>
          <p className="mt-2 text-gray-500">{farmer.farm}</p>
          <p className="mt-2 text-gray-500">{farmer.bio}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Farmer;