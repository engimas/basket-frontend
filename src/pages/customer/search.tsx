import { Link, useParams } from 'react-router-dom'
import ghee from "../../assets/category/ghee.jpg";
import milk1 from "../../assets/category/milk1.png";
import paneer from "../../assets/category/paneer.png";
import yogurt from "../../assets/category/yogurt.webp";

const dairy = [
    {
        name: "Ghee",
        img: ghee,
        detail: "Ghee is clarified butter commonly used in Indian cooking.",
        category: "Dairy",
        keywords: ["clarified butter", "Indian cooking", "fat", "dairy"],
        nutrition: {
            calories: 123,
            fat: "14g",
            protein: "0g",
            carbs: "0g",
        },
    },
    {
        name: "Milk",
        img: milk1,
        detail: "Milk is a nutritious dairy product consumed worldwide.",
        category: "Dairy",
        keywords: ["milk", "nutritious", "protein", "calcium"],
        nutrition: {
            calories: 42,
            fat: "1g",
            protein: "3.4g",
            carbs:" 5g",
        },
    },
    {
        name: "Yogurt",
        img: yogurt,
        detail: "Yogurt is a fermented dairy product known for its probiotic benefits.",
        category: "Dairy",
        keywords: ["yogurt", "probiotic", "fermented", "dairy"],
        nutrition: {
            calories: 59,
            fat: "0.4g",
            protein: "10g",
            carbs:" 3.6g",
        },
    },
    {
        name: "Paneer",
        img: paneer,
        detail: "Paneer is a fresh cheese common in Indian cuisine.",
        category: "Dairy",
        keywords: ["paneer", "cheese", "Indian cuisine", "protein"],
        nutrition: {
            calories: 265,
            fat: "20g",
            protein: "18g",
            carbs: "1.2g",
        },
    },
];


function Search() {
    const {keyword} = useParams()
    
  return (
    <div>
        <section className="px-40 pt-10 mx-auto">
        <h1 className="text-xl font-sans font-semibold">Search</h1>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="mx-40 px-5 py-10 pt-10 card shadow-lg flex flex-col">
        <span>5 items found for<strong className='text-accent'> "{keyword}"</strong></span>
        <div className="flex flex-row flex-wrap card pt-5 gap-5">
            {dairy.map((item, index) => (
                <div key={index} className="w-80 p-5 card bg-base-100">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.detail}</p>
                <div className="flex flex-row justify-between mt-2">
                    <button className="text-accent">Rs 70</button>
                    <Link to={`/purchase-page`} className="btn bg-accent hover:bg-green-600 text-white">View More</Link>
                </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default Search