import { motion as m } from "framer-motion";
import { IProduct } from "../data/products";
import { productAnimations } from "../config/motion";

const Product = ({
  product,
  onClick,
}: {
  product: IProduct;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const { image, isBig, name, price } = product;

  return (
    <m.div
      onClick={(e) => onClick(e)}
      initial="initial"
      whileHover="hover"
      className={`product md:!translate-x-0 flex-shrink-0 relative overflow-hidden cursor-pointer ${
        isBig
          ? "w-[465px] rounded-[150px] xl:pr1:w-[800px] xl:pr1.25:w-[700px] xl:rounded-[250px]"
          : "w-[280px] rounded-[75px] xl:pr1:w-[400px] xl:pr1.25:w-[350px] xl:rounded-[100px]"
      } h-[320px] xl:pr1:h-[500px] xl:pr1.25:h-[425px]`}
    >
      <m.img
        variants={productAnimations.image}
        className={`product-image w-full h-full pointer-events-none object-cover`}
        src={image}
        alt="product image"
      />
      <m.div
        variants={productAnimations.bg}
        className={`product-bg flex justify-end text-center flex-col pb-[20px] items-center pointer-events-none transition-color ${
          isBig ? "rounded-[150px] xl:rounded-[200px]" : "rounded-[75px] xl:rounded-[100px]"
        } absolute inset-0`}
      >
        <m.span className="text-white text-2xl" variants={productAnimations.info} custom={0}>
          {name}
        </m.span>
        <m.span className="text-white opacity-60" variants={productAnimations.info} custom={0.2}>
          from ${price}
        </m.span>
      </m.div>
    </m.div>
  );
};

export default Product;
