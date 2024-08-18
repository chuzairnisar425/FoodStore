import React, { useEffect, useState } from "react";
import FoodData from '../data/FoodData'
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

function CategoryMenu() {
  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.category.category)
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))]
    setCategories(uniqueCategories);
    console.log(uniqueCategories)
  }
  useEffect(() => {
    listUniqueCategories()
  }, [])
  return (

    <div className="ml-6">
      <h3 className="font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden md:overflow-x-hidden">
      <button 
            onClick={() => dispatch(setCategory('All'))} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 $ `}>
           All
          </button>
        {categories.map((category, index) => {
          return (<button key={index}
            onClick={() => dispatch(setCategory(category))} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500`}>
            {category}
          </button>
          )
        })}

      </div>
    </div>
  );
}

export default CategoryMenu;
