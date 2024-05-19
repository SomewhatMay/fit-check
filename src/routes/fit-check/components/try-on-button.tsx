import { useState } from "react";

export function TryOnButton() {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      className={`relative left-[50%] translate-x-[-50%] font-bold text-center w-[25rem] py-[1.75rem] rounded-[8rem] z-10 text-5xl ${
        pressed ? "scale-90 shadow-md bg-green-300" : "bg-green-200 shadow-lg"
      }`}
    >
      Try On
    </button>
  );
}
