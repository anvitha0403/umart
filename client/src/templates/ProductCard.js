import React from 'react'

export default function ProductCard({id,title,image,price,category}) {
    
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={`${image}`} alt="" />
      </div>
      <div className="product-card__info">
        <div className="product-card__info-category">{category}</div>
        <div className="product-card__info-title">{title}</div>
        <div className="product-card__info-price">&#x20b9; {`${price}`}</div>
      </div>
      <div className="product-card__button-container">
        <div className="product-card__button full">VIEW PRODUCT</div>
        <div className="product-card__button">CART</div>
      </div>
    </div>
  );
}
