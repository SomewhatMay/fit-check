import React from "react";

interface props {
  imageId: string;
}

export function NavButton({ imageId }: props) {
  return (
    <button className="w-10 h-10 rounded-lg bg-black">
      <img
        src={imageId}
        alt={""}
      />
    </button>
  );
}
