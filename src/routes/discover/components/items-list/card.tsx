import { Product } from "../../../../contexts/products-context";

interface props {
  product: Product;
}

export function Card({ product }: props) {
  return (
    <div className="w-[19rem]">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full object-cover aspect-square rounded-[2rem]"
      />
      <div className="text-3xl">{product.name}</div>
      <div className="text-2xl">${product.price}</div>
    </div>
  );
}
