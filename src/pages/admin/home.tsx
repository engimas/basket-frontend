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
            <div className="card shadow-md px-3 py-5 bg-slate-100 flex flex-col gap-2 w-full min-w-56">
              <RiAlignItemBottomLine size={30} color="#299345" />
              <span className="text-lg font-semibold">1259</span>
              <span className="font-sans font-light">Ungoing Orders</span>
            </div>
            <div className="card shadow-md px-3 py-5 bg-[#fef2dc] flex flex-col gap-2 min-w-56">
              <RiAlignItemBottomLine size={30} color="#299345" />
              <span className="text-lg font-semibold">Rs 2,00,000</span>
              <span className="font-sans font-light">Completed Orders</span>
            </div>

          </div>
          <div className="card shadow-md mt-5 px-3 py-5">
            <h1 className="flex flex-row gap-2 items-center text-xl font-sans font-bold "><MdOutlineSell/> Sells</h1>
            <ChartUi/>
          </div>
        </div>
      </section>
    </div>
      )
}

export default Home