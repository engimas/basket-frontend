import React from "react";
import { useParams } from "react-router-dom";

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
        bio: "I am a poor farmer from a small village in India. I work hard every day to provide for my family and make a living from farming. Despite the challenges I face, I am proud of my work and the food I produce for my community. My farm, Surya Farms, is known for its diverse range of crops including rice, wheat, and vegetables such as tomatoes, potatoes, and onions.",
        farm: "Surya Farms",
        videos: ["https://www.youtube.com/embed/D7Ks785t4Qg", "https://www.youtube.com/embed/x7ykqehJUAI", "https://www.youtube.com/embed/_qpuQ87Oxtg"],
        image: farmer1,
        fruits: ["mangoes"],
        vegetables: ["carrots", "spinach"],
    },
    {
        id: 2,
        name: "Sita Devi",
        bio: "I come from a long line of farmers in India. Farming is not just a job for me, it is a way of life. I am passionate about sustainable agriculture and preserving our traditional farming practices. I believe in the power of organic farming to nourish both the land and the people. At Ganga Organic Farms, we grow a variety of crops including rice, wheat, lentils, and vegetables like spinach, carrots, and cauliflower.",
        farm: "Ganga Organic Farms",
        videos: ["https://www.youtube.com/embed/TaYMsrioDMs", "https://www.youtube.com/embed/ZBNeY7SRf6A"],
        image: farmer2,
        fruits: ["bananas"],
        vegetables: ["spinach", "carrots", "cauliflower"],
    },
    {
        id: 3,
        name: "Rajesh Verma",
        bio: "I am a third-generation farmer from Punjab, India. Farming is in my blood, and I take great pride in continuing my family's legacy. I specialize in growing wheat and rice using modern agricultural techniques. I am dedicated to providing high-quality grains to the market. Verma Farms is known for its large-scale production of wheat and rice, and we also cultivate crops like corn, barley, and mustard.",
        farm: "Verma Farms",
        videos: ["https://www.youtube.com/embed/EFp1zjlgitk", "https://www.youtube.com/embed/1NueXzxH_vM"],
        image: farmer3,
        fruits: [],
        vegetables: ["corn", "barley", "mustard"],
    },
    {
        id: 4,
        name: "Priya Patel",
        bio: "I am a young and ambitious farmer from Gujarat, India. I have recently started my own organic farm and focus on growing a variety of vegetables and fruits. I believe in sustainable farming practices and aim to provide fresh and healthy produce to my local community. At Green Acres Farm, we cultivate a wide range of vegetables including tomatoes, cucumbers, bell peppers, and fruits like mangoes, bananas, and papayas.",
        farm: "Green Acres Farm",
        videos: ["https://www.youtube.com/embed/EEpsEuzHgTg", "https://www.youtube.com/embed/EFp1zjlgitk"],
        image: farmer4,
        fruits: ["mangoes", "bananas", "papayas"],
        vegetables: ["tomatoes", "cucumbers", "bell peppers"],
    },
    // Add more farmers here
    {
        id: 5,
        name: "Amit Singh",
        bio: "I am a farmer from the state of Uttar Pradesh, India. I have been practicing organic farming for over a decade and have seen the positive impact it has on the environment and the quality of the produce. I am passionate about promoting sustainable agriculture and educating others about its benefits. Harmony Farms, my farm, specializes in growing a variety of crops including rice, wheat, lentils, and vegetables such as spinach, eggplant, and okra.",
        farm: "Harmony Farms",
        videos: ["https://www.youtube.com/embed/GxcbCTMjRpU", "https://www.youtube.com/embed/pcm9dqq2IBU"],
        image: farmer5,
        fruits: [],
        vegetables: ["spinach", "eggplant", "okra"],
    },
    {
        id: 6,
        name: "Anita Sharma",
        bio: "I am a female farmer from Rajasthan, India. I have overcome many challenges to pursue my passion for farming. I specialize in growing traditional Indian crops and herbs. I am proud to be a part of the agricultural community and contribute to the food security of our nation. At Sharma Organic Farm, we grow a variety of crops including wheat, millet, mustard, and herbs like mint, coriander, and fenugreek.",
        farm: "Sharma Organic Farm",
        videos: ["https://www.youtube.com/embed/EEpsEuzHgTg", "https://www.youtube.com/embed/3Y6_q2MF90g"],
        image: farmer6,
        fruits: [],
        vegetables: ["wheat", "millet", "mustard", "mint", "coriander", "fenugreek"],
    },
];

const FarmerPage = () => {
    const { id } = useParams<{ id: string }>();
    const farmer = farmers.find((farmer) => farmer.id === parseInt(id));

    if (!farmer) {
        return <div>Farmer not found</div>;
    }

    return (
        <div className="font-Inter flex flex-col items-center">
            <img src={farmer.image} alt={farmer.name} className="w-56 h-56 object-cover rounded-full mx-auto" />
            <h2 className="text-3xl font-bold mb-2">{farmer.name}</h2>
            <p className="text-gray-800 mt-0">Farm: {farmer.farm}</p>
            <p className="text-lg text-center max-w-screen-lg mt-5">{farmer.bio}</p>
            {/* add fruits and vegetables */}
            <div className="flex flex-row space-x-20 mt-5">
            <div className="mt-5">
                <h3 className="text-xl font-bold">Fruits:</h3>
                <ul className="list-disc list-inside">
                    {farmer.fruits.length > 0 ? (
                        farmer.fruits.map((fruit, index) => (
                            <li key={index}>{fruit}</li>
                        ))
                    ) : (
                        <li>No fruits grown</li>
                    )}
                </ul>
            </div>
            <div className="mt-5">
                <h3 className="text-xl font-bold">Vegetables:</h3>
                <ul className="list-disc list-inside">
                    {farmer.vegetables.length > 0 ? (
                        farmer.vegetables.map((vegetable, index) => (
                            <li key={index}>{vegetable}</li>
                        ))
                    ) : (
                        <li>No vegetables grown</li>
                    )}
                </ul>
            </div>
            </div>
            <h3 className="text-xl font-bold mt-10">Videos:</h3>

            <ul className="grid grid-cols-3 gap-10">
                {farmer.videos.map((video, index) => (
                    <li key={index} className="mt-2">
                        <iframe src={video} title={`Video ${index + 1}`} className="w-full h-48" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FarmerPage;