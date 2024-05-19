import { NavButton, Navbar } from "../navbar";
import {
  usePageIndex,
  useSetPageIndex,
} from "../../contexts/page-index-context";
import { NavViewPage } from "./nav-view-page";

interface props {
  children: {
    icon: string;
    node: React.ReactNode;
  }[];
}

export function NavView({ children }: props) {
  return (
    <>
      <div className="pt-[8rem] w-[100vw] flex overflow-y-clip overscroll-y-contain overflow-x-clip">
        {children.map((child, index) => {
          return (
            <NavViewPage
              childNode={child.node}
              key={index}
              pageIndex={index}
            />
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
