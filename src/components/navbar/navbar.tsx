import React from "react";
import { NavButton } from "./navbutton";
import logo from "../../logo.svg";

export function Navbar() {
  return (
    <div className="border-t-2 border-black absolute bottom-0 w-full py-3 px-2">
      <NavButton imageId={logo} />
    </div>
  );
}
