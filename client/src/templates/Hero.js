import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setNotification} from '../features/Notification/notificationSlice'
import Loader from './Loader'
import ProductCard from "./ProductCard"


export const Hero = ({ title, selector, error }) => {
  const posts = useSelector(selector);
  const error1 = useSelector(error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error1) {
      const action = {
        error: true, message: "unable to featured products"
      }
      dispatch(setNotification(action));
    }
   
  }, [error1, dispatch])
 
  console.log(posts)
  return (
    <div className="hero-container">
      <div className="hero-heading">{title}</div>
      <div className="grid-3">
        {posts == null ? (
        <Loader/>
        ) : (
          posts.length > 0 && posts.map((m) => {
            
            return <ProductCard _id={m._id} image={m.image} key={m.id} category={m.category} title={m.title} price={m.price} />;
          })
        )}
        
      </div>
    </div>
  )
    }
  

