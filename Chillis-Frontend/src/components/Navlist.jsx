import React from "react";
import { Link } from "react-router-dom";
const Navlist = ({ toggleNav, setToggleNav, auth }) => {
    return (
        <div
            className={`${!toggleNav && "translate-x-[200px]"
                } fixed top-12 right-5 lg:right-8 p-3 w-fit bg-white bg-opacity-10 backdrop-blur-sm flex flex-col justify-center items-start`}>
            {auth ? (
                <li className="hover:text-black select-none list-none">Logout</li>
            ) : (
                <div className="flex flex-col">
                    <Link to="/login" className="hover:text-black select-none ">
                        Login
                    </Link>
                    <Link to="/signup" className="hover:text-black select-none ">
                        Signup
                    </Link>
                </div>
            )}
        </div>
    );
};
export default Navlist;
