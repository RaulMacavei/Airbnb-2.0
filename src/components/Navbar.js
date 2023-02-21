import React from "react";
import logo from "../assets/logo1.png";
import { BiWorld } from "react-icons/bi";
import { BiMenu, BiUser } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b px-20">
      {/* Left */}
      <div className="h-16 flex mr-20">
        <img src={logo} className="h-24 w-auto -my-4" alt="" />
      </div>
      {/* Middle */}
      <div className="flex justify-center items-center border relative shadow-sm shadow-gray-300 rounded-full">
        <input
          type="search"
          className="py-[6px] w-[15rem] outline-0 rounded-full"
        />
        <div className="flex justify-between absolute w-full pr-10">
          <button className="w-full text-[12px]">Place</button>
          <button className="w-full border-x text-[12px]">Time</button>
          <button className="w-full text-gray-600/60 pl-2 text-[12px]">
            Group Size
          </button>
        </div>
        <div className="bg-[#ff5a60] p-2 rounded-full mr-2 text-[12px]">
          <BiSearchAlt className="text-white" />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center  font-semibold text-gray-600">
        <p className="text-[13px]">Rent a House</p>
        <BiWorld className="mx-4" />
        <div className="flex items-center gap-2 border px-3 py-2 rounded-full shadow-sm shadow-gray-300 ">
          <BiMenu />
          <BiUser className="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
