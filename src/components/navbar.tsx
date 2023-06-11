import { Link } from "react-router-dom";
import { Icons } from "./icons";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { motion as m } from "framer-motion";
import { NavModal } from "./navModal";

export const Navbar = () => {
  const { cartItems } = useCartStore();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const desktopNav = (
    <span className="links flex items-center gap-[35px]">
      <Link to="/">
        <span className="link border-black text-lg p-2">home</span>
      </Link>
      <Link to="/contact">
        <span className="link text-lg p-2">contact us</span>
      </Link>
      <Link to="/cart">
        <span className="link px-2 relative">
          <Icons.cart className="relative" width={25} height={25} strokeWidth={1.5} />
          <span className="absolute top-3 left-3 w-[20px] h-[20px] bg-indigo text-white flex justify-center items-center rounded-full text-sm">
            {cartItems.length}
          </span>
        </span>
      </Link>
    </span>
  );

  const mobileNav = (
    <div>
      <m.span
        onClick={() => setIsNavMenuOpen(true)}
        className="burger block cursor-pointer p-2 pr-0"
      >
        <span className="flex flex-col w-[20px] gap-[4px]">
          <span className="inline-block w-[20px] h-[1.5px] bg-black"></span>
          <span className="inline-block w-[20px] h-[1.5px] bg-black"></span>
          <span className="inline-block w-[15px] h-[1.5px] bg-black"></span>
        </span>
      </m.span>
      <NavModal
        cartItems={cartItems}
        isModalOpen={isNavMenuOpen}
        setIsModalOpen={setIsNavMenuOpen}
      />
    </div>
  );

  return (
    <nav className="nav absolute w-full left-0 top-0 right-0 max-w-[1680px] mx-auto px-6 pr-8 z-10">
      <div className="flex items-center justify-between pt-[30px]">
        <Link to="/">
          <span className="logo text-3xl font-bold">
            fu<span className="text-indigo">w</span>y.
          </span>
        </Link>
        {isMobile ? mobileNav : desktopNav}
      </div>
    </nav>
  );
};
