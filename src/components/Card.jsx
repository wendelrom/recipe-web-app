import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({mealImage, mealName, mealCategory, mealType, mealId, openModal}) => {
  return (
    <div className='border border-slate-300 overflow-hidden bg-orange-50 hover:cursor-pointer shadow-lg'>

      <div>
        <img 
          src={mealImage} 
          onClick={() => openModal(mealImage, mealName, mealCategory, mealType)}
          className='w-100 hover:scale-105 transition-transform ' alt="pic1" 
        />
      </div>
      <div className="p-2 text-slate-900">
        <p className="text-base md:text-lg font-semibold ">
          {mealName}
        </p>
        <p className="text-xs md:text-sm pb-2">
          {mealCategory}
        </p>
        <p className="font-thin max-sm:text-sm text-orange-400 hover:text-orange-800">
          <Link to={`/product/${mealId}`}>See more...</Link>
        </p>
      </div>

    </div>
  )
}

export default Card