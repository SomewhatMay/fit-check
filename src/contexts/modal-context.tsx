import { createContext, useContext, useState } from "react";

export interface ModalInfo {
  title: string;
  body: string;
}

const ModalContext = createContext<
  [ModalInfo, React.Dispatch<React.SetStateAction<ModalInfo>>] | undefined
>(undefined);

export function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalContextProvider");
  }

  const [modal] = context;

  return modal;
}

export function useSetModal() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useSetModal must be used within a ModalContextProvider");
  }

  const [, setModal] = context;

  return (title: string, body: string) => setModal({ title, body });
}

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modal, setModal] = useState({
    title: "", // Watch out!",
    body: "", // This is a modal that contains informational content. Please read this carefully and press OK when you are done.",
  });
  return (
    <ModalContext.Provider value={[modal, setModal]}>
      {children}
    </ModalContext.Provider>
  );
}
