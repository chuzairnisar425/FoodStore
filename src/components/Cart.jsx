import React from "react";
import { IoMdClose } from "react-icons/io";
function Cart() {
  return (
    <>
      <div className="fixed right-0 top-0 w-11/12 sm:w-11/12 md:w-[40vw] lg:w-[20vw]  h-full bg-white p-5">
        <div className="flex justify-between items-center my-3">    
          <span className="text-xl - font-bold text-gray-800">My Order</span>
          <IoMdClose
            className="border-2 outline cursor-pointer border-gray-600 text-gray-600 font-bold p-1
          hover:text-red-300 hover:border-red-300 text-xl rounded-md "
          />
        </div>
        <div className="absolute bottom-0 mb-20">
          <h3 className="font-semibold text-gray-800">Items :</h3>
          <h3 className="font-semibold text-gray-800">Total Amount :</h3>
          <hr />
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg border-none w-full">
            CheckOut
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
