import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import superagent from "superagent";
import axios from 'axios'
import { fetchurl } from "../../middlewares/Request";
const initialState = {
  "data": {
    _id: null,
    email: null,
    firstname: null,
    lastname: null,
    history: [],
    verified: null,
    token:null
  },
  "auth": null,
  "cart": [],
  "error":false,
};

const defaultUser = {
 
};
/**export const counterSlice = createSlice({ 
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
})
 */



 const signinuser = createAsyncThunk(
  "user/signin",
   async({email, password }, thunkAPI) => {
     console.log(email)
     const response = await fetchurl('http://localhost:5000/api/auth/signin', { email: email, password: password }, 'POST', null)
     return response;
  
  }
);
 const checkuser = createAsyncThunk(
   "user/signin",
   async (token, thunkAPI) => {
  
     const response = await fetchurl(
       "http://localhost:5000/api/user/profile",
       null,
       "GET",
       token
     );
   console.log(response)
     return {user:response,token:token};
   }
);
 
export const UserSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    clearUser:((state)=>state=initialState)
  },
  extraReducers: {
    [signinuser.pending]: (state) => {},
    [signinuser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.data = payload.user;
      state.data.token = payload.token;
    },
    [signinuser.rejected]: (state) => {
      state.error = true;
    },

    [checkuser.pending]: (state) => {},
    [checkuser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.data = payload.user;
      state.data.token = payload.token;
    },
    [checkuser.rejected]: (state) => {
      state.error = true;
    },
  },
});
export const { setUser,clearUser }   = UserSlice.actions;

export  {signinuser,checkuser}
export default UserSlice.reducer;
