import React from "react";

export function Navbar({ children }: React.PropsWithChildren) {
  return (
    // TODO Make navbar sticky
    <div className="bg-white fixed bottom-0 z-30 px-[2rem] flex justify-around w-full border-t-2 border-black p-7">
      {children}
    </div>
  );
}
