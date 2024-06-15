import Apple from "../../assets/category/apple.png";
import milk from "../../assets/category/milk.png";
import offseason from "../../assets/category/offseason.png";
import onion from "../../assets/category/onion.png";
import meat from "../../assets/category/meat.png";
import { useNavigate } from "react-router-dom";


import section1 from "../../assets/section1.jpg";

function PromoSection() {
    const appetizerImg = 'https://picsum.photos/600/400?random=1';
    const pastaImg = 'https://picsum.photos/600/400?random=2';

    return (
        <div className="flex flex-col lg:flex-row items-center bg-green-600 text-white p-8 lg:p-16">
            <div className="lg:w-1/2">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                    Treat yourself with Nepal's #1 Basket.
                </h1>
                <p className="text-lg lg:text-2xl mb-8">
                    Fill your bucket till  midnight it will be delivered to your doorstep by 7am.
                </p>
                <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-6 rounded-md">
                    GET STARTED
                </button>
                <p className="text-sm mt-4">
                    *One free appetizer item per box while subscription is active
                </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative">
                    <img src={section1} alt="Appetizer" className="w-64 lg:w-80 shadow-lg rounded-md mb-4" />
                    <div className="absolute top-2 right-2 bg-green-800 text-white px-4 py-1 rounded-full text-xs lg:text-sm">
                        APPS FOR LIFE
                    </div>
                </div>
            </div>
        </div>
    );
}




function Home() {
  const cards = [
    {
      name: "Apple",
      img: Apple,
    },
    {
      name: "Meat",
      img: meat,
    },
    {
      name: "Milk",
      img: milk,
    },
    
    {
      name: "Offseason",
      img: offseason,
    },



  ];

  const offerCard = [
    {
      name: "Onion",
      img: onion,
      price: 80,
      discount: 10,
      amount: 9,
      unit: "kg",
    },
    // meat
    {
      name: "Meat",
      img: meat,
      price: 450,
      discount: 10,
      amount: 1,
      unit: "kg",
    },
    {
      name: "Offseason",
      img: offseason,
      price: 100,
      discount: 10,
      amount: 9,
      unit: "kg",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
        <section>
            <PromoSection/>
        </section>
      <section className="ml-20 mt-10 flex flex-col">
        <h2 className="font-sans font-medium mb-4 text-center">Explore Categories</h2>
        <div className="flex w-full justify-center gap-10 ">
          {cards.map((card, index) => (
            <div key={index} className=" text-center w-40  shrink-0 hover:shadow-sm cursor-pointer">
              <div className=" w-32 h-28 flex justify-center items-center   py-4 box-content">
                <img width={120} src={card.img} alt={card.name} className="" />
              </div>
              <p className="text-slate-500">{card.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="ml-20 mt-10 mb-10">
        <hr/>
        <h2 className="font-sans font-medium mb-10 text-center mt-10">Offers</h2>
        <div className="flex gap-10 justify-center">
        {offerCard.map((oCard, index) => {
          return (
            <div key={index} className="shrink-0">
              <div className="flex gap-6 bg-white w-full max-w-md px-6 py-4 rounded-lg shadow-lg justify-between">
                <div className="flex flex-col justify-between">
                  <div className="mb-4">
                    <p className="text-gray-700">
                      MRP:{" "}
                      <span className="text-red-600 line-through">Rs {oCard.price}</span>{" "}
                      <span className=" font-bold">Rs {oCard.price - oCard.discount}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-800">{oCard.name}</p>
                    <p className="text-sm text-gray-500">{oCard.amount}{oCard.unit}</p>
                  </div>
                  <button className="btn bg-accent text-white px-4 py-2 rounded-md hover:bg-accent transition duration-300" onClick={() => {navigate("/purchase-page")}}>
                    Order Now
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="w-24 h-24 object-contain"
                    src={oCard.img}
                    alt="Onion"
                  />
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </section>
    </div>
  );
}

export default Home;
