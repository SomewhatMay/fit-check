import { createContext, useContext, useState } from "react";
import { homePage } from "../App";

const PageContext = createContext<
  [number, React.Dispatch<React.SetStateAction<number>>] | undefined
>(undefined);

export function usePageIndex() {
  const context = useContext(PageContext);

  if (!context)
    throw new Error("usePageIndex must be used within a PageIndexProvider");

  const [pageIndex] = context;

  return pageIndex;
}

export function useSetPageIndex() {
  const context = useContext(PageContext);

  if (!context)
    throw new Error("usePageIndex must be used within a PageIndexProvider");

  const [, setPageIndex] = context;

  return setPageIndex;
}

export function PageIndexProvider({ children }: { children: React.ReactNode }) {
  const [pageIndex, setPageIndex] = useState(homePage);
  return (
    <PageContext.Provider value={[pageIndex, setPageIndex]}>
      {children}
    </PageContext.Provider>
  );
}
