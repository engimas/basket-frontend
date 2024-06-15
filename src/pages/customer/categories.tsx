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

function Categories() {
  // carrot, coconut, corn, lychee, mango, parsley, watermelon
  const fresh = [
    {
      name: "Bell Pepper",
      img: bellPaper,
      detail: "Rich in vitamins and antioxidants.",
    },
    {
      name: "Bhindi",
      img: bhindi,
      detail: "Nutritious vegetable, also known as okra.",
    },
    {
      name: "Carrot",
      img: carrot,
      detail: "High in beta-carotene, good for vision.",
    },
    {
      name: "Coconut",
      img: coconut,
      detail: "Versatile fruit used in cooking and beverages.",
    },
    {
      name: "Corn",
      img: corn,
      detail: "Sweet and savory vegetable, used worldwide.",
    },
    {
      name: "Lychee",
      img: lychee,
      detail: "Sweet tropical fruit, refreshing and fragrant.",
    },
    {
      name: "Mango",
      img: mango,
      detail: "Juicy tropical fruit, rich in vitamin C.",
    },
    {
      name: "Parsley",
      img: parsley,
      detail: "Herb used for flavoring and garnish, rich in nutrients.",
    },
    {
      name: "Watermelon",
      img: watermelon,
      detail: "Refreshing fruit, hydrating and low in calories.",
    },
  ];

  // offseason
  // tumeric, bellPaper, bhindi, corn, Apple
  const offseasons = [
    {
      name: "Tumeric",
      img: tumeric,
      detail: "Turmeric is known for its anti-inflammatory properties.",
    },
    {
      name: "Bell Pepper",
      img: bellPaper,
      detail: "Bell peppers are rich in vitamins and antioxidants.",
    },
    {
      name: "Bhindi",
      img: bhindi,
      detail: "Bhindi, also known as okra, is a nutritious vegetable.",
    },
    {
      name: "Corn",
      img: corn,
      detail: "Corn is a versatile vegetable used in many cuisines.",
    },
    {
      name: "Apple",
      img: Apple,
      detail: "Apples are a good source of fiber and vitamins.",
    },
  ];

  const dairy = [
    {
      name: "Ghee",
      img: ghee,
      detail: "Ghee is clarified butter commonly used in Indian cooking.",
    },
    {
      name: "Milk",
      img: milk1,
      detail: "Milk is a nutritious dairy product consumed worldwide.",
    },
    {
      name: "Yogurt",
      img: yogurt,
      detail:
        "Yogurt is a fermented dairy product known for its probiotic benefits.",
    },
    {
      name: "Paneer",
      img: paneer,
      detail: "Paneer is a fresh cheese common in Indian cuisine.",
    },
  ];

  return (
    <>
      <section className="px-10 pt-10 mx-auto">
        <h1 className="text-xl font-sans font-semibold">Categories</h1>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Category</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="p-10">
        <h1 className="text-lg font-sans font-medium"># Fresh In Store</h1>
        <div className="flex flex-row flex-wrap card pt-5 gap-5">
          {fresh.map((item, index) => (
            <div
              key={index}
              className="card w-64 bg-base-100 shadow-xl image-full"
            >
              <figure>
                <img src={item.img} alt={item.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.detail}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-10">
        <h1 className="text-lg font-sans font-medium"># Off Season</h1>
        <div className="flex flex-row flex-wrap card pt-5 gap-5">
          {offseasons.map((item, index) => (
            <div className="card w-72 h-80 bg-base-100 shadow-xl justify-between">
              <figure>
                <img
                  src={item.img}
                  alt="off season"
                  className="object-contain w-full h-40"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-accent text-white">NEW</div>
                </h2>
                <p>{item.detail}</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-accent hover:bg-accent text-white">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-10">
        <h1 className="text-lg font-sans font-medium"># Dairy</h1>
        <div className="flex flex-row flex-wrap card pt-5 gap-5">
          {dairy.map((item, index) => (
            <div
            key={index}
            className="card w-64 bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src={item.img} alt={item.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.detail}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Categories;
