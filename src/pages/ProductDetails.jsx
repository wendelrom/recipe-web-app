import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ProductDetails = () => {
  const nav = useNavigate();
  const { idMeal } = useParams();
  const { isLoading, listMeal, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);

  if (isLoading) return <div className='text-slate-800'>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const meal = listMeal?.[0];

  if (!meal) return <div>No meal found.</div>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const measure = meal[`strMeasure${i}`];
    const ingredient = meal[`strIngredient${i}`];
    if (measure && ingredient) {
      ingredients.push(`${measure} of ${ingredient}`);
    }
  }

  return (
    <div className='bg-white'>
      <div className='min-h-screen flex justify-center items-center'>
        <div className="max-sm:block md:grid grid-cols-3 w-[90%] md:w-[80%] h-auto md:h-[400px] relative top-16">
          <div className='p-4 col-span-1 flex justify-center items-center'>
            <img src={meal.strMealThumb} alt="Meal" className='w-full h-auto' />
          </div>
          <div className="col-span-2 flex flex-col overflow-y-auto p-4">
            <div className='flex flex-col gap-0'>
              <h3 className="text-2xl md:text-4xl text-slate-800 font-bold mt-0 md:mt-4">{meal.strMeal}</h3>
              <p className="text-lg md:text-xl font-semibold text-slate-800">{meal.strCategory}</p>
              <p className="max-sm:text-md text-thin text-slate-800 italic">{meal.strArea}</p>
            </div>
            <div className='mt-4'>
              <p className="text-md md:text-lg text-slate-800 font-semibold">Ingredients</p>
              <ul className="text-slate-800 list-disc pl-5 text-sm md:text-lg">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className='mt-4'>
              <p className="text-md md:text-lg text-slate-800 font-semibold">Instructions</p>
              <p className="text-slate-800 text-sm md:text-lg">{meal.strInstructions}</p>
            </div>
            <button 
              onClick={() => nav('/')}
              className='py-1 px-2 text-orange-500 rounded-lg border border-orange-500 hover:bg-orange-500 hover:text-white mt-4 self-end active:bg-orange-600'
            >
              go back &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


// import { useNavigate, useParams } from 'react-router-dom';
// import useFetch from '../hooks/useFetch';

// const ProductDetails = () => {
//   const nav = useNavigate();
//   const { idMeal } = useParams();
//   const { isLoading, listMeal, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);

//   if (isLoading) return <div className='text-slate-800'>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   const meal = listMeal?.[0];

//   if (!meal) return <div>No meal found.</div>;

//   const ingredients = [];
//   for (let i = 1; i <= 20; i++) {
//     const measure = meal[`strMeasure${i}`];
//     const ingredient = meal[`strIngredient${i}`];
//     if (measure && ingredient) {
//       ingredients.push(`${measure} of ${ingredient}`);
//     }
//   }

//   return (
//     <div className='bg-white border-4 border-green-500'>
//       <div className='min-h-screen flex justify-center items-center'>
//         <div className="max-sm:block grid grid-cols-3 w-[90%] md:w-[80%] h-[400px] bg-slate-50 relative border-4 border-red-500">
//           <div className='p-4 col-span-1 flex justify-center items-center'>
//             <img src={meal.strMealThumb} alt="Meal" className='w-full' />
//           </div>
//           <div className="col-span-2 flex flex-col overflow-y-auto p-4">
//             <div className='flex flex-col gap-1'>
//               <h3 className="text-4xl text-slate-800 font-bold mt-4">{meal.strMeal}</h3>
//               <p className="text-xl font-semibold text-slate-800">{meal.strCategory}</p>
//               <p className="text-thin text-slate-800 italic">{meal.strArea}</p>
//             </div>
//             <div className='mt-4'>
//               <p className="text-lg text-slate-800 font-semibold">Ingredients</p>
//               <ul className="text-slate-800 list-disc pl-5">
//                 {ingredients.map((ingredient, index) => (
//                   <li key={index}>{ingredient}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className='mt-4'>
//               <p className="text-lg text-slate-800 font-semibold">Instructions</p>
//               <p className="text-slate-800">{meal.strInstructions}</p>
//             </div>
//             <button 
//               onClick={() => nav('/')}
//               className='py-1 px-2 text-orange-500 rounded-lg border border-orange-500 hover:bg-orange-500 hover:text-white mt-4 self-end'
//             >
//               go back &rarr;
//             </button>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ProductDetails;
