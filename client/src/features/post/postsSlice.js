// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
// import { nanoid } from "@reduxjs/toolkit";
// const initialState = {
//     posts: [],
//     status: 'idle',
//     error: null
// }
// const PostSlice = createSlice({
//     name: "post",
//     initialState,
//     reducers: {
//         postAdd: {
//             reducer(state, action) {
//                 console.log(action.payload)
//                 state.posts.push(action.payload)
//             },
//             prepare(title1, content1) {
//                 return ({ payload:
//                     {
//                     id: nanoid(),
//                         title: title1,
//                             content: content1,
//                 }
            
//         });
//             }
//     }}
// })

// export const { postAdd } = PostSlice.actions;
// export const selectAllPosts = (state) =>state.post.posts;
// export default PostSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  loading: false,
};

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
  const res = await fetch("http://localhost:5000/api/product").then(
    (data) => data.json()
  );
  return res;
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export const postReducer = postSlice.reducer;