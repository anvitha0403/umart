import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {
    _id: null,
    email: null,
    firstname: null,
    lastname: null,
    history: [],
    verified: null,
  },
  auth: null,
  cart: [],
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
export const UserSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    reset: (state) => {
      state.data.name = "hello";
    },
  },
});
// export { }  from  UserSlice.actions;
export const { reset } = UserSlice.actions;
export default UserSlice.reducer;
