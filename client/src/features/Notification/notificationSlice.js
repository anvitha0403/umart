import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    error: false,
    success: false,
    message:""
}
const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotification: ((state, action) => Object.assign(state, action.payload)),
        removeNotification: (state) => state = initialState,

        

      
      
  
    }
});
export const { setNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
