import React from "react";
import { Link } from "react-router-dom";
const Navlist = ({ toggleNav, setToggleNav, auth }) => {
    return (
        <div
            className={`${!toggleNav && "hidden"
                } fixed top-12 right-5 lg:right-8 p-3 w-fit bg-white bg-opacity-10 backdrop-blur-sm flex flex-col justify-center items-start rounded-lg shadow-lg border-white font-bold text-gray-500 transition-all ease-in-out duration-500`}>
            {auth ? (
                <li className="hover:text-black  select-none list-none no-underline  text-gray-600">Logout</li>
            ) : (
                <div className="flex flex-col">
                    <Link to="/login" className="hover:text-black select-none no-underline text-gray-600">
                        Login
                    </Link>
                    <Link to="/signup" className="hover:text-black select-none no-underline text-gray-600">
                        Signup
                    </Link>
                </div>
            )}
        </div>
    );
};
export default Navlist;
