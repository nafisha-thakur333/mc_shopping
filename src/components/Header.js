import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import useShowOnlineStatus from "../utils/useShowOnlineStatus";

const Header = () => {
  const onlinestatus = useOnlineStatus();

  //Subscribing to the store using a Selector 
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 shadow-lg">
      {/* Logo Container */}
      <div className="logo-container">
        <img className="w-32 h-20" src={LOGO_URL} alt="Logo" />
      </div>

      {/* Navigation and Status */}
      <div className="flex items-center space-x-6">
        {/* Online Status */}
        <div className="text-white flex items-center space-x-2 font-semibold">
        <span
          className={`inline-block w-3 h-3 rounded-full ${onlinestatus ? 'bg-green-500' : 'bg-red-500'}`}
        ></span>
        <span>{onlinestatus ? "Online" : "Offline"}</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white font-semibold">
          <li className="hover:text-yellow-400 transition-all duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400 transition-all duration-200">
            <Link to="/cart">
              Cart - ({cartItems.length})
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Header;
