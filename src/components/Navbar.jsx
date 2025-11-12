import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white px-6 py-4 shadow-md sticky top-0 z-40">
       <Link to="/" className="text-2xl font-bold text-blue-600 lg:block hidden">
        Zentail
      </Link>
      <div className="relative flex-1 mx-10 max-w-2xl">
        <input type="text"
        placeholder="Search for products..."
        className="w-full border border-gray-300 rounded-md px-5 py-2 pl-12 focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
        <IoSearchOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"/>
      </div>
      <div className="flex items-center space-x-4 text-gray-700 text-xl">
        <Link className="relative">
          <FaCartShopping size={25} className=" cursor-pointer" />
          {/* Cart Count */}
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">
            2
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
