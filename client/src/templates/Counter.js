import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import {addToCart,decreaseQnt,increaseQnt} from "../features/user/userSlice"

const Counter = ({ num, id }) => {
    const dispatch = useDispatch();
  const handle = (add) => {
    console.log(num);

      if (add == 1) {
        dispatch(increaseQnt({ "id": id }));
      }
      else if (num === 1 && add === -1) {
          
          
      }
      else {
          dispatch(decreaseQnt({"id":id}))
      }
  };
  
  return (
    <div className="counter">
      <div
        className="counter-sym"
        onClick={() => {
          handle(1);
        }}
      >
        +
      </div>
      <div className="num">{num}</div>

      <div
        className="counter-sym"
        onClick={() => {
          handle(-1);
        }}
      >
        -
      </div>
    </div>
  );
};

export default Counter;
