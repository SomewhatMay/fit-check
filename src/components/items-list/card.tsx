import { useEffect, useRef, useState } from "react";
import { Product } from "../../contexts/products-context";

interface props {
  product: Product;
  index: number;
  visible: boolean;
  priceFormatter: (price: number) => string;
}

export function Card({ product, index, visible, priceFormatter }: props) {
  return (
    <div
      className="w-[91%] transition-all opacity-0 duration-400 pb-[1rem]"
      style={{
        opacity: visible ? 1 : 0,
        translate: visible ? `0 0` : `0 50%`,
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full object-cover aspect-square rounded-[2rem]"
      />
      <div className="text-3xl">{product.name}</div>
      <div className="text-2xl">{priceFormatter(product.price)}</div>
    </div>
  );
}
