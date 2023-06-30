import { IProduct } from "../data/products";
import { useIsMobile } from "../hooks/useIsMobile";
import { useCartStore } from "../store/cartStore";
import { Icons } from "./icons";
import { Modal, ModalProps } from "./modal";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { productModalAnimations as productAnimations } from "../config/motion";

interface ProductModalProps extends ModalProps {
  product: IProduct | undefined;
}

export const ProductModal = ({ product, isModalOpen, setIsModalOpen }: ProductModalProps) => {
  const { addItemToCart, cartItems, removeItemFromCart } = useCartStore();
  const isItemInCart = cartItems.filter((item) => product?.id === item.id);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return product ? (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <m.div
        className="absolute inset-0 pointer-events-none flex flex-col justify-end"
        onClick={(e) => e.stopPropagation()}
        variants={productAnimations.modal}
      >
        <div className="pointer-events-auto w-full bg-white h-[80%]">
          <div className="relative max-w-[1680px] mx-auto px-6 h-full">
            <div className="flex justify-between h-full">
              <div className="product-info relative flex flex-col h-full justify-between pt-[120px] md:pt-[80px] pb-[20px]">
                <div>
                  <div className="product-name-rating flex flex-col gap-1 md:gap-2">
                    <span className="flex gap-2 items-end">
                      <span className="text-[28px] leading-8 xl:text-4xl">{product?.name}</span>
                      <span className="text-[14px] xl:text-base text-black/60">
                        from ${product?.price}
                      </span>
                    </span>
                    <span className="flex gap-2 items-end">
                      <span className="flex gap-1">
                        {product.rating.stars.map((star) => {
                          return (
                            <Icons.star
                              width={isMobile ? 20 : 25}
                              height={isMobile ? 20 : 25}
                              fill={`${star.filled ? "#F8E961" : "#d9d9d9"}`}
                              stroke=""
                            />
                          );
                        })}
                      </span>
                      <span className="text-[14px] leading-4 xl:text-base text-black/60">
                        {product?.rating.numOfReviews} reviews
                      </span>
                    </span>
                  </div>
                  <p className="description break-words mt-[25px] w-full xl:mt-20 text-base xl:text-xl md:w-[450px] xl:w-[600px] 2xl:w-[700px]">
                    {product?.description}
                  </p>
                  <span className="flex flex-col mt-8 text-base xl:text-xl">
                    <span>color: {product?.color}</span>
                    <span>size: {product?.size}</span>
                  </span>
                </div>
                {isItemInCart?.length ? (
                  <div className="relative w-full max-w-[400px]">
                    <button
                      onClick={() => navigate("/cart")}
                      className="w-full md:w-[400px] bg-indigo hover:bg-indigoHover transition-colors text-white rounded-full h-[40px] xl:h-[50px] text-base xl:text-xl"
                    >
                      go to cart
                    </button>
                    <button
                      onClick={() => product.id && removeItemFromCart(product.id)}
                      className="absolute -top-4 -right-2 p-2 rounded-full bg-[#d9d9d9] hover:bg-[#c3c3c3] transition-colors"
                    >
                      <Icons.x width={20} height={20} color="black" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addItemToCart(product)}
                    className="w-full md:w-[400px] bg-indigo hover:bg-indigoHover transition-colors text-white rounded-full h-[40px] xl:h-[50px] text-base xl:text-xl"
                  >
                    add to cart
                  </button>
                )}
              </div>
              <m.img
                variants={isMobile ? productAnimations.imageMobile : productAnimations.imageDesktop}
                custom={0.2}
                className="product-image absolute w-[200px] md:w-[300px] lg:w-[500px] xl:w-auto right-10 xl:relative rounded-[40px] md:rounded-[80px] "
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
