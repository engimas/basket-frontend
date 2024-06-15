import { Route, Routes, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Home from "./pages/customer/home";
import Login from "./pages/login";
import { useEffect } from "react";
import Register from "./pages/register";
import Categories from "./pages/customer/categories";
import NavBar from "./components/navbar";
import PurchasePage from "./pages/customer/purchasePage";
import Cart from "./pages/customer/cart";
import Search from "./pages/customer/search";

import HomeProducer from "./pages/producer/home"
import SideBar from "./components/sidebar";

import NavbarProducer from "./components/navbarProducer";
import Stock from "./pages/producer/stock";
import SearchProducer from "./pages/producer/search";
import Orders from "./pages/producer/orders";

import Farmers from "./pages/customer/farmers";
import FarmerDetails from "./pages/customer/farmer";
import Profile from "./components/basicProfile";
import Settings from "./pages/customer/settings";

import AdminLogin from "./pages/admin/login"
import AdminSideBar from "./components/sidebarAdmin"
import AdminHome from "./pages/admin/home"
import Wallet from "./pages/customer/wallet";
 


function Index() {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/auth/login");
    }
  }, [isLoggedIn]);

  return (
    <Routes>
      {user?.type === "Consumer" ? (
        <>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="farmers" element={<Farmers />} />
            <Route path="/purchase-page" element={<PurchasePage />} />
            <Route path="/purchase-page/:id" element={<PurchasePage />} />

            <Route path="/cart" element={<Cart/>} />
            <Route path="/search/:keyword" element={<Search/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/farmer/:id" element={<FarmerDetails/>} />

          </Route>
        </>
      ) : (
        <>
        <Route path="/" element={<NavbarProducer />}>
          <Route path="/" element={<SideBar />}>
            <Route index element={<HomeProducer />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/search/:keyword" element={<SearchProducer />} />
            <Route path="/orders" element={<Orders />} />

          </Route>
          </Route>
        </>
      )}
      <Route path="/auth">
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>

      <Route path="/admin">
        <Route index element={<AdminLogin />} />
        <Route path="/admin/start" element={<AdminSideBar />}>
          <Route index element={<AdminHome />} />
      </Route>

      </Route>
    </Routes>
  );
}

export default Index;
