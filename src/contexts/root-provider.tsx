import { ProductsProvider } from "../contexts/products-context";
import { PostsProvider } from "../contexts/posts-context";
import { PageIndexProvider } from "./page-index-context";
import { SelectedBrandProvider } from "./selected-brand-context";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProductsProvider>
      <PostsProvider>
        <PageIndexProvider>
          <SelectedBrandProvider>{children}</SelectedBrandProvider>
        </PageIndexProvider>
      </PostsProvider>
    </ProductsProvider>
  );
}
