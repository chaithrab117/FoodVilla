import React, { useState } from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const Header = () => {
    const cart_ItemData = useSelector(store => store.cart.items);
    const total_qty = cart_ItemData?.map(item => item.qty).reduce((val1, val2) => val1 + val2, 0);
   
    return (
        <div className='header-container'>
            <div className='header-app-container'>
                <div className='app-img-container'>
                    <Link to="/"><img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/byb52jmakvfk71lqd0av' /></Link>
                </div>
                <h4>Food Villa</h4>
            </div>
            <ul className='nav-container'>
                {/* <Link className='link-container'><li>Search</li></Link> */}
                <Link className='link-container' to="/"><li>Home</li>
                </Link>
                <Link className='link-container' to="/contact"><li>Contact</li></Link>
                <Link className='link-container cart-nav' to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16"> <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" /> </svg>
                    <li>Cart - {total_qty} items</li>
                </Link>
            </ul>
        </div>
    )
}
