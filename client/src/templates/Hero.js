import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ProductCard from "./ProductCard"


export const Hero = ({ title, selector}) => {
 
  const posts = useSelector((state) => state.productHome[selector]);
  console.log(posts)
  return (
    <div className="hero-container">
      <div className="hero-heading">{title}</div>
      <div className="grid-3">
        {posts == null ? (
          <> loading</>
        ) : (
            posts.map((m) => {
            
            return <ProductCard image={m.image} key={m.id} category={m.category} title={m.title} price={m.price} />;
          })
        )}
        );
      </div>
    </div>
  );
};
