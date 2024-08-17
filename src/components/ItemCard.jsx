import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../redux/slices/CartSlices";
import toast from "react-hot-toast";
function ItemCard({ id, name, price, img, qty }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center  gap-2 shadow-md rounded-lg p-5">
      <MdDelete onClick={() => {
        dispatch(removeFromCart({ id }))
        toast(`${name} Removed!`, {
          icon: '👏',
        })
      }
      }
        className="absolute right-7 text-2xl cursor-pointer text-gray-800 " />
      <img
        src={img}
        alt=""
        className="w-[50px] h-[50px]"
      />

      <div className="leading-5">
        <h2 className="font-bold text-gray-800 ">{name}</h2>

        <div className="flex items-center justify-between">
          <span className="text-green-500 font-semibold">{price}</span>{" "}
          <div className="flex justify-center items-center gap-2 absolute right-7 ">


            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md duration-300 text-xl p-1  transition-all ease-linear cursor-pointer outline" onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : qty = 0} />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => qty > 1 ? dispatch(incrementQty({ id })) : qty = 0}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md duration-300 text-xl p-1  transition-all ease-linear cursor-pointer outline" />


          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
