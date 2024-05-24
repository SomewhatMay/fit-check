import { NavButton, Navbar } from "../navbar";
import { usePageIndex } from "../../contexts/page-index-context";
import { useEffect } from "react";

interface props {
  children: {
    icon: string;
    node: React.ReactNode;
  }[];
}

export function NavView({ children }: props) {
  const pageIndex = usePageIndex();

  useEffect(() => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 75);
  }, [pageIndex]);

  return (
    <>
      <div className="pt-[8rem] w-[100vw] flex overflow-y-clip overscroll-y-contain overflow-x-clip">
        {children.map((child, index) => {
          return (
            <div
              key={index}
              className="overflow-y-scroll min-w-[100vw] transition-all relative"
              style={{
                transform: `translateX(${-pageIndex * 100}%)`,
              }}
            >
              {child.node}
            </div>
          );
        })}
      </div>
      <Navbar>
        {children.map((child, index) => (
          <NavButton
            key={index}
            imageId={child.icon}
            pageIndex={index}
          />
        ))}
      </Navbar>
    </>
  );
}
