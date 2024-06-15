import { NavLink, Outlet } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { FaBasketShopping } from "react-icons/fa6";

function SideBar() {
  return (
    <div className='flex sidebar'>
        <div className='flex flex-col gap-2 shadow-lg m-0 pt-10 '>
            <NavLink to={"/"} className={({isActive})=>{
                return 'w-full flex flex-row gap-4 items-center py-3 hover:bg-base-100  px-10 ' + (isActive ? " bg-slate-300" : "")
            }}>
            <MdOutlineDashboard/>
            <span>Dashboard</span>
            </NavLink>

            <NavLink to={"/stock"} className={({isActive})=>{
                return 'w-full flex flex-row gap-4 items-center py-3 hover:bg-base-100  px-10 ' + (isActive ? " bg-slate-300" : "")
            }}>
<AiOutlineStock />
            <span>Stock</span>
            </NavLink>
            <NavLink to={"/settings"} className={({isActive})=>{
                return 'w-full flex flex-row gap-4 items-center py-3 hover:bg-base-100  px-10 ' + (isActive ? " bg-slate-300" : "")
            }}>
            <MdOutlineDashboard/>
            <span>Settings</span>
            </NavLink>
            <NavLink to={"/orders"} className={({isActive})=>{
                return 'w-full flex flex-row gap-4 items-center py-3 hover:bg-base-100  px-10 ' + (isActive ? " bg-slate-300" : "")
            }}>
            <FaBasketShopping />
            <span>Orders</span>
            </NavLink>
        </div>
        <div className="content p-20 w-full overflow-hidden">
            <Outlet/>
        </div>
    </div>
  )
}

export default SideBar