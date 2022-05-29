import React, { useState } from "react";
import AuthGuard from './hoc/AuthGuard'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart } from '../features/user/userSlice'
import {Link} from 'react-router-dom'
import Counter from '../templates/Counter';

const Cart = (props) => {
  const dispatch = useDispatch();
  const total=useSelector(state=>state.user.total)
  const cart = useSelector(state => state.user.cart);
  const handleclose = (id) => {
  
    dispatch(removeFromCart({id}))
  }
  

    return (
      <div className="cart-container-main">
        <div className="cart-product-container">
          {Object.keys(cart).length > 0 ? (
            Object.keys(cart).map(function (key, index) {
              const qnt = cart[key].qnt;
            
              return (
                <div className="cart-container">
                  <div
                    className="cart-remove"
                    onClick={(e) => handleclose(key)}
                  >
                    X
                  </div>
                  <div className="cart-container-img">
                    <img src={cart[key].image} alt="" />
                  </div>
                  <div className="cart-container-left">
                    <span className="productPage__heading">
                      {cart[key].title}
                    </span>
                    <div className=" cart-container-price">
                      {cart[key].price * qnt}
                    </div>

                    <Counter key={key} num={qnt} id={key} />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="cart-empty">
              <div className="a">Cart empty...Shop now</div>
              <Link to="/shop" className="product-card__button b">
                GO TO STORE
              </Link>
            </div>
          )}
        </div>
        {Object.keys(cart).length > 0 ? (
          <>
            <div className="summary ">
              <div className="cart-summary-container cart-container">
                <div className="cart-summary">
                  <span className="cart-sum-title">Total</span>
                  <span className="cart-sum-amount">{ total}</span>
                </div>
                <div className="cart-summary">
                  <span className="cart-sum-title">Shipping</span>
                  <span className="cart-sum-amount">100</span>
                </div>
                <div className="product-card__button">PROCEED TO PAYMENT</div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    );
}

export default AuthGuard(Cart)