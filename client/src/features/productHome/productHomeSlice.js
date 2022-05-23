import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import { fetchurl } from '../../middlewares/Request';

const getProductByPrice = createAsyncThunk('homeProd/getProductByPrice', async () => {
    const response = await fetchurl(
      "http://localhost:5000/api/product?sortBy=price&order=1&limit=3",null,'GET',null
    )
    return response

    
    
})
const getProductByDate= createAsyncThunk('homeProd/getProductByDate', async () => {
  const response = await fetchurl(
    "http://localhost:5000/api/product?sortBy=dateinsec&order=1&limit=3",
    null,
    "GET",
    null
  )
   console.log(response);
   return response;
 
 

    
    
})
const initialState = {
    productsByDate: [],
    productsByPrice: [],
    error: false

}
const ProductHomeSlice = createSlice({
  name: "productHome",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductByDate.pending]: (state) => {
    
    },
    [getProductByDate.fulfilled]: (state, { payload }) => {
      
      state.productsByDate = payload;
    },
    [getProductByDate.rejected]: (state) => {
      state.error = true;
    },
    [getProductByPrice.pending]: (state) => {
     
    },
    [getProductByPrice.fulfilled]: (state, { payload }) => {
     
      state.productsByPrice = payload;
    },
    [getProductByPrice.rejected]: (state) => {
      state.error = true;
    },
  },
});
 const ProductHomeReducer = ProductHomeSlice.reducer;
export { getProductByDate, getProductByPrice,ProductHomeReducer };
