import { useEffect } from "react";
import {
  usePants,
  useShirts,
} from "../../../../components/contexts/products-context";
import aiStars from "../../../../static/ai-stars.png";
import { ItemsList } from "./items-list";
import { shuffleArray } from "../../../../util/shuffle-array";

export function FitBuilder() {
  const shirts = useShirts();
  const pants = usePants();

  useEffect(() => {
    shuffleArray(shirts);
  }, [shirts]);

  useEffect(() => {
    shuffleArray(pants);
  }, [pants]);

  const shirtsStartIndex = Math.floor(Math.random() * (shirts.length - 10));
  const pantsStartIndex = Math.floor(Math.random() * (pants.length - 10));

  return (
    <div className="mt-[2rem]">
      <div className="text-black w-full text-center">
        <span className="block text-6xl">Build your fit</span>
        <span className="block text-3xl text-gray-400 mt-4">
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
