import { SearchBar } from "../../components/search-bar";
import { useAllProducts } from "../../contexts/products-context";
import { Carousel } from "./components/carousel";

export function Discover() {
  const products = useAllProducts();

  return (
    <>
      <SearchBar />
      {/* Title */}
      <div className="text-7xl w-full px-[2rem] my-[2rem] text-center mt-[2.5rem]">
        Discover
      </div>

      {/* Category Chooser */}
      <div className="flex w-full px-[2rem] items-center">
        {["Jackets", "Shoes", "Shirts", "Pants", "Hoodies"].map((category) => {
          return (
            <span
              className={`w-full mx-2 pt-4 pb-5 rounded-[2rem] text-center mt-[2rem] ${
                category === "Shirts" ? "bg-gray-300 text-5xl" : "text-4xl"
              }`}
            >
              {category}
            </span>
          );
        })}
      </div>

      <Carousel items={products.slice(0, 5)} />
    </>
  );
}
