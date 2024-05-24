import { useState } from "react";
import { useSetModal } from "../../../contexts/modal-context";

export function AddToWardrobe() {
  const [pressed, setPressed] = useState(false);
  const setModal = useSetModal();

  const handleClick = () =>
    setModal(
      "Watch out!",
      "The 'Add to E-Wardrobe' feature is still in development. Please check back at a later time."
    );

  return (
    <button
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onClick={handleClick}
      className={`select-none relative left-[50%] translate-x-[-50%] text-center w-[25rem] py-[1.75rem] rounded-[8rem] z-10 text-3xl mt-[2rem] mb-[2rem] ${
        pressed ? "scale-90 shadow-md bg-green-300" : "bg-green-200 shadow-lg"
      }`}
    >
      Add To E-Wardrobe
    </button>
  );
}
