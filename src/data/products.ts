export interface IProduct {
  id: number;
  image: string;
  name: string;
  price: number;
  rating: {
    stars: { filled: boolean }[];
    numOfReviews: number;
  };
  description: string;
  color: string;
  size: string;
  isBig: boolean;
}

export const products: IProduct[] = [
  {
    id: 1,
    description:
      "sleek and versatile medium-sized square cabinet storage solution, offering ample storage space, adjustable shelves, and a modern design to enhance organization and aesthetics in any room.",
    color: "white",
    image: "https://img1.cgtrader.com/items/159558/a3da0b7eaf/moll-cubic-3d-model-max-obj.jpg",
    name: "moll cubic",
    price: 75,
    rating: {
      numOfReviews: 5,
      stars: [
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: true,
        },
      ],
    },
    size: "medium",
    isBig: false,
  },
  {
    id: 2,
    description:
      "this chair embodies contemporary elegance with its striking design, ergonomic comfort, and high-quality craftsmanship. a perfect addition to modern spaces, it offers customizable upholstery options for personalized style.",
    color: "beige",
    image:
      "https://img1.cgtrader.com/items/159752/e50e9509d9/capdell-moon-bold-3d-model-max-obj.jpg",
    name: "capdell moon",
    price: 95,
    rating: {
      numOfReviews: 12,
      stars: [
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: false,
        },
      ],
    },
    size: "medium",
    isBig: false,
  },
  {
    id: 3,
    description:
      "compa sofa combines sleek sophistication with exceptional comfort. its contemporary design, plush cushions, and premium upholstery create a cozy seating experience, perfect for relaxation and adding a touch of modern elegance to any living space.",
    color: "yellowish - beige",
    image:
      "https://img1.cgtrader.com/items/3777429/d00bdd1bc7/compo-3d-model-3d-model-obj-blend.jpg",
    name: "compa",
    price: 295,
    rating: {
      numOfReviews: 15,
      stars: [
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: true,
        },
      ],
    },
    size: "xlarge",
    isBig: true,
  },
  {
    id: 4,
    description:
      "its a timeless masterpiece that exudes sophistication and luxury. with its elegant design, premium materials, and impeccable craftsmanship, it offers both comfort and style, making it a statement piece in any room.",
    color: "midnight",
    image:
      "https://img1.cgtrader.com/items/159730/9b1b951bc9/achille-armchair-3d-model-max-obj.jpg",
    name: "achille",
    price: 105,
    rating: {
      numOfReviews: 22,
      stars: [
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: true,
        },
        {
          filled: false,
        },
      ],
    },
    size: "large",
    isBig: false,
  },
];
