import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchurl} from "../../middlewares/Request"
const initialState = {
  categories: [],
  filters: {},
  error: false,
  
  
    
};
export const filterResult = createAsyncThunk(
  "shop/filterResult",
  async (filter, thunkAPI) => {
    var cat = filter.category.join("-");
   

    const prod = await fetchurl(`http://localhost:5000/api/product/filter?limit=${filter.limit}&sort=${filter.price.sort}&category=${cat}&min=${filter.price.min}&max=${filter.price.max}&page=${filter.page}`, null, 'GET', null);
     
    return prod;
    
  }
  
)
export const getCategory = createAsyncThunk(
  "shop/getCategory",
  async ( thunkAPI) => {
    const response = await fetchurl(
      "http://localhost:5000/api/brand/"
    ,null,
      "GET",
      null
    );
   
    console.log(response);
    return response;
  }
);
const ShopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategory.pending]: (state) => {},
    [getCategory.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.categories = payload;
    },
    [getCategory.rejected]: (state) => {
      state.error = true;
    },
    [filterResult.pending]: (state) => {},
    [filterResult.fulfilled]: (state, { payload }) => {
      console.log(`${payload} is payload`);
      state.filters = payload;
    },
    [filterResult.rejected]: (state) => {
      state.error = true;
    },
  },
});


export default  ShopSlice.reducer;