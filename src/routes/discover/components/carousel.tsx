import { Product } from "../../../contexts/products-context";

interface props {
  items: Product[];
}

export function Carousel({ items }: props) {
  return (
    <div className="w-full overflow-clip">
      <div className="h-[48rem] w-[120%] relative left-[-10%] bg-gray-300 flex justify-center py-[2rem] mt-[2rem]">
        {items.map((item, index) => {
          const centerBasedIndex = index - 2;
          return (
            <img
              key={item.id}
              src={item.imageUrl}
              alt={item.name}
              className={`w-[19rem] h-[40rem] object-cover rounded-[2rem] shadow-xl`}
              style={{
                transform: `translateY(${
                  (2 - Math.abs(centerBasedIndex)) * 1.75
                }rem) translateX(${-centerBasedIndex * 1.75}rem)`,
                zIndex: 2 - Math.abs(centerBasedIndex) + 5,
                // filter: `brightness(${100 - Math.abs(centerBasedIndex) * 10}%)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
