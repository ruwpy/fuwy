import { Variants, motion as m } from "framer-motion";
import { IProduct } from "../data/products";

const imageVariant: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.08,
    transition: {
      easings: "cubic-bezier(.165,.84,.44,1)",
      duration: 1,
    },
  },
};

const bgVariant: Variants = {
  initial: {
    background: "rgba(0,0,0,0)",
  },
  hover: {
    background: "rgba(0,0,0,0.5)",
    transition: {
      duration: 0.35,
      delay: 0.1,
    },
  },
};

const productInfoVariant: Variants = {
  initial: {
    translateY: "100px",
  },
  hover: (custom) => ({
    translateY: 0,
    transition: { duration: 0.3, delay: custom, easings: "cubic-bezier(0.83, 0, 0.17, 1)" },
  }),
};

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
      className={`product flex-shrink-0 relative overflow-hidden cursor-pointer ${
        isBig
          ? "pr1:w-[800px] pr1.25:w-[700px] rounded-[250px]"
          : "pr1:w-[400px] pr1.25:w-[350px] rounded-[100px]"
      } pr1:h-[500px] pr1.25:h-[425px]`}
    >
      <m.img
        variants={imageVariant}
        className={`product-image w-full h-full pointer-events-none object-cover`}
        src={image}
        alt="product image"
      />
      <m.div
        variants={bgVariant}
        className={`product-bg flex justify-end text-center flex-col pb-[20px] items-center pointer-events-none transition-color ${
          isBig ? "rounded-[200px]" : "rounded-[100px]"
        } absolute inset-0`}
      >
        <m.span className="text-white text-2xl" variants={productInfoVariant} custom={0}>
          {name}
        </m.span>
        <m.span className="text-white opacity-60" variants={productInfoVariant} custom={0.2}>
          from ${price}
        </m.span>
      </m.div>
    </m.div>
  );
};

export default Product;
