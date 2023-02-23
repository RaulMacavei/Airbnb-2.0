import React from "react";

const Rental = ({ image, title, description, beds, price }) => {
  return (
    <div className="hover:cursor-pointer">
      <div className="flex h-[220px]">
        <img src={image} alt="" className="object-cover rounded-xl" />
      </div>
      <div className="flex pt-1 text-[14px] font-semibold">{title}</div>
      <div className="flex text-[12px] text-gray-500">{description}</div>
      <div className="flex text-[12px] text-gray-500">{beds}</div>
      <div className="flex text-[13px] font-semibold">{price}</div>
    </div>
  );
};

export default Rental;
