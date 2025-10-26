import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import { RiHeart3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";

import { useSelector } from "react-redux";

import avatarImg from "../assets/avatar.png";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="max-w-screen-xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <CgMenuLeftAlt className="size-6" />
          </Link>

          {/* Search Input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearch className="inline-block absolute inset-y-2 left-3" />
            <input
              type="text"
              placeholder="what are you looking for ?"
              className="bg-[#EAEAEA] py-1 md:px-8 px-6 rounded-md w-full focus:outline-none"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          {/* User Icon */}
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt="User icon"
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
              </>
            ) : (
              <Link to="/login">
                {" "}
                <FaRegUser className="size-6" />{" "}
              </Link>
            )}

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                <ul className="py-2">
                  {navigation.map((item) => (
                    <li
                      key={item.name}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      handleLogout();
                      setIsDropdownOpen(false);
                    }}
                  >
                    <button>Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button className="hidden sm:block">
            <RiHeart3Line className="size-6" />
          </button>
          <Link to="/cart">
            <div className="bg-primary rounded-sm sm:px-6 py-2 flex items-center justify-around">
              <PiShoppingCartBold className="size-4" />
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length > 0 ? `${cartItems.length}` : "0"}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
