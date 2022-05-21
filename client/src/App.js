
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/navigation/Header"
import ProductCard from "./templates/ProductCard";
// import PostList from "./features/post/postList"
import ProductHome from "./features/productHome/productsHome"
import axios from 'axios'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByDate, getProductByPrice } from "./features/productHome/productHomeSlice";
import {Hero} from "./templates/Hero"


import "./App.css"
const App = () => {

   
 const dispatch = useDispatch();


 useEffect(() => {
   dispatch(getProductByDate());
   dispatch(getProductByPrice());
 }, []);
  const selector1 = "productsByPrice";
  const selector2 = "productsByDate";
  return (
    <BrowserRouter>
      <Header></Header>
     
        <Hero
          title="best selling products"
          selector={selector1}
        />
        <Hero
          title="Latest products"
          selector={selector2}
        />

       
    

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="" element={< />} />
      <Route path="invoices" element={< />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;

