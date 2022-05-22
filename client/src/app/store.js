import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import userReducer from "../features/user/userSlice"
import { postReducer } from "../features/post/postsSlice"
import { ProductHomeReducer } from "../features/productHome/productHomeSlice";
import  NotificationReducer  from "../features/Notification/notificationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    posts: postReducer,
    productHome: ProductHomeReducer,
    notification:NotificationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(),
  devTools: process.env.NODE_ENV !== "production",
  //   preloadedState,
});