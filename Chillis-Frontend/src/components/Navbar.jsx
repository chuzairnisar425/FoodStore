import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Navlist from "./Navlist";
import axios from 'axios'
axios.defaults.withCredentials = true;


import { loginUser, setUser } from '../redux/slices/AuthSlice'

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  const getUser = async () => {
    const res = await axios.get('http://localhost:5000/api/get-user', {
      withCredentials: true,
    })
    const data = await res.data;
    dispatch(setUser(data.user))
    dispatch(loginUser(data.isAuth))
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-3">
      <div className="">
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">
          The <span className="text-green-500 font-semibold"> Chillis</span>
        </h1>
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
      <GiHamburgerMenu
        className={`absolute top-5 right-6 lg:right-10 lg:top-8 text-xl text-gray-600 cursor-pointer  transition-all duration-500 ease-in-out ${toggleNav && "hidden"
          }
      `}
        onClick={() => setToggleNav(true)}
      />{" "}
      <MdClose
        className={`absolute top-5 right-6 lg:right-10 lg:top-8 text-xl text-gray-600 cursor-pointer transition-all duration-500 ease-in-out ${!toggleNav && "hidden"
          }`}
        onClick={() => setToggleNav(false)}
      />
      <Navlist toggleNav={toggleNav} setToggleNav={setToggleNav} auth={auth} />
    </nav>
  );
};

export default Navbar;
