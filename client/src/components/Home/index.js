import React, { useEffect } from 'react'
import Slider from './slider'
import { useSelector, useDispatch, } from 'react-redux'
import{createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { Hero } from "../../templates/Hero";

const Home=()=> {
  
 const selector1 = "productsByPrice";
 const selector2 = "productsByDate";
  return (
    <div>
      <Slider />
      
      <Hero title="best selling products" selector={selector1} />
      <Hero title="Latest products" selector={selector2} />
    </div>
  );
}

export default Home;