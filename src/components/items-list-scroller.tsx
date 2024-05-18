import { useEffect, useMemo, useRef, useState } from "react";
import { Product } from "../contexts/products-context";
import { shuffleArray } from "../util/shuffle-array";
import { ItemsList } from "./items-list";

interface props {
  subheadings: string[];
  productsList: Product[];
}

export function ItemsListScroller({ subheadings, productsList }: props) {
  const [visibleSubheadings, setVisibleSubheadings] = useState<string[]>([]);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMoreSubheadings();
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const sentinel = sentinelRef.current;

    if (sentinel) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [sentinelRef]);

  useEffect(() => {
    loadMoreSubheadings();
  }, []);

  const loadMoreSubheadings = () => {
    setVisibleSubheadings((prev) => {
      const remainingSubheadings = subheadings.slice(
        prev.length,
        prev.length + 2
      );
      return [...prev, ...remainingSubheadings];
    });
  };

  const getRandomProductsSlice = () => {
    const randomIndex = Math.floor(Math.random() * (productsList.length - 10));

    return productsList.slice(randomIndex, randomIndex + 10);
  };

  const ProductSlices = useRef<Record<string, Product[]>>({});

  const allItemsLists = useMemo(
    () =>
      visibleSubheadings.map((name) => {
        let randomProductsSlice = ProductSlices.current[name];

        if (!randomProductsSlice) {
          randomProductsSlice = getRandomProductsSlice();
          ProductSlices.current[name] = randomProductsSlice;
        }

        return (
          <ItemsList
            key={name}
            name={name}
            items={randomProductsSlice}
          />
        );
      }),
    [visibleSubheadings]
  );

  return (
    <div>
      {allItemsLists}
      <div ref={sentinelRef} />
    </div>
  );
}
