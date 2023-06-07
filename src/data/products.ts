export interface Product {
  image: string;
  name: string;
  price: number;
  rating: {
    numOfStars: number;
    numOfReviews: number;
  };
  description: string;
  fabric: string;
  size: string;
  isBig: boolean;
}

const products: Product[] = [
  {
    description:
      "bold proportions and comfort-driven curvature make the varick a contemporary statement fit for everyday luxury. its oversized arms and low-slung profile lend a relaxed, casual feel.",
    fabric: "mohair - mink",
    image: "https://img1.cgtrader.com/items/159558/a3da0b7eaf/moll-cubic-3d-model-max-obj.jpg",
    name: "the varick",
    price: 375,
    rating: {
      numOfReviews: 18,
      numOfStars: 4,
    },
    size: '10" wide',
    isBig: false,
  },
  {
    description:
      "bold proportions and comfort-driven curvature make the varick a contemporary statement fit for everyday luxury. its oversized arms and low-slung profile lend a relaxed, casual feel.",
    fabric: "mohair - mink",
    image:
      "https://img1.cgtrader.com/items/159752/e50e9509d9/capdell-moon-bold-3d-model-max-obj.jpg",
    name: "the varick",
    price: 375,
    rating: {
      numOfReviews: 18,
      numOfStars: 4,
    },
    size: '10" wide',
    isBig: false,
  },
  {
    description:
      "bold proportions and comfort-driven curvature make the varick a contemporary statement fit for everyday luxury. its oversized arms and low-slung profile lend a relaxed, casual feel.",
    fabric: "mohair - mink",
    image:
      "https://img2.cgtrader.com/items/3777429/d00bdd1bc7/large/compo-3d-model-3d-model-obj-blend.jpg",
    name: "the varick",
    price: 375,
    rating: {
      numOfReviews: 18,
      numOfStars: 4,
    },
    size: '10" wide',
    isBig: true,
  },
];

export default products;
