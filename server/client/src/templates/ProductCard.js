import React from 'react'
import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from '../features/user/userSlice'
export default function ProductCard({ _id, title, image, price, category }) {
  const history = useNavigate();
     const dispatch = useDispatch();
  const info = { _id, title, image, price, category };
   const cart = useSelector((state) => state.user.cart);
  var gotocart = false;
  const url = `/dashboard/user/user_cart`
  
  if (cart[_id]) {
    gotocart = true;
  }
  const gotocartf = (e) => {
    e.preventDefault();
    
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation()
     
    history(url);
  };
  const directPage = ((e, url, small = false) => {
   
    e.preventDefault();
    if (small) {
      e.cancelBubble = true;
      if (e.stopPropagation) e.stopPropagation();
    }
   
    if (url === `/dashboard/user/user_cart`) {
      const inf = { ...info };
      inf.qnt = 1;
      dispatch(addToCart({ id: _id, info: inf }));
    }
    else {
       history(url)
    }
    // history(url)
  })

  return (
    <div className="product-card">
      <div
        className="clickable"
        onClick={(e) => {
          directPage(e, `/shop/${_id}`);
        }}
      >
        <div className="product-card__image">
          <img src={`${image}`} alt="" />
        </div>
        <div className="product-card__info">
          <div className="product-card__info-category">{category}</div>
          <div className="product-card__info-title">{title}</div>
          <div className="product-card__info-price">&#x20b9; {`${price}`}</div>
        </div>

        <div className="product-card__button-container">
          {gotocart ? (
            <>
              <div
                className="product-card__button full"
                onClick={(e) => {
                  gotocartf(e);
                }}
              >
                GO TO CART &#8594;
              </div>
            </>
          ) : (
            <>
              <div
                className="product-card__button full"
                onClick={(e) => {
                  directPage(e, `/shop/${_id}`, true);
                }}
              >
                VIEW PRODUCT
              </div>
              <div
                className="product-card__button"
                onClick={(e) =>
                  directPage(e, `/dashboard/user/user_cart`, true)
                }
              >
                CART
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
