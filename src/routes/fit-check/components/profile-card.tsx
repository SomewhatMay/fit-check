import React from "react";
import logo from "../../../logo.svg";

export function ProfileCard() {
  return (
    <div className="w-full p-5 mt-[5rem] h-[20rem] flex justify-center">
      <div className="inline-flex items-center">
        <div className="bg-gray-400 rounded-full h-[15rem] mr-[2rem] aspect-square">
          <img
            src={logo}
            alt="avatar"
            className="w-full h-full inline-block"
          />
        </div>
        <div className="inline-block my-auto">
          <div className="text-6xl text-gray-700 font-bold">John Doe</div>
          <div className="text-6xl text-gray-700">@JohnDoe</div>
          <div className="text-6xl text-gray-700 font-bold">Points: 15,000</div>
        </div>
      </div>
    </div>
  );
}
