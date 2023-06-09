import { useEffect, useState } from "react";
import Container from "../components/container";
import { Icons } from "../components/icons";
import Product from "../components/product";
import { IProduct, products } from "../data/products";
import { ProductModal } from "../components/productModal";

export const Home = () => {
  const sloganWords = ["COMFORTABLE", "UNIQUE", "MODERN"];

  const [currentSloganWord, setCurrentSloganWord] = useState("COMFORTABLE");
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setCurrentSloganWord(sloganWords[currentIndex]);
      currentIndex < 2 ? currentIndex++ : (currentIndex = 0);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // TODO: product slider
  const nextProduct = () => {};

  const prevProduct = () => {};

  const openModal = (product: IProduct) => {
    setIsProductModalOpen(true);
    setSelectedProduct(product);
  };

  return (
    <>
      <Container>
        <div className="page-container flex flex-col justify-end h-full">
          <div className="heading-container flex justify-between items-center">
            <h1 className="heading text-6xl font-bold overflow-hidden pl-[58px]">
              WE MAKE IT <span className="text-indigo">{currentSloganWord}</span>.
            </h1>
            <span className="address flex flex-col leading-[20px] whitespace-nowrap pr-[58px]">
              <span>c. eduardo marquina 9</span>
              <span>málaga 29010</span>
              <span>spain</span>
            </span>
          </div>
          <div className="flex gap-[20px]">
            <span className="buttons flex flex-col gap-[20px] justify-center">
              <button onClick={() => nextProduct()} className="button-forward p-[4px]">
                <Icons.chevronRight width={30} height={30} />
              </button>
              <button onClick={() => prevProduct()} className="button-back p-[4px]">
                <Icons.chevronLeft width={30} height={30} />
              </button>
            </span>
            <div className={`products flex mt-[40px] gap-[40px]`}>
              {products.map((product, index) => {
                return <Product onClick={() => openModal(product)} product={product} key={index} />;
              })}
            </div>
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
