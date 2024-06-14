import React from 'react';

const ProductPage: React.FC = () => {
    return (
        <div className="font-sans">
            <header className="flex justify-between p-3 bg-gray-100 border-b border-gray-300">
                <span className="text-sm">8:22</span>
                <div className="flex items-center space-x-2">
                    <span className="text-sm">19.7 KB/s</span>
                    <span className="text-sm">54%</span>
                </div>
            </header>
            <div className="flex justify-center my-5">
                <img src="/path/to/your/image.jpg" alt="Amul Taaza Milk" className="w-40" />
            </div>
            <div className="px-5">
                <h1 className="text-2xl font-bold">₹28</h1>
                <p className="text-sm text-gray-500">(Inclusive of all taxes)</p>
                <button className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded">+ ADD</button>
                <div className="flex justify-around mt-6 border-b border-gray-300">
                    <button className="py-2 text-blue-500 border-b-2 border-blue-500">Details</button>
                    <button className="py-2 text-gray-500">Other Info</button>
                </div>
                <div className="py-5">
                    <h2 className="text-xl font-semibold">Product Description</h2>
                    <p className="mt-2 text-gray-700">Milk is the most common dairy product that is used every day by almost everyone. Consume directly or add to your breakfast cereal, daily tea/coffee, milkshake and smoothies or other baked goods, desserts and puddings. So go ahead and buy Amul Taaza Toned Milk online today. Source of nutrition for all age groups.</p>
                </div>
            </div>
            <div className="flex justify-center my-6">
                <button className="py-2 px-6 bg-blue-500 text-white font-semibold rounded">Subscribe Now</button>
            </div>
        </div>
    );
};

export default ProductPage;
