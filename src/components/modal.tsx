import { useState } from "react";
import { useModal, useSetModal } from "../contexts/modal-context";

export function Modal() {
  const [pressed, setPressed] = useState(false);
  const { title, body } = useModal();
  const setModal = useSetModal();

  const handleOk = () => {
    setPressed(false);
    setModal("", "");
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full bg-black/25 transition-all ${
        title !== "" && body !== "" ? "" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute bg-white rounded-[2rem] w-[70vw] p-[4rem] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-md transition-all ${
          title !== "" && body !== "" ? "" : "scale-50"
        }`}
      >
        <div className="font-bold text-center text-7xl">{title}</div>
        <div className="text-4xl text-center text-gray-700 mt-[2rem]">
          {body}
        </div>
        <button
          className={`select-none relative mt-[3.5rem] left-[50%] translate-x-[-50%] font-bold text-center w-[25rem] py-[1.75rem] rounded-[8rem] z-10 text-5xl ${
            pressed
              ? "scale-90 shadow-md bg-green-300"
              : "bg-green-200 shadow-lg"
          }`}
          onPointerDown={() => setPressed(true)}
          onPointerUp={() => setPressed(false)}
          onClick={handleOk}
        >
          OK
        </button>
      </div>
    </div>
  );
}
