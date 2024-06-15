import React, { useState, useEffect } from "react";
import image from "../../assets/Amul.jpg"; // Ensure this path points to the uploaded image
import image1 from "../../assets/Amul.jpg";
import image2 from "../../assets/meat.png";
import image3 from "../../assets/onion.png";

import bellPaper from "../../assets/category/bell-peper.jpg";
import bhindi from "../../assets/category/bhindi.png";
import carrot from "../../assets/category/carrot.png";
import coconut from "../../assets/category/coconut.png";
import ghee from "../../assets/category/ghee.jpg";
import corn from "../../assets/category/corn.png";
import fruits from "../../assets/category/fruits.png";
import lychee from "../../assets/category/lychee.png";
import mango from "../../assets/category/mango.png";
import milk1 from "../../assets/category/milk1.png";
import offseason from "../../assets/category/offseason.png";
import onion from "../../assets/category/onion.png";
import meat from "../../assets/category/meat.png";
import Apple from "../../assets/category/apple.png";
import paneer from "../../assets/category/paneer.png";
import parsley from "../../assets/category/parsley.png";
import tomato from "../../assets/category/tomato.png";
import tumeric from "../../assets/category/turmeric.png";
import veg from "../../assets/category/veg.png";
import watermelon from "../../assets/category/watermelon.png";
import yogurt from "../../assets/category/yogurt.webp";
import { useParams } from "react-router-dom";
import useBookedItem from "../../globalState";

