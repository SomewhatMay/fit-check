import React from "react";

interface props {
  imageId: string;
}

export function NavButton({ imageId }: props) {
  return (
    <button className="w-[10rem] h-[10rem] rounded-lg bg-black">
      <img src={imageId} alt={""} />
    </button>
  );
}
