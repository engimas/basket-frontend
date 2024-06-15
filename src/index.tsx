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


import Profile from "./components/basicProfile";
import Settings from "./pages/customer/settings";


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
            <Route path="/purchase-page" element={<PurchasePage />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/search/:keyword" element={<Search/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />

          </Route>
        </>
      ) : (
        <>
        <Route path="/" element={<NavbarProducer />}>
          <Route path="/" element={<SideBar />}>
            <Route index element={<HomeProducer />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/search/:keyword" element={<SearchProducer />} />
          </Route>
          </Route>
        </>
      )}
      <Route path="/auth">
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default Index;
