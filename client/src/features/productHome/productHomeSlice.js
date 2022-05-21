import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'


const getProductByPrice = createAsyncThunk('homeProd/getProductByPrice', async () => {
    const response = await fetch('http://localhost:5000/api/product?sortBy=price&order=1&limit=3').then((data) => data.json())
    return response

    
    
})
const getProductByDate= createAsyncThunk('homeProd/getProductByDate', async () => {
    const response = await fetch('http://localhost:5000/api/product?sortBy=date&order=%2D1&limit=3').then((data) => data.json())
    return response

    
    
})
const initialState = {
    productsByDate: [],
    productsByPrice: [],
    loading: false

}
const ProductHomeSlice = createSlice({
  name: "productHome",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductByDate.pending]: (state) => {
      state.loading = true;
    },
    [getProductByDate.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.productsByDate = payload;
    },
    [getProductByDate.rejected]: (state) => {
      state.loading = false;
    },
    [getProductByPrice.pending]: (state) => {
      state.loading = true;
    },
    [getProductByPrice.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.productsByPrice = payload;
    },
    [getProductByPrice.rejected]: (state) => {
      state.loading = false;
    },
  },
});
 const ProductHomeReducer = ProductHomeSlice.reducer;
export { getProductByDate, getProductByPrice,ProductHomeReducer };
