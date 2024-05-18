import React from "react";
import { NavButton } from "./navbutton";
import logo from "../../logo.svg";

export function Navbar() {
  return (
    <div className="absolute bottom-0 z-30 w-full bg-white border-t-2 border-black p-7">
      <NavButton imageId={logo} />
    </div>
  );
}
