import { useEffect, useRef } from "react";
import { usePageIndex } from "../../contexts/page-index-context";

interface props {
  childNode: React.ReactNode;
  pageIndex: number;
}

export function NavViewPage({ childNode, pageIndex }: props) {
  const currentPageIndex = usePageIndex();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (pageRef.current && currentPageIndex !== pageIndex) {
      timeoutId = setTimeout(() => {
        pageRef.current?.scrollTo({ top: 0 });
      }, 150);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentPageIndex, pageIndex]);

  return (
    <div
      ref={pageRef}
      key={pageIndex}
      className="overflow-y-scroll min-w-[100vw] transition-all relative"
      style={{
        transform: `translateX(${-currentPageIndex * 100}%)`,
      }}
    >
      {childNode}
    </div>
  );
}
