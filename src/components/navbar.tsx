import { Link } from "react-router-dom";
import Icons from "./icons";

const Navbar = () => {
  const unparsedCart = localStorage.getItem("cartItems");
  const cartItems = unparsedCart && (JSON.parse(unparsedCart) as { itemId: string }[]);

  return (
    <nav className="nav absolute w-full flex items-center justify-between mt-[40px] max-w-[1680px] mx-auto px-6">
      <Link to="/">
        <span className="logo text-3xl font-bold">
          fu<span className="text-indigo">w</span>y.
        </span>
      </Link>
      <span className="links flex items-center gap-[35px]">
        <Link to="/">
          <span className="link text-lg">home</span>
        </Link>
        <Link to="/contact">
          <span className="link text-lg">contact us</span>
        </Link>
        <Link to="/cart">
          <span className="link relative">
            <Icons.cart width={25} height={25} strokeWidth={1.5} />
            {cartItems && (
              <span className="absolute -top-[8px] -right-[8px] w-[20px] h-[20px] bg-indigo text-white flex justify-center items-center rounded-full text-sm">
                {cartItems.length}
              </span>
            )}
          </span>
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
