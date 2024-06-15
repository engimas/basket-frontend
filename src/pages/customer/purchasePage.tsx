import React, { useState, useEffect } from "react";
import image from "../../assets/Amul.jpg"; // Ensure this path points to the uploaded image
import image1 from "../../assets/Amul.jpg";
import image2 from "../../assets/meat.png";
import image3 from "../../assets/onion.png";

const ConfirmTr = () => {
  return (
    <div className="wrapper">
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  );
};

const PurchasePage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [showSubscribeOptions, setShowSubscribeOptions] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showDayPicker, setShowDayPicker] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [orderType, setOrderType] = useState('order');
  const [selectedOrder, setSelectedOrder] = useState(false);

  const pricePerUnit = 80;

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prevQuantity) =>
      increment ? prevQuantity + 1 : prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };

  const handleSubscribeClick = () => {
    setShowSubscribeOptions(true);
  };

  const handleSubscriptionSelect = (option: string) => {
    if (option === 'weekly') {
      setShowDayPicker(true);
    } else {
      setOrderType(option + ' subscription');
      setSelectedOrder(true);
    }
    setShowSubscribeOptions(false);
  };

  const handleDaySelect = (day: string) => {
    setSelectedDate(day);
    setOrderType(day + ' subscription');
    setSelectedOrder(true);
    setShowDayPicker(false);
  };

  const handleAddToBasket = () => {
    setShowConfirmMessage(true);
  };

  const handleOrderConfirmation = () => {
    setShowConfirmMessage(false);
    setSelectedOrder(true);
  };

  useEffect(() => {
    if (selectedOrder) {
      const timer = setTimeout(() => {
        setSelectedOrder(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [selectedOrder]);

  const handleOutsideClick = (event: any, closeFunction: () => void) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeFunction();
    }
  };

  return (
    <div className="font-sans max-w-4xl mx-auto p-4 bg-base-100">
      <div className="flex">
        <div className="w-1/2 p-4">
          <div className="flex justify-center mb-4">
            <img src={image} alt="Product" className="w-72 h-auto" />
          </div>
        </div>

        <div className="w-1/2 p-4">
          <h1 className="text-2xl font-semibold">Amul Taaza Toned Milk</h1>
          <div className="flex items-center my-2">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="ml-2 text-sm text-gray-500">94 Ratings</span>
          </div>
          <p className="text-lg text-green-600">NRs. 80</p>
          <div className="my-4">
            <div className="flex items-center mb-4">
              <div className="flex items-center border rounded">
                <button
                  className="px-2 py-1 bg-green-200 text-green-700 rounded-l"
                  onClick={() => handleQuantityChange(false)}
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button
                  className="px-2 py-1 bg-green-200 text-green-700 rounded-r"
                  onClick={() => handleQuantityChange(true)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                className="flex-grow py-2 text-white bg-green-500 rounded"
                onClick={handleSubscribeClick}
              >
                Subscribe
              </button>
              <button
                className="flex-grow py-2 text-white bg-orange-500 rounded"
                onClick={handleAddToBasket}
              >
                Add to Basket
              </button>
            </div>
          </div>
          <div className="border-t border-b py-2 my-4">
            <h2 className="text-lg font-medium">Product Description</h2>
            <p className="text-gray-700 mt-2">
              Milk is the most common dairy product that is used every day by
              almost everyone. Consume directly or add to your breakfast cereal,
              daily tea/coffee, milkshake and smoothies or other baked goods,
              desserts and puddings. So go ahead and buy Amul Taaza Toned Milk
              online today. Source of nutrition for all age groups.
            </p>
          </div>
          <div className="my-4">
            <h2 className="text-lg font-medium">Shelf life</h2>
            <p className="text-gray-700 mt-2">2 days</p>
          </div>
          <div className="my-4">
            <h2 className="text-lg font-medium">Country of origin</h2>
            <p className="text-gray-700 mt-2">Nepal</p>
          </div>
        </div>
      </div>
      <div className="border-t py-4">
        <h2 className="text-lg font-medium">Other Products</h2>
        <div className="flex space-x-4 mt-4">
          <div className="border p-2 w-1/3">
            <img src={image1} alt="Related product" className="w-full h-auto" />
            <h3 className="text-sm font-medium mt-2">
              Mother Dairy Toned Milk Pouch
            </h3>
            <p className="text-sm text-gray-700">1 Ltr.</p>
            <p className="text-lg text-green-600">Nrs. 80</p>
            <button className="w-full py-1 mt-2 text-blue-500 border border-blue-500 rounded">
              + ADD
            </button>
          </div>
          <div className="border p-2 w-1/3">
            <img src={image2} alt="Related product" className="w-full h-64" />
            <h3 className="text-sm font-medium mt-2">Chicken Meat</h3>
            <p className="text-sm text-gray-700">1 Kg</p>
            <p className="text-lg text-green-600">NRs. 450</p>
            <button className="w-full py-1 mt-2 text-blue-500 border border-blue-500 rounded">
              + ADD
            </button>
          </div>
          <div className="border p-2 w-1/3">
            <img src={image3} alt="Related product" className="w-full h-auto" />
            <h3 className="text-sm font-medium mt-2">Onions</h3>
            <p className="text-sm text-gray-700">1 Kg</p>
            <p className="text-lg text-green-600">NRs. 80</p>
            <button className="w-full py-1 mt-2 text-blue-500 border border-blue-500 rounded">
              + ADD
            </button>
          </div>
        </div>
      </div>

      {showSubscribeOptions && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 modal-overlay"
          onClick={(e) => handleOutsideClick(e, () => setShowSubscribeOptions(false))}
        >
          <div
            className="bg-white p-4 rounded"
            style={{ width: '300px', height: '220px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-medium" style={{ textAlign: 'center' }}>Choose Subscription Plan</h2>
            <div className="mt-8 space-y-4">
              <button
                className="block w-full py-2 bg-green-500 text-white rounded"
                onClick={() => handleSubscriptionSelect("daily")}
              >
                Daily
              </button>
              <button
                className="block w-full py-2 bg-green-500 text-white rounded"
                onClick={() => handleSubscriptionSelect("weekly")}
              >
                Weekly
              </button>
            </div>
          </div>
        </div>
      )}

      {showDayPicker && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 modal-overlay"
          onClick={(e) => handleOutsideClick(e, () => setShowDayPicker(false))}
        >
          <div
            className="bg-white p-4 rounded"
            style={{ width: '300px', height: '400px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-medium" style={{ textAlign: 'center' }}>Choose a Day of the Week</h2>
            <div className="mt-4 space-y-2">
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <button
                  key={day}
                  className="block w-full py-2 bg-green-500 text-white rounded"
                  onClick={() => handleDaySelect(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-lg font-medium">
              Your {orderType} has been submitted <ConfirmTr />
            </h2>
          </div>
        </div>
      )}

      {showConfirmMessage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 modal-overlay"
          onClick={(e) => handleOutsideClick(e, () => setShowConfirmMessage(false))}
        >
          <div className="bg-white p-4 rounded" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-medium">Confirm Order</h2>
            <h3 className="text-lg font-medium prose">
              Total Price: NRs. {quantity * pricePerUnit}
            </h3>
            <p className="mt-2">Are you sure you want to place this order?</p>
            <div className="mt-4 flex space-x-4">
              <button
                className="flex-grow py-2 bg-green-500 text-white rounded"
                onClick={handleOrderConfirmation}
              >
                Confirm
              </button>
              <button
                className="flex-grow py-2 bg-red-500 text-white rounded"
                onClick={() => setShowConfirmMessage(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchasePage;
