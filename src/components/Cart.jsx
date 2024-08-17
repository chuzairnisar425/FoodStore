import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Cart() {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-11/12 sm:w-11/12 md:w-[40vw] lg:w-[20vw] h-full bg-white p-5 mb-3  duration-500 transition-all ease-in-out  ${activeCart ? "duration-500 transition-all ease-in-out" : " hidden"
          }`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl - font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 outline cursor-pointer border-gray-600 text-gray-600 font-bold p-1
          hover:text-red-300 hover:border-red-300 text-xl rounded-md "
          />
        </div>
        {cartItems.length > 0 ? cartItems.map((food) => {
          return (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}s
              qty={food.qty}
            />
          );
        }):<h2 className="text-center text-xl font-bold text-gray-800">Your cart is empty</h2>}

        <div className="absolute bottom-0 mb-20">
          <h3 className="font-semibold text-gray-800">Items :</h3>
          <h3 className="font-semibold text-gray-800">Total Amount :</h3>
          <hr />
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg border-none w-full">
            CheckOut
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className="rounded-lg bg-white shadow-md text-3xl p-3 fixed bottom-4 right-4"
      />
    </>
  );
}

export default Cart;
