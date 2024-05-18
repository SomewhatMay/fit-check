import { Product } from "../../contexts/products-context";
import { Card } from "./card";

interface props {
  name: string;
  items: Product[];
}

export function ItemsList({ name, items }: props) {
  return (
    <div className="w-full px-[2rem]">
      <div className="text-4xl my-[2rem]">{name}</div>
      <div className="grid grid-flow-col auto-cols-[20rem] gap-[1.5rem] justify-between w-full overflow-x-auto overscroll-x-contain">
        {items.map((item) => (
          <Card
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </div>
  );
}
