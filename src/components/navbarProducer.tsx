import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-2.svg";
import useAuth from "../hooks/useAuth";

import { Link } from "react-router-dom";
import { useState } from "react";
function NavBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };
  const handleSearch = ()=>{
    if(search.length > 0){
        navigate(`/search/${search}`)
    }

  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1 ml-5">
          <Link to="/" className="text-xl">
            <img className="w-14 h-14" src={Logo} />
          </Link>
        </div>
        <div className="search">
          <input
            type="text"
            className="input input-ghost pr-10"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="-translate-x-10" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
