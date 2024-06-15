import { RiAlignItemBottomLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ChartUi from "../../components/chartUi";
import { MdOutlineSell } from "react-icons/md";
import PieUI from "../../components/pieUI";


function Home() {
  return (
    <div>
      <section className="top flex gap-20 justify-stretch mb-10 sidebar overflow-auto">
        <div className="flex flex-col">
          <div className="flex gap-5 justify-stretch">
            <div className="card shadow-md px-3 py-5 bg-pink-100 flex flex-col gap-2 min-w-56">
              <RiAlignItemBottomLine size={30} color="#299345" />
              <span className="text-lg font-semibold">1259</span>
              <span className="font-sans font-light">Total Item Sold</span>
            </div>
            <div className="card shadow-md px-3 py-5 bg-[#fef2dc] flex flex-col gap-2 min-w-56">
              <RiAlignItemBottomLine size={30} color="#299345" />
              <span className="text-lg font-semibold">Rs 2,00,000</span>
              <span className="font-sans font-light">Sold Amount</span>
            </div>
            <div className="card shadow-md px-3 py-5 bg-[#d9fae7] flex flex-col gap-2 min-w-56">
              <RiAlignItemBottomLine size={30} color="#299345" />
              <span className="text-lg font-semibold">Rs 15,000</span>
              <span className="font-sans font-light">Total Stock Value</span>
            </div>
          </div>
          <div className="card shadow-md mt-5 px-3 py-5">
            <h1 className="flex flex-row gap-2 items-center text-xl font-sans font-bold "><MdOutlineSell/> Sells</h1>
            <ChartUi/>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="card h-[138px] shadow-md px-3 py-5 bg-gradient-to-r from-sky-400 to-cyan-200 flex flex-col gap-2 min-w-56 w-full">
            <p>Upcoming Company Event</p>
            <Link to="/">See More</Link>
          </div>
          <div className=" card shadow-md mt-5 h-[412px]">
            <PieUI/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
