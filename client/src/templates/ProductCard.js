import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function ProductCard({ _id, title, image, price, category }) {
  const history = useNavigate();
  const directPage = ((e, url,small=false) => {
    e.preventDefault();
    if (small) {
      e.cancelBubble = true;
      if (e.stopPropagation) e.stopPropagation();
    }
    history(url)
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
          <div
            className="product-card__button full"
            onClick={(e) => {
              directPage(e, `/shop/${_id}`,true);
            }}
          >
            VIEW PRODUCT
          </div>
          <div
            className="product-card__button"
            onClick={(e) => directPage(e, `/dashboard/user/user_cart`,true)}
          >
            CART
          </div>
        </div>
      </div>
    </div>
  );
}
