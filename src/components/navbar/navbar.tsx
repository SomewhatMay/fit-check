import React from "react";
import { NavButton } from "./navbutton";
import logo from "../../logo.svg";

export function Navbar({ children }: React.PropsWithChildren) {
  return (
    // TODO Make navbar sticky
    <div className="fixed bottom-0 z-30 px-[4rem] flex justify-around w-full bg-white border-t-2 border-black p-7">
      {children}
    </div>
  );
}
