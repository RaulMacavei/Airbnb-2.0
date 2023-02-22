import React from "react";

const Filter = ({ icon, title }) => {
  return (
    <div className="flex hover:cursor-pointer hover:border-b-2 hover:text-[black] hover:transition duration-150 ease-out active:border-b-black flex-col text-[16px] gap-1 items-center">
      {icon}
      {title}
    </div>
  );
};

export default Filter;
