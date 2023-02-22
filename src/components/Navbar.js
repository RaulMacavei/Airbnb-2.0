import React from "react";
import logo from "../assets/logo1.png";
import { BiWorld } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex justify-between border-y items-center sm:px-6 md:px-10 lg:px-14">
      {/* Mobile Device */}
      <div className="flex mt-4 mx-3 border-2 rounded-full md:hidden">
        <div className="flex w-[636px] h-[54px] rounded-full shadow-md">
          <div className="flex justify-center py-4 px-4">
            <BiSearchAlt className="text-[24px]" />
          </div>
          <div className="w-full pt-1">
            <div className="">Anywhere</div>
            <div className="text-[12px]">Any week • Add guests</div>
          </div>
        </div>
      </div>
      {/* Left */}
      <div className="hidden md:flex h-16 md:mr-[6rem] mr-0">
        <img
          src={logo}
          className="h-8 my-4 w-auto hover:cursor-pointer"
          alt=""
        />
      </div>
      {/* Middle */}
      <div className="hidden md:flex justify-center items-center border relative shadow-sm shadow-gray-300 rounded-full">
        <div className="w-[15rem] outline-0 rounded-full"></div>
        <div className="flex justify-between absolute w-full pr-10">
          <button className="w-full text-[12px]">Place</button>
          <button className="w-full border-x text-[12px]">Time</button>
          <button className="w-full text-gray-600/60 pl-2 text-[12px]">
            Group Size
          </button>
        </div>
        <div className="bg-[#ff5a60] p-2 rounded-full m-1 text-[12px] hover:cursor-pointer">
          <BiSearchAlt className="text-white" />
        </div>
      </div>
      {/* Right */}
      <div className="hidden md:flex items-center  font-semibold text-gray-600">
        <p className="text-[13px] hover:cursor-pointer">Rent a home</p>
        <BiWorld className="mx-4 hover:cursor-pointer" />
        <div className="flex items-center gap-2 border px-3 py-2 rounded-full shadow-md shadow-gray-300 ">
          <p className="text-[12px] hover:cursor-pointer">Sign in</p>
          <BiUser className="text-[18px] hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
