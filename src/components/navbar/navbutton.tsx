import React, { useEffect } from "react";
import {
  usePageIndex,
  useSetPageIndex,
} from "../../contexts/page-index-context";

interface props {
  imageId: string;
  pageIndex: number;
}

export function NavButton({ imageId, pageIndex }: props) {
  const currentPageIndex = usePageIndex();
  const setPageIndex = useSetPageIndex();
  const selected = currentPageIndex === pageIndex;

  return (
    <button
      onClick={() => setPageIndex(pageIndex)}
      className="h-[8rem] m-[0rem] aspect-square rounded-lg"
    >
      <div
        className={`z-0 w-full h-full rounded-[2rem] transition-all duration-300 bg-gray-300 ${
          selected ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      />
      <img
        src={imageId}
        alt={""}
        className={`z-40 object-contain w-full h-full translate-y-[-100%] p-[1rem] transition-all duration-300 ${
          selected && "scale-90"
        }`}
      />
    </button>
  );
}
