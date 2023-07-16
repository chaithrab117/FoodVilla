import React, { useState } from 'react'
import '../style/ItemCard.css'
import { ITEM_IMG_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTocart, updateItemQty} from '../redux/slice/CartSlice'

export const ItemCard = ({ item }) => {

  const dispatch = useDispatch();
  const [toggleAddBtn, setToggleAddBtn] = useState(1);
  const [count,setCount]=useState(1);

  function add_to_cart(item) {
    item.qty=count;
    dispatch(addTocart(item));
    setToggleAddBtn(0);
  }

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
    <div className='restaurant-menu-container'>
      <div className='details'>
        <h4>{item.name}</h4>
        <div>₹{item.price / 100}</div>
        <div className='menu-description'>{item.description}</div>
      </div>
      <div className='img-button-cnt'>
        <div className='menu-image-container'>
          <img src={ITEM_IMG_URL + item.imageId} />
        </div>
        { (toggleAddBtn == 1) ? 
        <button className='addBtn' onClick={() => { add_to_cart(item) }}>Add</button> : 
        <div>
          <button onClick={()=>{increment(item)}} className='incBtn'>+</button>
          <span>{count}</span>
          <button onClick={()=>{decrement(item)}} className='decBtn'>-</button>
        </div>}
      </div>
    </div>
  )
}
