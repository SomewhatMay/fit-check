import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { Product } from "../contexts/products-context";
import { shuffleArray } from "../util/shuffle-array";
import { ItemsList } from "./items-list";
import { usePageIndex } from "../contexts/page-index-context";
import { useSelectedBrand } from "../contexts/selected-brand-context";
import { usePrevious } from "@uidotdev/usehooks";

interface props {
  subheadings: string[];
  productsList: Product[];
  pageIndex: number;
  priceFormatter: (price: number) => string;
}

export function ItemsListScroller({
  subheadings,
  productsList,
  pageIndex,
  priceFormatter,
}: props) {
  const [, startTransition] = useTransition();
  const [visibleSubheadings, setVisibleSubheadings] = useState<string[]>([]);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const currentPageIndex = usePageIndex();
  const selectedBrand = useSelectedBrand();
  const previousSelectedBrand = usePrevious(selectedBrand);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timeoutId = loadMoreSubheadings();
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

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [sentinelRef]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (currentPageIndex !== pageIndex) {
      startTransition(() => {
        timeoutId = setTimeout(() => setVisibleSubheadings([]), 300);
      });
    } else {
      if (previousSelectedBrand !== selectedBrand) {
        startTransition(() => setVisibleSubheadings([]));
      }

      timeoutId = loadMoreSubheadings();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [productsList, currentPageIndex, selectedBrand]);

  const loadMoreSubheadings = () => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;

    startTransition(() => {
      timeoutId = setTimeout(
        () =>
          setVisibleSubheadings((prev) => {
            const remainingSubheadings = subheadings.slice(
              prev.length,
              prev.length + 2
            );
            return [...prev, ...remainingSubheadings];
          }),
        150
      );
    });

    return timeoutId;
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
            priceFormatter={priceFormatter}
          />
        );
      }),
    [visibleSubheadings, productsList]
  );

  return (
    <div>
      {allItemsLists}
      <div ref={sentinelRef} className="h-[4rem]" />
      {visibleSubheadings.length === subheadings.length ? (
        <div className="text-4xl text-center mt-0 mb-[4rem]">
          You've reached the end!
        </div>
      ) : (
        <div className="h-[10rem] w-full text-gray-400 text-3xl text-center mt-0 mb-[4rem]">
          Loading more...
        </div>
      )}
    </div>
  );
}
