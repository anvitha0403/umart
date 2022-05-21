import React, { useEffect } from 'react'
import Slider from './slider'
import { useSelector, useDispatch, } from 'react-redux'
import{createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { Hero } from "../../templates/Hero";

const Home=()=> {
  

  return (
    <div>
      <Slider />
      <Hero/>
       </div>
  )
}

export default Home;