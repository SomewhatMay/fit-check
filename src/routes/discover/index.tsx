import { useEffect, useMemo, useState } from "react";
import { SearchBar } from "../../components/search-bar";
import { useAllProducts, useShirts } from "../../contexts/products-context";
import { Carousel } from "./components/carousel";
import { ItemsList } from "./components/items-list/items-list";
import { shuffleArray } from "../../util/shuffle-array";
import { CategoryChooser } from "../../components/category-chooser";

export function Discover() {
  const products = useAllProducts();
  const shirts = useShirts();

  useMemo(() => {
    shuffleArray(shirts);
  }, [shirts]);

  const randomShirtsSlice = () => {
    const randomIndex = Math.floor(Math.random() * (shirts.length - 10));

    return shirts.slice(randomIndex, randomIndex + 10);
  };

  return (
    <>
      {/* Make this stick to the top! */}
      <div className="sticky t-0">
        <SearchBar />
        {/* Title */}
        <div className="text-7xl w-full px-[2rem] my-[2rem] text-center mt-[2.5rem]">
          Discover
        </div>

        {/* Category Chooser */}
        <CategoryChooser />
      </div>

      <Carousel items={products.slice(0, 5)} />

      <ItemsList
        items={randomShirtsSlice()}
        name="Similar to your style"
      />

      <ItemsList
        items={randomShirtsSlice()}
        name="Most Popular"
      />

      <ItemsList
        items={randomShirtsSlice()}
        name="New Releases"
      />
    </>
  );
}
