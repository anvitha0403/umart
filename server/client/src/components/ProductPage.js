import React, { useEffect ,useState} from 'react'
import { singleProduct } from '../features/Shop/ShopSlice'
import {useDispatch,useSelector} from 'react-redux'
import { useParams,useNavigate } from "react-router-dom";
import { addToCart } from '../features/user/userSlice';
import { addToCartServer } from '../features/user/userSlice';
import Loader from '../templates/Loader';
const ProductPage = () => {
  const navigate = useNavigate();
    const url = `/dashboard/user/user_cart`;
    const { id } = useParams();
    const info = useSelector(state => state.shop.product);
  const loading = useSelector(state => state.shop.loading)
  const cart = useSelector(state => state.user.cart);
 var gotocart = false;
 
  if (cart[id]) {
    gotocart = true;
    
  }
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(singleProduct(id))    
    }, [])
  
  const directPage = (e) => {
    e.preventDefault();
  
    const inf = { ...info };
    inf.qnt = 1;
    dispatch(addToCart({ id: id, "info": inf }));
    // navigate(url) 
 
  }

  const gotocartf = (e) => {
    navigate(url)
  }
  return (
    <>
   
      {!loading ? (
        <div className="productPage container">
          <div className="productPage__image">
            <img src={`${info.image}`} alt="" />
          </div>
          <div className="productPage__details">
            <div className="productPage__heading">{info.title}</div>
            <div className="productPage__description">{info.description}</div>
            <div className="product-card__info-price">
              &#x20b9; {`${info.price}`}
            </div>
            {gotocart ? (
              <div
                className="product-card__button"
                onClick={(e) => gotocartf(e)}
              >
                GO TO CART &#8594;
              </div>
            ) : (
              <div
                className="product-card__button"
                onClick={(e) => directPage(e)}
              >
                ADD TO CART
              </div>
            )}
          </div>
        </div>
      ) : (
          
            <Loader/>
         
      )}
    </>
  );
}

export default ProductPage