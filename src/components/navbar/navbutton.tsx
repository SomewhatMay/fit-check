import React from "react";

interface props {
  imageId: string;
  onClick: () => void;
}

export function NavButton({ imageId, onClick }: props) {
  return (
    <button
      onClick={onClick}
      className="h-[9rem] aspect-square rounded-lg"
    >
      <img
        src={imageId}
        alt={""}
      />
    </button>
  );
}
