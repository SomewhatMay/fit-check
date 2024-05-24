import { useState } from "react";
import { useSetModal } from "../../../contexts/modal-context";

export function TryOnButton() {
  const [pressed, setPressed] = useState(false);
  const setModal = useSetModal();

  const handleClick = () =>
    setModal(
      "Watch out!",
      "The 'Try On' feature is still in development. Please check back at a later time."
    );

  return (
    <button
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onClick={handleClick}
      className={`select-none relative left-[50%] translate-x-[-50%] font-bold text-center w-[25rem] py-[1.75rem] rounded-[8rem] z-10 text-5xl ${
        pressed ? "scale-90 shadow-md bg-green-300" : "bg-green-200 shadow-lg"
      }`}
    >
      Try On
    </button>
  );
}
