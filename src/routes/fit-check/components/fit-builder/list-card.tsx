import aiStars from "../../../../static/ai-stars.png";
import { Product } from "../../../../contexts/products-context";
import { FitBuilderItem } from "./items-list";
import { useEffect, useMemo, useState } from "react";
import { usePrevious } from "@uidotdev/usehooks";

interface props {
  item: FitBuilderItem;
  index: number;
  setSelected: (item: FitBuilderItem) => void;
  randomizeOthers: () => void;
}

export function ListCard({ item, index, setSelected, randomizeOthers }: props) {
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useMemo(() => {
    setMounted(false);
  }, [index]);

  useEffect(() => {
    if (!mounted) {
      const timeoutId = setTimeout(() => setMounted(true), 100 * index);

      return () => clearTimeout(timeoutId);
    }
  }, [index]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = item.imageId;
  }, [item]);

  return (
    <button
      key={item.id}
      className="relative inline-block h-full transition-all duration-400 aspect-square"
      style={{
        opacity: mounted ? 1 : 0,
        translate: mounted ? "0 0" : "0 50%",
      }}
      onClick={() => {
        setSelected(item);
        randomizeOthers();
      }}
    >
      {item.recommended && (
        <img
          src={aiStars}
          alt="ai-generated-content-identifier"
          className="top-[5%] right-[-2%] h-[5rem] w-[5rem] object-contain absolute transition-all delay-150"
          style={{
            opacity: mounted ? 1 : 0,
            translate: mounted ? "0 0" : "0 50%",
          }}
        />
      )}
      {!imageLoaded ? (
        <div className="w-full h-full bg-gray-500 animate-pulse">
          Image is loading!
        </div>
      ) : (
        <img
          src={item.imageId}
          alt="item"
          className="h-full rounded-[2rem] mt-5 inline-block object-cover"
        />
      )}
    </button>
  );
}
