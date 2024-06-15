import { NavLink, Outlet } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";


function SideBar() {
  return (
    <div className='flex h-screen'>
        <div className='flex flex-col gap-2 shadow-lg m-0 pt-10 '>
            <NavLink to={"/admin/start"} className={({isActive})=>{
                return 'w-full flex flex-row gap-4 items-center py-3 hover:bg-base-100  px-10 ' + (isActive ? " bg-slate-300" : "")
            }}>
            <MdOutlineDashboard/>
            <span>Dashboard</span>
            </NavLink>
        </div>
        <div className="content p-20 w-full overflow-hidden">
            <Outlet/>
        </div>
    </div>
  )
}

export default SideBar