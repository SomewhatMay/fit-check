import { useMemo } from "react";
import { CategoryChooser } from "../../components/category-chooser";
import { ItemsList } from "../../components/items-list";
import { ProfileCard } from "../../components/profile-card";
import { useAllProducts } from "../../contexts/products-context";
import { shuffleArray } from "../../util/shuffle-array";

export function Redeem() {
  const allProducts = useAllProducts();

  useMemo(() => {
    shuffleArray(allProducts);
  }, [allProducts]);

  const randomProductsSlice = () => {
    const randomIndex = Math.floor(Math.random() * (allProducts.length - 10));

    return allProducts.slice(randomIndex, randomIndex + 10);
  };

  return (
    <>
      <ProfileCard />
      <div className="text-7xl w-full px-[2rem] my-[2rem] text-center mt-[2.5rem]">
        Redeem
      </div>
      <CategoryChooser />
      <ItemsList
        name="Redeem now"
        items={randomProductsSlice()}
      />
      <ItemsList
        name="Redeem with more purchases"
        items={randomProductsSlice()}
      />
      <ItemsList
        name="You may also like"
        items={randomProductsSlice()}
      />
      <ItemsList
        name="Popular"
        items={randomProductsSlice()}
      />
    </>
  );
}
