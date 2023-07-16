import React from 'react'
import '../style/Body.css'
import { RestaurantCard } from './RestaurantCard'
import { RestaurantCardsBody } from './RestaurantCardsBody'
import { Outlet } from 'react-router-dom'

export const Body = () => {
  return (
    <div className='body-container'>
    <Outlet/>
    </div>
  )
}
