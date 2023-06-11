import { Link } from "react-router-dom";
import { Modal, ModalProps } from "./modal";
import { Variants, motion as m } from "framer-motion";
import { IProduct } from "../data/products";
import { Icons } from "./icons";

interface NavModalProps extends ModalProps {
  cartItems: IProduct[];
}

const navVariant: Variants = {
  initial: { x: "150px" },
  open: { x: 0, transition: { type: "tween", ease: "easeInOut" } },
};

export const NavModal = ({ cartItems, isModalOpen, setIsModalOpen }: NavModalProps) => {
  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <m.div
        variants={navVariant}
        initial="initial"
        exit="initial"
        animate={isModalOpen ? "open" : "initial"}
        className="absolute right-0 bg-white rounded-tl-[20px] rounded-bl-[20px] p-6 mt-20 items-end flex flex-col gap-6"
      >
        <Link to="/">
          <span className="link border-black text-lg">home</span>
        </Link>
        <Link to="/contact">
          <span className="link text-lg">contact us</span>
        </Link>
        <Link to="/cart">
          <span className="flex gap-2 text-lg link relative">
            cart
            <Icons.cart className="relative" width={25} height={25} strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 w-[20px] h-[20px] bg-indigo text-white flex justify-center items-center rounded-full text-sm">
              {cartItems.length}
            </span>
          </span>
        </Link>
      </m.div>
    </Modal>
  );
};
