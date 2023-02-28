import React from "react";
import Filter from "./Filter";

import {
  GiIsland,
  GiWoodCabin,
  GiCastle,
  GiCampingTent,
  GiGrapes,
  GiWindmill,
  GiDesert,
  GiFamilyHouse,
} from "react-icons/gi";
import { TbBeach, TbSailboat, TbMountain } from "react-icons/tb";
import { IoSnow, IoGolf } from "react-icons/io5";
// import { FaSkiing } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

const Filters = () => {
  const sorting = [
    { title: "Beach", icon: <TbBeach /> },
    { title: "Islands", icon: <GiIsland /> },
    { title: "Boats", icon: <TbSailboat /> },
    { title: "Cabins", icon: <GiWoodCabin /> },
    { title: "Castles", icon: <GiCastle /> },
    { title: "Camping", icon: <GiCampingTent /> },
    { title: "Golfing", icon: <IoGolf /> },
    { title: "Vineyards", icon: <GiGrapes /> },
    { title: "Mansion", icon: <GiFamilyHouse /> },
    { title: "Windmills", icon: <GiWindmill /> },
    { title: "Arctic", icon: <IoSnow /> },
    {
      title: "Mountain",
      icon: <TbMountain />,
      css: "hidden md:flex lg:flex 2xl:flex",
    },
    { title: "Desert", icon: <GiDesert />, css: "hidden lg:flex 2xl:flex" },
  ];
  return (
    <div className="relative my-4">
      <div className="flex sm:text-[14px] md:text-[16px] gap-4 text-[#6e6e6e] xl:gap-6 3xl:gap-12">
        {sorting.map((obj) => (
          <Filter title={obj.title} icon={obj.icon} css={obj.css} />
        ))}
        <button className="flex md:justify-center items-center gap-2 px-[12px] rounded-md border-2 text-[12px]">
          <VscSettings />
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
