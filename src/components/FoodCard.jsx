import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlices";
function FoodCard({ id, name, price, desc, rating, img }) {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[256px] p-5 bg-white flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-105  cursor-grab transition-all duration-500 ease-in-out overflow-hidden"
      />
      <div className="flex text-sm justify-between ">
        <h2>{name}</h2>
        <span className="text-green-500">{price}</span>
      </div>
      <p className="text-sm font-normal ">{desc.slice(0, 50)}</p>
      <div className="flex  justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, img, rating, qty: 1 }));
          }}
          className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
