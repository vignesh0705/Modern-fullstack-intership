import React from 'react'

const DishBox = ({ dish_img, dish_name, dish_des, dish_price }) => {
 return (
 <div className='dish_box'>
 <img
 src={dish_img}
 alt={dish_name}
 className='dis_img'
 />
 <div className='dis_details'>
 <h2>{dish_name}</h2>
 <h4>{dish_des}</h4>
 <h3>{dish_price}</h3>
 </div>
 <div className='dis_foot'>
 <button>Add Cart</button>
 <h4>32 mins</h4>
 </div>
 </div>
 )
}

export default DishBox