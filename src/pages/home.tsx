import { useState } from "react";
import Container from "../components/container";
import { Icons } from "../components/icons";
import Product from "../components/product";
import { IProduct, products } from "../data/products";
import { ProductModal } from "../components/productModal";
import { Variants, motion as m } from "framer-motion";
import { HomeHeading } from "../components/homeHeading";
import { useIsMobile } from "../hooks/useIsMobile";

const slideProducts: Variants = {
  initial: { right: 0, transition: { type: "spring", stiffness: 30 } },
  animate: { right: "80%", transition: { type: "spring", stiffness: 30 } },
};

export const Home = () => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [isSlidedToRight, setIsSlidedToRight] = useState(false);
  const isMobile = useIsMobile();

  const openModal = (product: IProduct) => {
    setIsProductModalOpen(true);
    setSelectedProduct(product);
  };

  return (
    <>
      <Container>
        <div className="page-container xl:overflow-x-hidden flex flex-col justify-end xl:h-full">
          <div className="heading-container max-w-[700px] xl:max-w-none xl:mx-0 md:mx-auto relative md:flex md:gap-16 xl:justify-between xl:items-center mt-[20px]">
            <HomeHeading />
            <span className="address absolute top-0 right-0 text-[12px] xl:text-base md:static flex flex-col mt-[4px] leading-4 xl:leading-[20px] whitespace-nowrap xl:pr-[58px]">
              <span>c. eduardo marquina 9</span>
              <span>málaga 29010</span>
              <span>spain</span>
            </span>
          </div>
          <div className="flex relative">
            <span className="buttons absolute -left-6 h-full hidden md:flex flex-col gap-[20px] z-[9] bg-white px-[20px] justify-center">
              <button onClick={() => setIsSlidedToRight(true)} className="button-forward p-[4px]">
                <Icons.chevronRight width={30} height={30} />
              </button>
              <button onClick={() => setIsSlidedToRight(false)} className="button-back p-[4px]">
                <Icons.chevronLeft width={30} height={30} />
              </button>
            </span>
            {isMobile ? (
              <div
                className={`products [&>*:nth-child(1)]:-translate-x-24 [&>*:nth-child(2)]:translate-x-32 [&>*:nth-child(3)]:translate-x-6 [&>*:nth-child(4)]:-translate-x-24 md:ml-[60px] md:cursor-grab relative flex flex-col md:flex-row mt-[60px] md:mt-[40px] gap-[40px]`}
              >
                {products.map((product, index) => {
                  return (
                    <Product onClick={() => openModal(product)} product={product} key={index} />
                  );
                })}
              </div>
            ) : (
              <m.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                // @ts-ignore
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;

                  if (swipe < -500) setIsSlidedToRight(true);
                  if (swipe > 500) setIsSlidedToRight(false);
                }}
                variants={slideProducts}
                animate={isSlidedToRight ? "animate" : "initial"}
                className={`products [&>*:nth-child(1)]:-translate-x-24 [&>*:nth-child(2)]:translate-x-32 [&>*:nth-child(3)]:translate-x-6 [&>*:nth-child(4)]:-translate-x-24 md:ml-[60px] md:cursor-grab relative flex flex-col md:flex-row mt-[60px] md:mt-[40px] gap-[40px]`}
              >
                {products.map((product, index) => {
                  return (
                    <Product onClick={() => openModal(product)} product={product} key={index} />
                  );
                })}
              </m.div>
            )}
          </div>
        </div>
      </Container>
      <ProductModal
        product={selectedProduct}
        isModalOpen={isProductModalOpen}
        setIsModalOpen={setIsProductModalOpen}
      />
    </>
  );
};
