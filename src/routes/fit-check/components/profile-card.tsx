import React from "react";
import logo from "../../../logo.svg";

export function ProfileCard() {
  return (
    <div className="w-full p-5 mt-[5rem] h-[25rem] bg-gray-300 inline-flex">
      <img
        src={logo}
        alt="avatar"
        className="rounded-full w-[19rem] h-full inline-block"
      />
      <div className="inline-block my-auto">
        <div className="text-6xl text-gray-700 font-bold">John Doe</div>
        <div className="text-6xl text-gray-700">@JohnDoe</div>
        <div className="text-6xl text-gray-700 font-bold">Points: 15,000</div>
      </div>
    </div>
  );
}
