import { createContext, useContext, useState } from "react";

const SelectedBrandContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | undefined
>(undefined);

export function useSelectedBrand() {
  const context = useContext(SelectedBrandContext);

  if (!context)
    throw new Error("useSelectedBrand must be used within a PageIndexProvider");

  const [selectedBrand] = context;

  return selectedBrand;
}

export function useSetSelectedBrand() {
  const context = useContext(SelectedBrandContext);

  if (!context)
    throw new Error("usePageIndex must be used within a PageIndexProvider");

  const [, setSelectedBrand] = context;

  return setSelectedBrand;
}

export function SelectedBrandProvider({ children }: { children: React.ReactNode }) {
  const [selectedBrand, setSelectedBrand] = useState("Nike");
  return (
    <SelectedBrandContext.Provider value={[selectedBrand, setSelectedBrand]}>
      {children}
    </SelectedBrandContext.Provider>
  );
}
