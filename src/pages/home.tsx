import { useState } from "react";
import Container from "../components/container";
import { Icons } from "../components/icons";
import Product from "../components/product";
import { IProduct, products } from "../data/products";
import { ProductModal } from "../components/productModal";
import { Variants, motion as m } from "framer-motion";
import { SloganWords } from "../components/sloganWords";

const slideProducts: Variants = {
  initial: { right: 0, transition: { type: "spring", stiffness: 30 } },
  animate: { right: "50%", transition: { type: "spring", stiffness: 30 } },
};

export const Home = () => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [isSlidedToRight, setIsSlidedToRight] = useState(false);

  const openModal = (product: IProduct) => {
    setIsProductModalOpen(true);
    setSelectedProduct(product);
  };

  return (
    <>
      <Container>
        <div className="page-container overflow-hidden flex flex-col justify-end h-full">
          <div className="heading-container flex justify-between items-center">
            <span className="heading flex justify-center gap-4 pr1.25:text-6xl pr1:text-[76px] font-bold overflow-hidden pl-[58px]">
              <h1 className="whitespace-nowrap">WE MAKE IT </h1>
              <SloganWords />
            </span>
            <span className="address flex flex-col leading-[20px] whitespace-nowrap pr-[58px]">
              <span>c. eduardo marquina 9</span>
              <span>málaga 29010</span>
              <span>spain</span>
            </span>
          </div>
          <div className="flex">
            <span className="buttons hidden xl:flex flex-col gap-[20px] bg-white z-10 pr-[20px] justify-center">
              <button onClick={() => setIsSlidedToRight(true)} className="button-forward p-[4px]">
                <Icons.chevronRight width={30} height={30} />
              </button>
              <button onClick={() => setIsSlidedToRight(false)} className="button-back p-[4px]">
                <Icons.chevronLeft width={30} height={30} />
              </button>
            </span>
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
              className={`products cursor-grab relative flex mt-[40px] gap-[40px]`}
            >
              {products.map((product, index) => {
                return <Product onClick={() => openModal(product)} product={product} key={index} />;
              })}
            </m.div>
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
