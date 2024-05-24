import { ProductsProvider } from "../contexts/products-context";
import { PostsProvider } from "../contexts/posts-context";
import { PageIndexProvider } from "./page-index-context";
import { SelectedBrandProvider } from "./selected-brand-context";
import { SettingsOptionsProvider } from "./settings-options-context";
import { ModalContextProvider } from "./modal-context";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProductsProvider>
      <PostsProvider>
        <PageIndexProvider>
          <SelectedBrandProvider>
            <SettingsOptionsProvider>
              <ModalContextProvider>{children}</ModalContextProvider>
            </SettingsOptionsProvider>
          </SelectedBrandProvider>
        </PageIndexProvider>
      </PostsProvider>
    </ProductsProvider>
  );
}
