import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-3">
      <div className="">
        <h3 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className="text-2xl font-bold">The <span className="text-green-500 font-semibold"> Chillis</span></h1>
      </div>
      <div>
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="search"
          name="search"
          id=""
          placeholder="Search Here..."
          autoComplete="off"
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
      <GiHamburgerMenu className={`absolute top-5 right-5 lg:right-8 lg:top-6 text-xl text-gray-600 cursor-pointer ${toggleNav && 'hidden'
        } transition-all duration-500 ease-in-out
      `} onClick={() => setToggleNav(true)} /><MdClose className={`absolute top-5 right-5 lg:right-8 lg:top-6 text-xl text-gray-600 cursor-pointer ${!toggleNav && 'hidden'
        } transition-all duration-500 ease-in-out
      `} onClick={() => setToggleNav(false)} />
    </nav>
  );
};

export default Navbar;
