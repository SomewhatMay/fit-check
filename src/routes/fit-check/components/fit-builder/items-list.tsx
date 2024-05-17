import { useState } from "react";
import aiStars from "../../../../static/ai-stars.png";

interface props {
  name: string;
  randomizeOthers: () => void;
  items: {
    id: number;
    imageId: string;
    recommended: boolean;
  }[];
}

export function ItemsList({ name, randomizeOthers, items }: props) {
  const [selected, setSelected] = useState<(typeof items)[0]>(items[0]);

  return (
    <div className="px-[2rem] pb-4">
      <div className="text-3xl">{name}</div>
      <div className="">
        <div
          key={"selected"}
          className="inline-block w-[19%] h-full aspect-square"
        >
          <img
            src={selected.imageId}
            alt="item"
            className="h-full rounded-[2rem] mt-5 inline-block object-cover border-4 border-orange-500"
          />
        </div>
        <div className="inline-grid grid-flow-col auto-cols-[21%] ml-[2rem] w-[75%] gap-[1.5rem] overflow-x-auto pb-[3rem] overscroll-x-contain">
          {items.map((item) => (
            <button
              key={item.id}
              className="inline-block h-full aspect-square relative"
              onClick={() => {
                setSelected(item);
                randomizeOthers();
              }}
            >
              {item.recommended && (
                <img
                  src={aiStars}
                  alt="ai-generated-content-identifier"
                  className="top-[5%] right-[-2%] h-[5rem] w-[5rem] object-contain absolute"
                />
              )}
              <img
                src={item.imageId}
                alt="item"
                className="h-full rounded-[2rem] mt-5 inline-block object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
