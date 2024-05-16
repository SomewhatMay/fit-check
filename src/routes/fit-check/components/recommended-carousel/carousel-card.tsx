import React from "react";
import logo from "../../../../logo.svg";

export function CarouselCard() {
  return (
    <div className="bg-gray-400 rounded-[3rem] h-full w-[30rem] flex flex-col pt-[4rem]">
      <span className="font-bold text-7xl text-center">Daily Fit</span>
      <img
        src={logo}
        alt="fitImage"
        className="p-4 block w-full h-full object-cover"
      />
    </div>
  );
}
