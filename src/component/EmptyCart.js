import React from 'react'
import '../style/EmptyCart.css'
import { Link } from 'react-router-dom'

export const EmptyCart = () => {
  return (
    <div>
        <div className='emptycart-img-container'>
            <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0' />
        </div>
        <div className='emptyCart-text'>
        <h1>Your cart is empty</h1>
        <div>You can go to home page to view more restaurants</div>
        <Link to="/"><button>See restaurants near you</button></Link>
        </div>
    </div>
  )
}
