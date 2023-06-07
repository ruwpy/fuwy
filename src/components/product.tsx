import { Product } from "../data/products";

const Product = ({ product }: { product: Product }) => {
  const { description, fabric, image, isBig, name, price, rating, size } = product;

  return (
    <div
      className={`product flex-shrink-0 relative cursor-pointer ${
        isBig ? "w-[700px]" : "w-[350px]"
      } h-[425px]`}
    >
      <img
        className={`product-image w-full ${
          isBig ? "rounded-[200px]" : "rounded-[100px]"
        } h-full object-cover`}
        src={image}
        alt="product image"
      />
      <div
        className={`product-bg transition-colors hover:bg-black/40 ${
          isBig ? "rounded-[200px]" : "rounded-[100px]"
        } absolute inset-0`}
      ></div>
    </div>
  );
};

export default Product;
