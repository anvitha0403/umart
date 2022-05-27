
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Signup from "./components/Signup"
import Header from "./components/navigation/Header"

import Notification from "./features/Notification/Notification"

import Form from './templates/Form'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByDate, getProductByPrice } from "./features/productHome/productHomeSlice";
import { checkuser} from "./features/user/userSlice";
import {Hero} from "./templates/Hero"


import "./App.css"
import DashBoard from "./components/DashBoard/DashBoard";
import Info from "./components/DashBoard/InfoUser";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import ProductPage from "./components/ProductPage";
const App = () => {
  const user = (localStorage.getItem("token"));

   
 const dispatch = useDispatch();


 useEffect(() => {
   dispatch(getProductByDate());
   dispatch(getProductByPrice());
   dispatch(checkuser(user))

 }, [dispatch,user]);
 
  return (
    <BrowserRouter>
      <Notification>
        <Header></Header>

        <Routes>
          <Route path="/dashboard/user/user_cart" element={<Cart />} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="/dashboard/user/user_info" element={<Info />} />
          <Route path="/signin" element={<Signup />} />
          <Route path="/dashboard/user/user_info" element={<Info />} />
          <Route path="/dashboard" element={<DashBoard />} />

          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Notification>
    </BrowserRouter>
  );
}
export default App;