const fresh = [
  {
    id: 1,
    name: "Bell Pepper",
    img: bellPaper,
    detail: "Rich in vitamins and antioxidants.",
    rating: "★★★★☆",
    ratings_count: 94,
    price: "NRs. 70",
    quantity: 1,
    subscription: "Subscribe",
    add_to_basket: "Add to Basket",
    product_description: "Bell peppers are rich in vitamins and antioxidants, used in a variety of dishes. They can be consumed raw or cooked.",
    shelf_life: "7 days",
    country_of_origin: "Nepal"
  },
  {
    id: 2,
    name: "Bhindi",
    img: bhindi,
    detail: "Nutritious vegetable, also known as okra.",
    rating: "★★★★☆",
    ratings_count: 80,
    price: "NRs. 50",
    quantity: 1,
    subscription: "Subscribe",
    add_to_basket: "Add to Basket",
    product_description: "Bhindi, also known as okra, is a nutritious vegetable. It is a good source of vitamins and minerals.",
    shelf_life: "5 days",
    country_of_origin: "Nepal"
  },
  {
    id: 3,
    name: "Carrot",
    img: carrot,
    detail: "High in beta-carotene, good for vision.",
    rating: "★★★★☆",
    ratings_count: 120,
    price: "NRs. 60",
    quantity: 1,
    subscription: "Subscribe",
    add_to_basket: "Add to Basket",
    product_description: "Carrots are high in beta-carotene, which is good for vision and overall health. They can be eaten raw or cooked.",
    shelf_life: "10 days",
    country_of_origin: "Nepal"
  },
  {
    id: 4,
    name: "Coconut",
    img: coconut,
    detail: "Versatile fruit used in cooking and beverages.",
    rating: "★★★★☆",
    ratings_count: 90,
    price: "NRs. 40",
    quantity: 1,
    subscription: "Subscribe",
    add_to_basket: "Add to Basket",
    product_description: "Coconut is a versatile fruit used in cooking and beverages. It is rich in nutrients and has a unique flavor.",
    shelf_life: "15 days",
    country_of_origin: "Nepal"
  },
  {
    id: 5,
    name: "Corn",
    img: corn,
    detail: "Sweet and savory vegetable, used worldwide.",
    rating: "★★★★☆",
    ratings_count: 110,
    price: "NRs. 30",
    quantity: 1,
    subscription: "Subscribe",
    add_to_basket: "Add to Basket",
    product_description: "Corn is a sweet and savory vegetable used in many cuisines worldwide. It is rich in fiber and vitamins.",
    shelf_life: "7 days",
    country_of_origin: "Nepal"
  },
  {
    id: 6,
    name: "Lychee",
    img: lychee,
    detail: "Sweet tropical fruit, refreshing and fragrant.",
    rating: "★★★★☆",
    ratings_count: 75,
    price: "NRs. 120",
    quantity: 1,
    subscription: "Subscribe",
    add_to_basket: "Add to Basket",
    product_description: "Lychee is a sweet tropical fruit that is refreshing and fragrant. It is enjoyed for its unique taste and nutritional benefits.",
    shelf_life: "5 days",
    country_of_origin: "Nepal"
  },
  {
    id: 7,
    name: "Mango",
    img: mango,
    detail: "Juicy tropical fruit, rich in vitamin C.",
    rating: "★★★★☆",
    ratings_count: 100,
    price: "NRs. 150",
    quantity: 1,
    subscription: "Subscribe",
    add_to_basket: "Add to Basket",
    product_description: "Mango is a juicy tropical fruit that is rich in vitamin C and enjoyed for its sweetness and flavor.",
    shelf_life: "7 days",
    country_of_origin: "Nepal"
  },
  {
    id: 8,
    name: "Parsley",
    img: parsley,
    detail: "Herb used for flavoring and garnish, rich in nutrients.",
    rating: "★★★☆☆",
    ratings_count: 60,
    price: "NRs. 20",
    quantity: 1,
    subscription: "Subscribe",
    add_to_basket: "Add to Basket",
    product_description: "Parsley is an herb used for flavoring and garnish. It is rich in nutrients and adds a fresh touch to dishes.",
    shelf_life: "5 days",
    country_of_origin: "Nepal"
  },
  {
    id: 9,
    name: "Watermelon",
    img: watermelon,
    detail: "Refreshing fruit, hydrating and low in calories.",
    rating: "★★★★☆",
    ratings_count: 130,
    price: "NRs. 80",
    quantity: 1,
    subscription: "Subscribe",
    add_to_basket: "Add to Basket",
    product_description: "Watermelon is a refreshing fruit that is hydrating and low in calories. It is perfect for hot weather.",
    shelf_life: "5 days",
    country_of_origin: "Nepal"
  }
];

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

  const {id} = useParams();

  const [quantity, setQuantity] = useState(1);
  const [showSubscribeOptions, setShowSubscribeOptions] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showDayPicker, setShowDayPicker] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [orderType, setOrderType] = useState('order');
  const [selectedOrder, setSelectedOrder] = useState(false);

  const {appendBookedItem} = useBookedItem()

  const [pricePerUnit, setPricePerUnit] = useState(0);
  useEffect(()=>{
    setPricePerUnit(fresh[id].price)
    console.log(fresh[id].price)
  },[id])


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
      appendBookedItem({item: fresh[id], quantity: quantity, price: pricePerUnit, date: new Date(), type:"daily"})
    }
    setShowSubscribeOptions(false);
  };

  const handleDaySelect = (day: string) => {
    setSelectedDate(day);
    setOrderType(day + ' subscription');
    setSelectedOrder(true);
    appendBookedItem({item: fresh[id], quantity: quantity, price: pricePerUnit, date: new Date() , type:"weekly"})
    setShowDayPicker(false);
  };

  const handleAddToBasket = () => {
    setShowConfirmMessage(true);
  };

  const handleOrderConfirmation = () => {
    setShowConfirmMessage(false);
    setSelectedOrder(true);
    appendBookedItem({item: fresh[id], quantity: quantity, price: pricePerUnit, date: new Date(), type:"tommorow"})
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
            <img src={fresh[id].img} alt="Product" className="w-72 h-auto" />
          </div>
        </div>

        <div className="w-1/2 p-4">
          <h1 className="text-2xl font-semibold">{fresh[id].name}</h1>
          <div className="flex items-center my-2">
            <span className="text-yellow-500">{fresh[id].rating}</span>
            <span className="ml-2 text-sm text-gray-500">{fresh[id].ratings_count} Ratings</span>
          </div>
          <p className="text-lg text-green-600">{fresh[id].price}</p>
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
            {fresh[id].product_description}
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
              Total Price: NRs. {quantity * fresh[id].price.slice(4)}
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
