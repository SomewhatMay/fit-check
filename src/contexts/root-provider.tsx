import { ProductsProvider } from "../contexts/products-context";
import { PostsProvider } from "../contexts/posts-context";
import { PageIndexProvider } from "./page-index-context";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProductsProvider>
      <PostsProvider>
        <PageIndexProvider>{children}</PageIndexProvider>
      </PostsProvider>
    </ProductsProvider>
  );
}
