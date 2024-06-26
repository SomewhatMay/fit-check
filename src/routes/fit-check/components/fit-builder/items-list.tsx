import { useEffect, useRef, useState } from "react";
import { ListCard } from "./list-card";

export interface FitBuilderItem {
  id: number;
  imageId: string;
  recommended: boolean;
}

interface props {
  name: string;
  randomizeOthers: () => void;
  items: FitBuilderItem[];
}

export function ItemsList({ name, randomizeOthers, items }: props) {
  const [selected, setSelected] = useState<FitBuilderItem>(items[0]);
  const scrollDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [items]);

  return (
    <div className="px-[2rem] h-[18rem] pb-4">
      <div className="text-3xl">{name}</div>
      <div className="">
        <div className="inline-block w-[19%] h-full aspect-square">
          <img
            src={selected.imageId}
            alt="item"
            className="h-full rounded-[2rem] mt-5 inline-block object-cover border-4 border-orange-500"
          />
        </div>
        <div
          ref={scrollDivRef}
          className="inline-grid grid-flow-col auto-cols-[21%] ml-[2rem] w-[75%] gap-[2rem] overflow-x-auto pb-[3rem] overflow-y-visible overscroll-y-contain overscroll-x-contain"
        >
          {items.map((item, index) => (
            <ListCard
              key={item.id}
              item={item}
              index={index}
              setSelected={setSelected}
              randomizeOthers={randomizeOthers}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
