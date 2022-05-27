import React, { useEffect } from 'react'
import { singleProduct } from '../features/Shop/ShopSlice'
import {useDispatch,useSelector} from 'react-redux'
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams();
    const info = useSelector(state => state.shop.product);
    const loading=useSelector(state=>state.shop.loading)
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(singleProduct(id))    
    },[])
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
            <div
              className="product-card__button"
              // onClick={(e) => directPage(e, `/dashboard/user/user_cart`, true)}
            >
              ADD TO CART
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProductPage