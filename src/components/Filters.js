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
import { FaSkiing } from "react-icons/fa";
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
    { title: "Mountain", icon: <TbMountain /> },
    { title: "Ski-in/out", icon: <FaSkiing /> },
    { title: "Desert", icon: <GiDesert /> },
  ];
  return (
    <div className="sm:mx-6 md:mx-10 lg:mx-14 mt-4 mx-4">
      <div className="flex gap-8 justify-center text-[#6e6e6e]">
        {sorting.map((obj) => (
          <Filter title={obj.title} icon={obj.icon} />
        ))}
        <button className="flex justify-center items-center gap-2 px-[10px] rounded-md border-2 text-[12px]">
          <VscSettings />
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
