import React, { useEffect } from 'react'
import Slider from './slider'
import { useSelector, useDispatch, } from 'react-redux'
import{createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { Hero } from "../../templates/Hero";

const Home=()=> {
  
 
  const selector1 = (state) => state.productHome.productsByPrice;
  const selector2 = (state) => state.productHome.productsByDate;

  return (
    <div>
      <Slider />

      <Hero
        key={1}
        title="best selling products"
        selector={selector1}
        error={(state) => state.productHome.error}
      />
      <Hero
        key={2}
        title="Latest products"
        selector={selector2}
        error={(state) => state.productHome.error}
      />
    </div>
  );
}

export default Home;