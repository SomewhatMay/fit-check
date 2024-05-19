import React from "react";
import logo from "../logo.svg";

export function ProfileCard() {
  return (
    <div className="w-full p-5 mt-[0.5rem] h-[20rem] flex justify-center">
      <div className="inline-flex items-center">
        <div className="bg-gray-400 rounded-full h-[13rem] mr-[2rem] aspect-square">
          <img
            src={logo}
            alt="avatar"
            className="inline-block w-full h-full"
          />
        </div>
        <div className="inline-block my-auto">
          <div className="text-5xl font-bold pb-[0.75rem] text-gray-700">
            John Doe
          </div>
          <div className="text-5xl text-gray-600 pb-[0.75rem]">@JohnDoe</div>
          <div className="text-5xl text-gray-400">Points: 15,000</div>
        </div>
      </div>
    </div>
  );
}
