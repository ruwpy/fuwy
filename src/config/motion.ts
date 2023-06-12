import { Variants } from "framer-motion";

export const sloganWordAnimation: Variants = {
  initial: { y: "120%" },
  animate: (custom) => ({
    y: 0,
    transition: { delay: custom * 0.05, duration: 0.35, type: "spring" },
  }),
  exit: (custom) => ({
    y: "-120%",
    transition: { delay: custom * 0.05, duration: 0.35, type: "spring" },
  }),
};

export const modalBackdropAnimation: Variants = {
  closed: { opacity: 0, transition: { delay: 0.4 } },
  open: { opacity: 1 },
};

export const navModalAnimation: Variants = {
  initial: { x: "200px" },
  open: { x: 0, transition: { type: "tween", ease: "easeInOut" } },
};

const productImageAnimation: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.08, transition: { easings: "cubic-bezier(.165,.84,.44,1)", duration: 1 } },
};

const productBgAnimation: Variants = {
  initial: { background: "rgba(0,0,0,0)" },
  hover: { background: "rgba(0,0,0,0.5)", transition: { duration: 0.35, delay: 0.1 } },
};

const productInfoAnimation: Variants = {
  initial: { translateY: "100px" },
  hover: (custom) => ({
    translateY: 0,
    transition: { duration: 0.3, delay: custom, easings: "cubic-bezier(0.83, 0, 0.17, 1)" },
  }),
};

export const productAnimations = {
  image: productImageAnimation,
  bg: productBgAnimation,
  info: productInfoAnimation,
};

const productModalAnimation: Variants = {
  closed: { translateY: 750, transition: { type: "tween", duration: 0.6, ease: "easeInOut" } },
  open: { translateY: 0, transition: { type: "tween", duration: 0.6, ease: "easeInOut" } },
};

// there was some kind of bug with animation so i had to make 2 different variants for mobile and desktop

const productModalImageAnimationMobile: Variants = {
  closed: { top: "100%", transition: { type: "tween", duration: 0.8, ease: "easeInOut" } },
  open: {
    top: "-20%",
    transition: { type: "tween", duration: 0.6, ease: "easeInOut", delay: 0.15 },
  },
};

const productModalImageAnimationDesktop: Variants = {
  closed: { bottom: "-100%", transition: { type: "tween", duration: 0.8, ease: "easeInOut" } },
  open: {
    bottom: "13.5%",
    transition: { type: "tween", duration: 0.6, ease: "easeInOut", delay: 0.15 },
  },
};

export const productModalAnimations = {
  modal: productModalAnimation,
  imageMobile: productModalImageAnimationMobile,
  imageDesktop: productModalImageAnimationDesktop,
};

export const slideProductsAnimation: Variants = {
  initial: { right: 0, transition: { type: "spring", stiffness: 30 } },
  animate: { right: "80%", transition: { type: "spring", stiffness: 30 } },
};
