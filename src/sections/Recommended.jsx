import React from 'react';
import { imagesCategory, imagesBurger } from '../constants/images';
import Width from '../Utils/Width';

const Recommended = () => {
  const {width} = Width();

  return (
    <section className="min-h-screen bg-orange-100 pb-16">
      <div className="flex justify-center flex-col md:flex-row gap-4 md:gap-8 w-full px-4 cursor-pointer">
        {imagesCategory.map((image, index) => (
          <div key={index} className="md:relative md:-top-16 lg:-top-24  bg-orange-50 w-full sm:w-52 lg:w-72 group overflow-hidden rounded-xl">
            <img src={image.category} alt={`pic${index + 1}`} className="w-full h-full object-cover group-hover:brightness-50 transition duration-500 ease-in-out" />
            <div className="absolute inset-0 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
              <p className="text-slate-50 text-2xl">{image.name}</p>
              <p className="text-slate-100 text-center mx-4">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around items-center max-sm:flex-col gap-0 md:gap-24 px-8 md:px-32 max-sm:mt-16 min-h-[80vh] text-slate-800">
        <div>
          <div className="w-full md:w-[500px] mt-16">
            <div className="md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-3 md:gap-y-0">
              {width >= 425 ?
                Object.keys(imagesBurger).map((key, index) => (
                  <div key={index} className={`overflow-hidden rounded-xl ${index === 0 || index === 2 ? 'row-span-2' : ''}`}>
                    <img src={imagesBurger[key]} alt={`burger${index + 1}`} className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform ease-in-out" />
                  </div>
                ))
                : 
                <img src={imagesBurger.burger3} className='mt-16 rounded-xl'/>
              }
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="text-slate-800 font-bold text-md md:text-2xl lg:text-3xl">Burger</h3>
          <p className="text-slate-800">
            Burgers are a universal favorite, celebrated for their rich flavors, satisfying textures, and endless customization possibilities. Originating in the United States, this iconic dish has grown from a simple fast-food staple to a gourmet sensation enjoyed worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recommended;

{/* <div className="md:grid md:grid-cols-2 md:grid-rows-3 w-[400px] relative gap-2">
  <img src={imagesBurger.burger1} alt="" className="row-span-2 w-full h-full object-cover"/>
  <img src={imagesBurger.burger4} alt="" className="w-full h-full object-cover"/>
  <img src={imagesBurger.burger3} alt="" className="w-full h-full object-cover"/>
  <img src={imagesBurger.burger2} alt="" className="row-span-2 w-full h-full object-cover"/>
</div> */}
