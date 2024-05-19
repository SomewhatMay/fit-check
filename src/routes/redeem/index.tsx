import { useMemo } from "react";
import { CategoryChooser } from "../../components/category-chooser";
import { ProfileCard } from "../../components/profile-card";
import { useAllProducts } from "../../contexts/products-context";
import { shuffleArray } from "../../util/shuffle-array";
import { ItemsListScroller } from "../../components/items-list-scroller";

export function Redeem() {
  const allProducts = useAllProducts();
  const subheadings = [
    "Redeem now",
    "Redeem with more purchases",
    "Trending right now",
    "You may also like",
    "Limited Time Offers",
    "Exclusive Rewards",
    "Hot Deals",
    "Special Promotions",
    "Redeem Your Points",
    "Available Now",
    "Act Fast",
    "Recommended for You",
    "Top Rewards",
    "Just Added",
    "Popular Rewards",
    "Best Value",
    "Don't Miss Out",
    "Earn More, Redeem More",
    "Limited Stock",
    "Get It Before It's Gone",
  ];

  useMemo(() => {
    shuffleArray(allProducts);
  }, [allProducts]);

  return (
    <>
      <ProfileCard />
      <div className="text-7xl w-full px-[2rem] my-[2rem] text-center mt-[2.5rem]">
        Redeem
      </div>
      <CategoryChooser />
      <ItemsListScroller
        pageIndex={3}
        subheadings={subheadings}
        productsList={allProducts}
        priceFormatter={(price) => `${price} Points`}
      />
    </>
  );
}
