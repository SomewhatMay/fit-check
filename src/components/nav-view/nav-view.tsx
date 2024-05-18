import { useState } from "react";
import { NavButton, Navbar } from "../navbar";

interface props {
  children: {
    icon: string;
    node: React.ReactNode;
  }[];
}

export function NavView({ children }: props) {
  const [pageIndex, setPageIndex] = useState(Math.floor(children.length / 2));

  return (
    <>
      <div className="pb-[12rem] pt-[8rem] w-[100vw] h-[100vh] max-h-[100vh] flex overflow-y-clip overscroll-y-contain overflow-x-clip">
        {children.map((child, index) => (
          <div
            key={index}
            className="overflow-y-scroll min-w-[100vw] transition-all relative"
            style={{
              transform: `translateX(${-pageIndex * 100}%)`,
            }}
          >
            {child.node}
          </div>
        ))}
      </div>
      <Navbar>
        {children.map((child, index) => (
          <NavButton
            key={index}
            imageId={child.icon}
            onClick={() => setPageIndex(index)}
          />
        ))}
      </Navbar>
    </>
  );
}
