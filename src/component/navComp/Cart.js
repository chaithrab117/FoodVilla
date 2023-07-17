import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ItemCard } from '../ItemCard';
import { CartCard } from '../CartCard';
import '../../style/Cart.css'
import { clearCart } from '../../redux/slice/CartSlice';
import { EmptyCart } from '../EmptyCart';

export const Cart = () => {
  const cart_ItemData = useSelector(store => store.cart.items);
  const total_qty=cart_ItemData?.map(item=>item.qty).reduce((val1,val2)=>val1+val2,0);
  const total_price=cart_ItemData?.map(item=>(item.qty*(item.price/100))).reduce((val1,val2)=>val1+val2,0);
  const dispatch=useDispatch();
  function clearCart_items(){
    dispatch(clearCart());
  }
  return (cart_ItemData.length==0)?<EmptyCart/>:(
    <div >
      <div className='cart-header'>
        <h1>Cart Items</h1>
        <button className='clear-btn' onClick={clearCart_items}>Clear Cart</button>
      </div>
      <div className='cart-container'>
        <div className='cart-items-container'>
        {
          cart_ItemData.map((item) => {
            return <CartCard item={item}/>
          })
        }
        </div>
        <div className='price-details'>
          <div className='item-details'>

            {cart_ItemData.map((item) => {
              return (
                <div className='item'>
                  <div className='name'>{item.name}</div>
                  <div>{item.qty}</div>
                  <div>{item.qty*(item.price)/100}</div>
                </div>
              )
            })}
          </div>
          <div className='subtotal-details'>
            <div className='name'>SubTotal</div>
            <div>{total_qty}</div>
            <div>{total_price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
