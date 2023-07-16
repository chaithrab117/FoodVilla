import React, { useEffect, useState } from 'react'
import { RestaurantCard } from './RestaurantCard'
import '../style/RestaurantCardsBody.css'
import { Shimmer } from './Shimmer';
import { Link } from 'react-router-dom';
import { GET_RESTAURANT_CARD_DETAILS_API_URL } from '../utils/constant';

export const RestaurantCardsBody = () => {

  const [restaurantDataList, setRestaurantDataList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredRestaurantlist, setFilteredRestaurantlist] = useState([]);

  useEffect(() => {
    getRestaurantDataList();
  }, []);

  async function getRestaurantDataList() {
    const data = await fetch(GET_RESTAURANT_CARD_DETAILS_API_URL);
    const json = await data.json();
    setRestaurantDataList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantlist(json?.data?.cards[2]?.data?.data?.cards);
  }

  function restoreDataList() {
    setFilteredRestaurantlist([...restaurantDataList]);
  }
  function filterRestaurantlist() {
    const filteredData = restaurantDataList.filter(obj => {
      return obj.data.name.includes(searchString);
    });
    setFilteredRestaurantlist(filteredData);
  }

  return (filteredRestaurantlist?.length == 0) ? <Shimmer /> : (
    <div>
      <div className='search-container'>
      <input value={searchString} onChange={(e) => {
        setSearchString(e.target.value);
        if (e.target.value == "") {
          restoreDataList()
        }
      }
      } />
      <button onClick={filterRestaurantlist}>search</button>
      </div>
      <div className='cards-container'>
        {
          filteredRestaurantlist.map((restaurantObj) => {
            return <Link className='card-container' to={"/restaurantMenu/" + restaurantObj.data.id}><RestaurantCard cardData={restaurantObj.data} /></Link>
          })
        }
      </div>
    </div>
  )
}
