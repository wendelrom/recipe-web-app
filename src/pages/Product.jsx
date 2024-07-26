import React, { useState } from 'react'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch'
import ModalPicture from '../components/ModalPicture';
import Width from '../Utils/Width';

const Product = ({searchMeal}) => { 
  const {isLoading, listMeal, error} = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
  const [isOpen, setOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState({});
  const width = Width();
  
  const openModal = (mealImage, mealName, mealCategory, mealType) => {
    setSelectedMeal({ mealImage, mealName, mealCategory, mealType });
    setOpen(true);
  };


  const handleClose = (e) => {
  
      setOpen(false);
    setSelectedMeal({});
  }

  return (
    <section className='px-2 md:mb-16'>
      <h2 className='text-6xl md:text-4xl max-sm:text-xl font-bold text-slate-800 logo mb-6 max-sm:mb-4'>Recipe</h2>
      <div className={`grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 relative`}>

        {isLoading && 
          <div className="text-slate-800 loading-container absolute inset-0 items-center">
            <span className="loading loading-spinner loading-lg z-50 relative text-slate-300 left-[50%]"></span>
          </div>
        }

        {error && <p> Error: {console.log(error)}</p>}

        {listMeal ? listMeal.map((meal, i) => (
          <div key={i}>
            <Card 
              mealImage={meal.strMealThumb}
              mealName={meal.strMeal}
              mealCategory={meal.strCategory}
              mealType={meal.strArea}
              mealId={meal.idMeal}
              openModal={openModal}
            />
          </div>
        )) : <p className='text-slate-900 absolute inset-0 flex justify-center items-center'>No results found for '<span className='text-lg font-semibold'> {searchMeal} </span>'. Try a new search.</p>}
      </div>

      <ModalPicture
        handleClose={handleClose}
        isOpen={isOpen}
        selectedMealImage={selectedMeal.mealImage}
      />

    </section>
  )
}

export default Product