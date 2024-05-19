import { useEffect, useRef, useState } from "react";
import { Product } from "../../contexts/products-context";
import { Card } from "./card";

interface props {
  name: string;
  items: Product[];
  priceFormatter: (price: number) => string;
}

export function ItemsList({ name, items, priceFormatter }: props) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(cardRef.current!);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [cardRef, items]);

  return (
    <div className="w-full px-[2rem] pt-[1rem]">
      <div
        className="text-4xl my-[2rem] font-bold transition-opacity opacity-0"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {name}
      </div>
      <div ref={cardRef} className="translate-y-[10rem]"></div>
      <div className="grid grid-flow-col auto-cols-[20rem] gap-[0rem] w-full overflow-x-auto overscroll-x-contain overflow-y-clip">
        {items.map((item, index) => (
          <Card
            key={item.id}
            product={item}
            visible={visible}
            index={index}
            priceFormatter={priceFormatter}
          />
        ))}
      </div>
    </div>
  );
}
