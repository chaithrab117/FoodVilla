import React from 'react'
import '../style/RestaurantCard.css'
import { RESTAURANT_IMG_URL } from '../utils/constant'

export const RestaurantCard = ({cardData}) => {
  return (
    <div>
        <div className='card-img-container'>
            <img src={RESTAURANT_IMG_URL+cardData.cloudinaryImageId}/>
        </div>
        <div className='card-details'>
            <div className='restaurant-name'>{cardData.name}</div>
            <div className='cuisins'>{cardData.cuisines.join(",")}</div>
            <div className='rating-details'>
                <div className='rating'>★ {cardData.avgRating}</div>
                <div>.</div>
                <div>{cardData.slaString}</div>
                <div>.</div>
                <div>{cardData.costForTwoString}</div>
            </div>

        </div>
    </div>
  )
}
