import React from 'react'

export default function ProductCard() {
    const data1 = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
  };
  const data = {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  };
  return (
    <div className="product-card">
          <div className="product-card__image">
              <img src={`${data.image}`} alt="" />
      </div>
      <div className="product-card__info">
              <div className="product-card__info-category">{data.category}</div>
              <div className="product-card__info-title">{data.title}</div>
        <div className="product-card__info-price">{`$ ${data.price}`}</div>
      </div>
      <div className="product-card__button-container">
        <div className="product-card__button full">VIEW PRODUCT</div>
        <div className="product-card__button">CART</div>
      </div>
    </div>
  );
}
