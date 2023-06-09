import { createPortal } from "react-dom";
import { AnimatePresence, motion as m, Variants } from "framer-motion";
import { ReactNode } from "react";

const backdropVariant: Variants = {
  closed: {
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  open: {
    opacity: 1,
  },
};

export interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}

const Modal = ({ children, isModalOpen, setIsModalOpen }: ModalProps) => {
  return createPortal(
    <AnimatePresence mode="wait">
      {isModalOpen && (
        <m.div
          onClick={() => setIsModalOpen(false)}
          animate={isModalOpen ? "open" : "closed"}
          initial="closed"
          exit="closed"
          variants={backdropVariant}
          className="absolute inset-0 bg-black/60 overflow-hidden"
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal") as Element
  );
};

export default Modal;
