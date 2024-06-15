import { Link } from "react-router-dom";
import ghee from "../../assets/category/ghee.jpg";
import milk1 from "../../assets/category/milk1.png";
import paneer from "../../assets/category/paneer.png";
import yogurt from "../../assets/category/yogurt.webp";
import TableUI from "../../components/table";
import { IoIosAddCircle } from "react-icons/io";

import { useState } from "react";

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
    type: "Clarified Butter",
    amount: "500g",
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
      carbs: "5g",
    },
    type: "Beverage",
    amount: "1L",
  },
  {
    name: "Yogurt",
    img: yogurt,
    detail:
      "Yogurt is a fermented dairy product known for its probiotic benefits.",
    category: "Dairy",
    keywords: ["yogurt", "probiotic", "fermented", "dairy"],
    nutrition: {
      calories: 59,
      fat: "0.4g",
      protein: "10g",
      carbs: "3.6g",
    },
    type: "Fermented Dairy",
    amount: "200g",
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
    type: "Cheese",
    amount: "250g",
  },
];

function SearchUI(props: { handleSearch: (items) => void }) {
  const [search, setSearch] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);

  const searchItems = (searchKeyword) => {
    if(searchKeyword === "") return setSearchedItems([]);
    const items = dairy.filter((item) => {
      return item.name.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    setSearchedItems(items);
  };

  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Search by name"
        className="input input-primary w-full max-w-xs"
        onInput={(e) => {
          searchItems(e.target.value);
        }}
      />
      <div className="output flex flex-col gap-2 max-h-56 overflow-auto">
        {searchedItems.map((item) => (
          <button
            className="py-2 px-1 hover:bg-slate-200 flex flex-row items-center gap-5"
            onClick={() => props.handleSearch(item)}
          >
            <img width={40} src={item.img} />
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function Stock() {
  const [stocks, setStocks] = useState(dairy);
  const [newStock, setNewStock] = useState({
    name: "",
    img: "",
    detail: "",
    category: "",
    keywords: [],
    nutrition: { calories: 0, fat: "", protein: "", carbs: "" },
    type: "",
    amount: "",
  });
  const handleNewStock = (e) => {
    setStocks([...stocks, newStock]);

    document.getElementById("my_modal_3").close();
  };

  const handleStockChange = (e) => {
    setNewStock({ ...newStock, [e.target.name]: e.target.value });
  };

  const handleDelete = (index) => {
    const newStocks = stocks.filter((stock, i) => i !== index);
    setStocks(newStocks);
  };

  const handleSearch = (items) => {
    setNewStock(items);
  };

  const handleAmountChange = (e) => {
    setNewStock({ ...newStock, amount: e.target.value });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-lg">Add New Stocks</h3>
            <SearchUI handleSearch={handleSearch} />
            <span>Selected: {newStock.name}</span>
            {/* input for amount */}
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              className="input input-primary"
              onInput={handleAmountChange}
              value={newStock.amount}
            />

            <button
              className="bg-accent hover:bg-green-400 btn text-white"
              onClick={handleNewStock}
            >
              Add
            </button>
          </div>
        </div>
      </dialog>
      <div>
        <section className="mx-auto">
          <h1 className="text-xl font-sans font-semibold">Stocks</h1>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a>Stocks</a>
              </li>
            </ul>
          </div>
        </section>
        <section className=" px-5 py-10 card shadow-lg flex flex-col overflow-auto h-[500px]">
          <div className="actions ml-auto">
            <button
              className="opacity-55 hover:opacity-100"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <IoIosAddCircle size={30} />
            </button>
          </div>
          <div className="flex flex-col card gap-5">
            <TableUI dairy={stocks} handleDelete={handleDelete} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Stock;
