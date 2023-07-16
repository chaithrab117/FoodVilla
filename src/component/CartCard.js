import React, { useState } from 'react'
import '../style/CartCard.css'
import { updateItemQty } from '../redux/slice/CartSlice';
import { useDispatch } from 'react-redux';

export const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  const [count,setCount]=useState(item.qty);
  function increment(itemObj){
    dispatch(updateItemQty({itemObj,operation:"inc"}));
    setCount(count+1);
  }

  function decrement(itemObj){
    dispatch(updateItemQty({itemObj,operation:"dec"}));
    if(count==1){
      setToggleAddBtn(1);
      return;
    }
    setCount(count-1);
  }

  return (
    <div className='cart-card-container'>
      <div className='cart-img-container'>
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.imageId}></img>
      </div>
      <div className='cart-details'>
        <div className='cart-item-name'>{item.name}</div>
        <div className='btn'>
          <button onClick={()=>{increment(item)}} className='incBtn'>+</button>
          <span>{count}</span>
          <button onClick={()=>{decrement(item)}} className='decBtn'>-</button>
        </div>
      </div>
    </div>
  )
}
