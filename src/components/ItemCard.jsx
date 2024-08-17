import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
function ItemCard() {
  return (
    <div className="flex items-center  gap-2 shadow-md rounded-lg p-5">
      <MdDelete className="absolute right-7 cursor-pointer text-gray-800 "/>
      <img
        src="https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png"
        alt=""
        className="w-[50px] h-[50px]"
      />

      <div className="leading-5">
        <h2 className="font-bold text-gray-800 ">Onion Pizza</h2>
        
          <div className="flex items-center justify-between">
            <span className="text-green-500 font-semibold">$120</span>{" "}
        <div className="flex justify-center items-center gap-2 absolute right-7 ">
          <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md duration-300 text-xl p-1  transition-all ease-linear cursor-pointer outline" />
          <span>1</span>
          <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md duration-300 text-xl p-1  transition-all ease-linear cursor-pointer outline" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
