import { createContext, useContext, useMemo } from "react";
import productsJson from "../../static/products.json";

export type Product = {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
};

export type AllProducts = typeof productsJson;

const ProductsContext = createContext<AllProducts | undefined>(undefined);

export function useProducts(): AllProducts {
  const products = useContext(ProductsContext);

  if (!products) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return products;
}

export function useShirts() {
  const products = useProducts();
  const shirts = useMemo(() => {
    const temp: Product[] = [];

    for (const brand of Object.values(products)) {
      for (const product of Object.values(brand["Shirts"])) {
        temp.push(product);
      }
    }

    return temp;
  }, [products]);

  return shirts;
}

export function usePants() {
  const products = useProducts();
  const pants = useMemo(() => {
    const temp: Product[] = [];

    for (const brand of Object.values(products)) {
      for (const product of Object.values(brand["Pants"])) {
        temp.push(product);
      }
    }

    return temp;
  }, [products]);

  return pants;
}

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProductsContext.Provider value={productsJson}>
      {children}
    </ProductsContext.Provider>
  );
}
