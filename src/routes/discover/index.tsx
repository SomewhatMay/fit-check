import { useEffect, useMemo, useRef, useState } from "react";
import { SearchBar } from "../../components/search-bar";
import { useAllProducts } from "../../contexts/products-context";
import { Carousel } from "./components/carousel";
import { shuffleArray } from "../../util/shuffle-array";
import { CategoryChooser } from "../../components/category-chooser";
import { ItemsListScroller } from "../../components/items-list-scroller";
import { BrandChooser } from "./components/brand-chooser";
import { useSelectedBrand } from "../../contexts/selected-brand-context";

export function Discover() {
  const products = useAllProducts();
  const allProducts = useAllProducts();
  const selectedBrand = useSelectedBrand();
  const subheadings = [
    "Similar to your style",
    "Trending right now",
    "New releases",
    "Try something new",
    "Our favorite",
    "Editor's Picks",
    "Just for You",
    "Top Rated",
    "Exclusive Offers",
    "Limited Time Deals",
    "Staff Recommendations",
    "Must-Haves",
    "Popular Among Friends",
    "Seasonal Favorites",
    "Bestsellers",
    "Highly Recommended",
    "Customer Favorites",
    "Inspired by Your History",
    "Curated Collections",
    "Hot Picks",
    "Handpicked for You",
    "Discover More",
    "Hidden Gems",
    "You Might Also Like",
    "Don't Miss Out",
  ];

  const shuffledProducts = useMemo(
    () => shuffleArray([...allProducts]),
    [allProducts, selectedBrand]
  );

  return (
    <>
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

      <BrandChooser />

      <ItemsListScroller
        pageIndex={1}
        subheadings={subheadings}
        productsList={(() => {
          return shuffledProducts;
        })()}
        priceFormatter={(price) => `$${price}`}
      />
    </>
  );
}
