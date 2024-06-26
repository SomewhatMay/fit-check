import { createContext, useContext, useMemo } from "react";
import productsJson from "../static/data/products.json";

export type Product = {
  id: number;
  name: string;
  price: number;
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

export function useShoes() {
  const products = useProducts();
  const shoes = useMemo(() => {
    const temp: Product[] = [];

    for (const brand of Object.values(products)) {
      for (const product of Object.values(brand["Shoes"])) {
        temp.push(product);
      }
    }

    return temp;
  }, [products]);

  return shoes;
}

export function useAllProducts() {
  const products = useProducts();
  const allProducts = useMemo(() => {
    const temp: Product[] = [];

    for (const brand of Object.values(products)) {
      for (const category of Object.values(brand)) {
        for (const product of Object.values(category)) {
          temp.push(product);
        }
      }
    }

    return temp;
  }, [products]);

  return allProducts;
}

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProductsContext.Provider value={productsJson}>
      {children}
    </ProductsContext.Provider>
  );
}
