import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByDate,getProductByPrice } from "./productHomeSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { productsByDate, productsByPrice,loading } = useSelector((state) => state.productHome);

  useEffect(() => {
    dispatch(getProductByDate());
    dispatch(getProductByPrice());
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Blog Posts</h2>
      productbydate
      {productsByDate&&productsByDate.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      productByPrice
      {productsByPrice&&productsByPrice.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
