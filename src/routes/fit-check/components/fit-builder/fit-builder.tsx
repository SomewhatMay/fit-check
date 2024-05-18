import { useEffect, useState } from "react";
import { usePants, useShirts } from "../../../../contexts/products-context";
import aiStars from "../../../../static/ai-stars.png";
import { ItemsList } from "./items-list";
import { shuffleArray } from "../../../../util/shuffle-array";

export function FitBuilder() {
  const shirts = useShirts();
  const pants = usePants();

  const [shirtsStartIndex, setsShirtsStartIndex] = useState(0);
  const [pantsStartIndex, setPantsStartIndex] = useState(0);

  const randomizePants = () =>
    setPantsStartIndex(Math.floor(Math.random() * (pants.length - 10)));
  const randomizeShirts = () =>
    setsShirtsStartIndex(Math.floor(Math.random() * (shirts.length - 10)));

  useEffect(() => {
    shuffleArray(shirts);
    randomizeShirts();
  }, [shirts]);

  useEffect(() => {
    shuffleArray(pants);
    randomizePants();
  }, [pants]);

  return (
    <div className="mt-[2rem]">
      <div className="w-full text-center text-black">
        <span className="block text-6xl">Build your fit</span>
        <span className="block mt-4 text-3xl text-gray-400">
          <img
            src={aiStars}
            alt="ai-generated-content-identifier"
            className="h-[3rem] w-[3rem] object-contain inline-block"
          />
          recommended
        </span>
      </div>
      <div>
        <ItemsList
          name="Shirts"
          randomizeOthers={randomizePants}
          items={shirts
            .slice(shirtsStartIndex, shirtsStartIndex + 10)
            .map((shirt) => ({
              id: shirt.id,
              imageId: shirt.imageUrl,
              recommended: Math.random() > 0.5,
            }))}
        />
        <ItemsList
          name="Pants"
          randomizeOthers={randomizeShirts}
          items={pants
            .slice(pantsStartIndex, pantsStartIndex + 10)
            .map((pants) => ({
              id: pants.id,
              imageId: pants.imageUrl,
              recommended: Math.random() > 0.5,
            }))}
        />
      </div>
    </div>
  );
}
