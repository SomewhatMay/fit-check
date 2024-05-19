import { useState, useMemo } from "react";
import {
  useSelectedBrand,
  useSetSelectedBrand,
} from "../../../contexts/selected-brand-context";

export function BrandChooser() {
  const brands = useMemo(
    () => [
      "Nike",
      "Polo",
      "Adidas",
      "Puma",
      "Jordan",
      "Bape",
      "Essentials",
      "Denem Tears",
      "Uniqlo",
      "Roots",
      "Old Navy",
      "N&M",
    ],
    []
  );
  const selectedBrand = useSelectedBrand();
  const setSelectedBrand = useSetSelectedBrand();

  return (
    <div className="w-full grid grid-flow-col space-between gap-[2rem] auto-cols[31%] mt-[2rem] px-[1.5rem] overflow-y-clip overflow-x-auto overscroll-x-contain">
      {brands.map((brand) => (
        <button
          onClick={() => setSelectedBrand(brand)}
          className={`py-[1rem] px-[2rem] mb-[1rem] text-4xl min-w-max rounded-[1.25rem] transition-all ${
            selectedBrand === brand ? "bg-gray-400" : "bg-gray-300"
          }`}
        >
          {brand}
        </button>
      ))}
    </div>
  );
}
