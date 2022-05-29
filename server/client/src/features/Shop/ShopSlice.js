import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchurl} from "../../middlewares/Request"
const initialState = {
  categories: [],
  filters: {},
  error: false,
  product:{},
  loading: false,
  addedcat:[],
  
    
};

 
  

export const singleProduct = createAsyncThunk("shop/singleProduct",
  async (id, thunkAPI) => {

    const prod = await fetchurl(`product/${id}`,null,'GET',null);
    console.log(prod);
    return prod;
})
export const filterResult = createAsyncThunk(
  "shop/filterResult",
  async (filter, thunkAPI) => {
    var cat = filter.category.join("-");
   

    const prod = await fetchurl(`product/filter?limit=${filter.limit}&sort=${filter.price.sort}&category=${cat}&min=${filter.price.min}&max=${filter.price.max}&page=${filter.page}`, null, 'GET', null);
     
    return prod;
    
  }
  
)
export const getCategory = createAsyncThunk(
  "shop/getCategory",
  async ( thunkAPI) => {
    const response = await fetchurl(
      "brand/"
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
  reducers: {
    addCat: (state, { payload }) => {
      console.log(payload.cat);
      state.addedcat = [payload.cat];
    },
    setLoading: (state, { payload }) => {
      state.loading = payload.status;
    }
  },
  extraReducers: {
    [getCategory.pending]: (state) => {},
    [getCategory.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.categories = payload;
    },
    [getCategory.rejected]: (state) => {
      state.error = true;
    },
    [filterResult.pending]: (state) => {
      state.loading = true;
    },
    [filterResult.fulfilled]: (state, { payload }) => {
      console.log(`${payload} is payload`);
      state.filters = payload;
      state.loading = false;
    },
    [filterResult.rejected]: (state) => {
      state.error = true;
    },
    [singleProduct.pending]: (state) => {
      state.loading = true;
    },
    [singleProduct.fulfilled]: (state, { payload }) => {
      console.log(`${payload} is payload`);
      state.product = payload;
      state.loading = false;
    },
    [singleProduct.rejected]: (state) => {
      state.error = true;
    },
  },
});

export const { addCat, setLoading } = ShopSlice.actions;
export default  ShopSlice.reducer;