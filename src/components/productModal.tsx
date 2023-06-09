import { IProduct } from "../data/products";
import { Icons } from "./icons";
import Modal, { ModalProps } from "./modal";
import { Variants, motion as m } from "framer-motion";

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
    translateY: 750,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  open: {
    translateY: -75,
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
  return (
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
                    <span>fabric or leather: {product?.fabric}</span>
                    <span>size: {product?.size}</span>
                  </span>
                </div>
                <button className="w-[400px] bg-indigo hover:bg-indigoHover transition-colors text-white rounded-full h-[50px] text-xl">
                  add to cart
                </button>
              </div>
              <m.img
                variants={productImageVariant}
                custom={0.2}
                className="product-image rounded-[80px] h-[120%] md:max-h-[650px]"
                src={product?.image}
                alt="product image"
              />
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-[30px] close-modal-button bg-white p-4 rounded-full"
            >
              <Icons.x width={30} height={30} />
            </button>
          </div>
        </div>
      </m.div>
    </Modal>
  );
};
