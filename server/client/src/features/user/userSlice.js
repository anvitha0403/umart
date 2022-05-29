import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

import { fetchurl } from "../../middlewares/Request";
const initialState = {
  data: {
    _id: null,
    email: null,
    firstname: null,
    lastname: null,
    history: [],
    verified: null,
    token: "",
  },
  auth: null,
  cart: {},
  total: 0,
  error: false,
  loading: false,
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
  "user/signinuser",
   async({email, password }, thunkAPI) => {
     console.log(email)
     const response = await fetchurl('auth/signin', { email: email, password: password }, 'POST', null)
  
     return response;
  
  }
);
 const signupuser = createAsyncThunk(
  "user/signupuser",
   async({email, password,firstName }, thunkAPI) => {
     console.log(email)
     const response = await fetchurl('auth/register', { email: email, password: password ,firstName:firstName}, 'POST', null)
  
     return response;
  
  }
);
 const edituser = createAsyncThunk(
  "user/edituser",
   async ({ change, token }, thunkAPI) => {
 
     const response = await fetchurl('user/profile', change, 'PATCH', token)
     console.log("edit response")
     console.log(response)
     return response;
  
  }
);
 const checkuser = createAsyncThunk(
   "user/checkuser",
   async (token, thunkAPI) => {
  
     const response = await fetchurl(
       "user/profile",
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
      const {
        _id,
        email,
        firstname,
        lastname,
        history,
        verified,
        token,
        auth,
        cart,
      } = action.payload;
      state.data = {
        _id,
        email,
        firstname,
        lastname,
        history,
        verified,
        token,
      };
      state.auth = auth;
      state.cart = cart;
    },
    clearUser: (state) => (state = initialState),
    addToCart: (state, { payload }) => {
      const { id, info } = payload;
      if (state.cart[payload.id]) {
        state.cart[id].qnt = state.cart[id].qnt + 1;
      } else {
        state.cart[id] = info;
      }
      state.total += state.cart[id].price;
       state.total = Math.round(state.total * 100) / 100;
    },
    removeFromCart: (state, { payload }) => {
      const { id } = payload;
      const num = state.cart[id].qnt;
      state.total -= state.cart[id].price * num;
       state.total = Math.round(state.total * 100) / 100;
      delete state.cart[id];
    },
    increaseQnt: (state, { payload }) => {
      const { id } = payload;
      console.log(payload);
      console.log(id);

      const newstate = state.cart[id];
      state.total += newstate.price;
      state.total = Math.round(state.total * 100) / 100;
      console.log(newstate);
      newstate.qnt = newstate.qnt + 1;
      state.cart[id] = newstate;
    },
    decreaseQnt: (state, { payload }) => {
      const newstate = state.cart[payload.id];
      newstate.qnt = newstate.qnt - 1;
      state.total -= newstate.price;
       state.total = Math.round(state.total * 100) / 100;
      state.cart[payload.id] = newstate;
    },
  },
  extraReducers: {
    [signinuser.pending]: (state) => {},
    [signinuser.fulfilled]: (state, action) => {
      state.data = action.payload.user;
      state.data.token = action.payload.token;
      localStorage.setItem("token", state.data.token);
      return state;
    },
    [signinuser.rejected]: (state) => {
      state.error = true;
    },
    [signupuser.pending]: (state) => {
      state.loading = true
    },
    [signupuser.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.data = action.payload.user;
      state.data.token = action.payload.token;
      localStorage.setItem("token", state.data.token);
      state.loading = false;
      return state;
    },
    [signinuser.rejected]: (state) => {
      state.error = true;
    },

    [checkuser.pending]: (state) => {},
    [checkuser.fulfilled]: (state, { payload }) => {
      console.log(payload.user);
      state.data = payload.user;
      state.data.token = payload.token;
    },
    [checkuser.rejected]: (state) => {
      state.error = true;
    },
    [edituser.pending]: (state) => {},
    [edituser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      Object.assign(state.data, payload);
    },
    [edituser.rejected]: (state) => {
      state.error = true;
    },
  },
});
export const { setUser, clearUser, increaseQnt, addToCart, decreaseQnt,removeFromCart, } =
  UserSlice.actions;

export { signinuser, checkuser, edituser,signupuser };
export default UserSlice.reducer;
