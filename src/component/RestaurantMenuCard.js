import React from 'react'
import '../style/RestaurantMenuCard.css'
import { ItemCard } from './ItemCard'

export const RestaurantMenuCard = ({menuData}) => {

  return (
    <div className='menu-item-container'>
      <div className='menu-title'>{menuData.title}</div>
    {
      menuData?.itemArr?.map((item)=>{
        return <ItemCard item={item?.card?.info}/>
      })
    }
    </div>
    
  )
}
