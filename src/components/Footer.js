import React from "react";
import { BiWorld } from "react-icons/bi";
import { VscChevronUp } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="flex bg-white h-12 border-t-2 shadow-md shadow-gray-600 sticky justify-between bottom-0">
      <div className="flex justify-evenly items-center gap-2 px-14">
        <p className="hover:cursor-pointer">© 2023 Airbnb, Inc.</p>
        <p> · </p>
        <p className="hover:cursor-pointer hover:underline">Terms</p>
        <p> · </p>
        <p className="hover:cursor-pointer hover:underline">Sitemap</p>
        <p> · </p>
        <p className="hover:cursor-pointer hover:underline">Privacy</p>
        <p> · </p>
        <p className="hover:cursor-pointer hover:underline">
          Your Privacy Choices
        </p>
        <p> · </p>
        <p className="hover:cursor-pointer hover:underline">Destinations</p>
      </div>
      <div className="flex justify-evenly items-center gap-4 px-14">
        <BiWorld className="hover:cursor-pointer" />
        <p className="hover:cursor-pointer hover:underline">English (US)</p>
        <p className="hover:cursor-pointer hover:underline">€ EUR</p>
        <p className="hover:cursor-pointer hover:underline">
          Support & resources
        </p>
        <VscChevronUp className="hover:cursor-pointer hover:underline" />
      </div>
    </div>
  );
};

export default Footer;
