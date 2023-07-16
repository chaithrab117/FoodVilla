import React from 'react'
import '../style/Shimmer.css'

export const Shimmer = () => {
  return (
    <div className='shimmer-container'>
        { Array(10).fill("1").map(()=>{
    return <div className='shimmer-card-container'></div>
   })}
   
   </div>
    // <div className='shimmer-card-container'></div>
    

  )
}
