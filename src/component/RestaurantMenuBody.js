import React, { useEffect, useState } from 'react'
import '../style/RestaurantMenuBody.css'
import { RestaurantMenuCard } from './RestaurantMenuCard';
import { useParams } from 'react-router-dom';

export const RestaurantMenuBody = () => {
  const { id } = useParams();
  const [hotelData, setHotelData] = useState({});
  const [restaurantMenuCards, setRestaurantMenuCards] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    getRestaurantMenuData();
  }, [])

  async function getRestaurantMenuData() {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + id);
    const json = await data.json();
    setHotelData(json?.data?.cards[0]?.card?.card?.info);
    const filteredData=[...json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => {
        return card?.card?.card?.hasOwnProperty('itemCards');
      }).map((cardData) => {
        return {
          title: cardData?.card?.card?.title,
          itemArr: cardData?.card?.card?.itemCards
        }
      })
    ]
    setRestaurantMenuCards(filteredData);
  }
  return (
    <div className='menu-container'>
      <div className='restaurant-details-container'>
        <div>
          <h3>{hotelData?.name}</h3>
          <div className='cusinies-place-container'>
            <div>{hotelData?.cuisines?.join(",")}</div>
            <div>{hotelData?.areaName + ", " + hotelData?.sla?.lastMileTravelString}</div>
          </div>
        </div>
        <div className='rating-container'>
          <div>★ 4.0</div>
          <hr />
          <div className='rating-string'>10k+ratings</div>
        </div>
      </div>
      <hr className='dottedLine' />
      {
         restaurantMenuCards?.map((menuObj)=>{
           return <RestaurantMenuCard menuData={menuObj}/>
         })  

      }
    </div>
  )
}
