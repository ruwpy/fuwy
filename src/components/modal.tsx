import { createPortal } from "react-dom";
import { AnimatePresence, motion as m } from "framer-motion";
import { ReactNode } from "react";
import { modalBackdropAnimation } from "../config/motion";

export interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}

export const Modal = ({ children, isModalOpen, setIsModalOpen }: ModalProps) => {
  return createPortal(
    <AnimatePresence mode="wait">
      {isModalOpen && (
        <m.div
          onClick={() => setIsModalOpen(false)}
          animate={isModalOpen ? "open" : "closed"}
          initial="closed"
          exit="closed"
          variants={modalBackdropAnimation}
          className="absolute inset-0 bg-black/60 overflow-hidden z-20"
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal") as Element
  );
};
