import { NavButton, Navbar } from "./navbar";
import { usePageIndex, useSetPageIndex } from "../contexts/page-index-context";

interface props {
  children: {
    icon: string;
    node: React.ReactNode;
  }[];
}

export function NavView({ children }: props) {
  const pageIndex = usePageIndex();
  const setPageIndex = useSetPageIndex();

  return (
    <>
      <div className="pb-[11.5rem] pt-[8rem] w-[100vw] h-[100vh] max-h-[100vh] flex overflow-y-clip overscroll-y-contain overflow-x-clip">
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
