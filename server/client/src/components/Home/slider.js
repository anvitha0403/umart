import React from 'react'
import {useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import {addCat} from '../../features/Shop/ShopSlice'
 const  Slider=() =>{
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const handleClick = (num) => {
    console.log(num)
    dispatch(addCat({cat:num}));
    navigate('/shop');

    
  }
  return (
    <section classname="slider">
      <div className="wrapper">
        <div className="slider-holder">
          <div id="slider-image-1">
            <img
              src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
              alt=""
            />
            <div
              className="product-card__button slider-button"
              onClick={() => {
                handleClick(`jewelery`);
              }}
            >
              Shop Jewellery
            </div>
          </div>
          <div id="slider-image-2">
            <img
              src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
              alt=""
            />
            <div
              className="product-card__button slider-button"
              onClick={() => {
                handleClick(`women's clothing`);
              }}
            >
              women's clothing
            </div>
          </div>
          <div id="slider-image-3">
            <img
              src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
              alt=""
            />
            <div
              className="product-card__button slider-button"
              onClick={() => {
                handleClick(`men's clothing`);
              }}
            >
              men's clothing
            </div>
          </div>
        </div>
        <div className="button-holder">
          <a href="#slider-image-1" className="slider-dots">
            {" "}
          </a>
          <a href="#slider-image-2" className="slider-dots"></a>
          <a href="#slider-image-3" className="slider-dots">
            {" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Slider;
