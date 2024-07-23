import React from 'react'
import Product from '../pages/Product'
import Recommended from './Recommended'
import Footer from './Footer'

const Home = ({ searchMeal }) => {

  return (
    <section className='bg-white'>
      <div className="p-32 max-sm:px-2 max-sm:py-8">
        <div className="pt-8 pb-12 w-[100%] flex justify-center">
          <p className='text-slate-900 text-2xl md:text-4xl font-bold w-[700px] text-center leading-16 p-8'>Savor the Joy of Cooking: Discover, Create, and Share Delicious Moments.</p>
        </div>
        <Product 
          searchMeal={searchMeal}
        />
      </div>
      <Recommended />
      <Footer />
    </section>
  )
}

export default Home