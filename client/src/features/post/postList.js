// import React, { useState, } from "react";

// import { useSelector,useDispatch,} from 'react-redux'
// import { selectAllPosts,postAdd } from "./postsSlice"




// export const PostList = () => {
//   const posts = useSelector((state) => state.post)
//   const [postTitle, setPostTitle] = useState("");
//   const [postContent, setPostContent] = useState("");
//   const handleTitle = e => setPostTitle(e.target.value)
//   const handleContent = e => setPostContent(e.target.value)
//   const Dispatch = useDispatch();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(postTitle)
//     Dispatch(postAdd(postTitle,postContent))
    
//   }
//     console.log(posts)
   
//   return (
//     <div>
//       dfdfdklfjsdjfls
//       <form>
//         <label htmlFor="title">title</label>
//         <input type="text" onChange={handleTitle} value={postTitle} />
//         <label htmlFor="title">title</label>
//         <input type="text" onChange={handleContent} value={postContent} />
//         <div onClick={handleSubmit}>add post</div>
//       </form>
//       {posts &&
//         posts.map((post) => {
//           return (
//             <article key={post.id}>
//               <h3>{post.title}</h3>
//               <p>{post.content.substring(0, 100)}</p>
//             </article>
//           );
//         })}
//     </div>
//   );
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./postsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Blog Posts</h2>
      {entities.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}