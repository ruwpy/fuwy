import { IProduct } from "../data/products";
import { useCartStore } from "../store/cartStore";
import { Icons } from "./icons";
import Modal, { ModalProps } from "./modal";
import { Variants, motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const modalVariant: Variants = {
  closed: {
    translateY: 750,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  open: {
    translateY: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const productImageVariant: Variants = {
  closed: {
    bottom: "-100%",
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  open: {
    bottom: "13.5%",
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.15,
    },
  },
};

interface ProductModalProps extends ModalProps {
  product: IProduct | undefined;
}

export const ProductModal = ({ product, isModalOpen, setIsModalOpen }: ProductModalProps) => {
  const { addItemToCart, cartItems, removeItemFromCart } = useCartStore();
  const isItemInCart = cartItems.filter((item) => product?.id === item.id);
  const navigate = useNavigate();

  return product ? (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <m.div
        className="absolute inset-0 pointer-events-none flex flex-col justify-end"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariant}
      >
        <div className="pointer-events-auto w-full bg-white h-[80%]">
          <div className="relative max-w-[1680px] mx-auto px-6 h-full">
            <div className="flex justify-between h-full">
              <div className="product-info relative flex flex-col h-full justify-between pt-[80px] pb-[20px]">
                <div>
                  <div className="product-name-rating flex flex-col gap-2">
                    <span className="flex gap-2 items-end">
                      <span className="text-4xl">{product?.name}</span>
                      <span className="text-black/60">from ${product?.price}</span>
                    </span>
                    <span className="flex gap-2 items-end">
                      <span className="flex gap-1">
                        <Icons.star width={25} height={25} fill="#d9d9d9" stroke="#d9d9d9" />
                        <Icons.star width={25} height={25} fill="#d9d9d9" stroke="#d9d9d9" />
                        <Icons.star width={25} height={25} fill="#d9d9d9" stroke="#d9d9d9" />
                        <Icons.star width={25} height={25} fill="#d9d9d9" stroke="#d9d9d9" />
                        <Icons.star width={25} height={25} fill="#d9d9d9" stroke="#d9d9d9" />
                      </span>
                      <span className="text-black/60">{product?.rating.numOfReviews} reviews</span>
                    </span>
                  </div>
                  <span className="text-black/60 mt-6 inline-block">ships in 2-3 weeks</span>
                  <p className="description break-words mt-20 text-xl md:w-[600px] 2xl:w-[700px]">
                    {product?.description}
                  </p>
                  <span className="flex flex-col mt-8 text-xl">
                    <span>color: {product?.color}</span>
                    <span>size: {product?.size}</span>
                  </span>
                </div>
                {isItemInCart?.length ? (
                  <div className="relative w-fit">
                    <button
                      onClick={() => navigate("/cart")}
                      className="w-[400px] bg-indigo hover:bg-indigoHover transition-colors text-white rounded-full h-[50px] text-xl"
                    >
                      go to cart
                    </button>
                    <button
                      onClick={() => product.id && removeItemFromCart(product.id)}
                      className="absolute -top-4 -right-2 p-2 rounded-full bg-[#d9d9d9] hover:bg-[#c3c3c3] transition-colors"
                    >
                      <Icons.x width={25} height={25} color="black" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addItemToCart(product)}
                    className="w-[400px] bg-indigo hover:bg-indigoHover transition-colors text-white rounded-full h-[50px] text-xl"
                  >
                    add to cart
                  </button>
                )}
              </div>
              <m.img
                variants={productImageVariant}
                custom={0.2}
                className="product-image relative rounded-[80px] h-[110%]"
                src={product?.image}
                alt="product image"
              />
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="close-modal-button absolute -top-[30px] bg-white p-4 rounded-full"
            >
              <Icons.x width={30} height={30} />
            </button>
          </div>
        </div>
      </m.div>
    </Modal>
  ) : null;
};
