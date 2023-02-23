import React from "react";

const Filter = ({ icon, title, css }) => {
  return (
    <div
      className={` ${`${css}`} flex relative hover:cursor-pointer hover:text-[black] hover:transition duration-150 ease-out flex-col text-[16px] gap-1 items-center sm:text-[11px] md:text-[12px] lg:text-[16px] lg:px-[2px] xl:text-[18px] xl:px-[10px]`}
    >
      {icon}
      {title}
    </div>
  );
};

export default Filter;
