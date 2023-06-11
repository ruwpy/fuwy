import { AnimatePresence, Variants, motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const sloganWordsArr = ["COMFY", "UNIQUE", "MODERN"];

const sloganWordVariant: Variants = {
  initial: {
    y: "120%",
  },
  animate: (custom) => ({
    y: 0,
    transition: {
      delay: custom * 0.05,
      duration: 0.35,
      type: "spring",
    },
  }),
  exit: (custom) => ({
    y: "-120%",
    transition: {
      delay: custom * 0.05,
      duration: 0.35,
      type: "spring",
    },
  }),
};

export const HomeHeading = React.memo(() => {
  const isMobile = useIsMobile();
  const [currentSloganWord, setCurrentSloganWord] = useState("MODERN");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setCurrentSloganWord("");
      setTimeout(() => {
        setCurrentSloganWord(sloganWordsArr[currentIndex]);
        currentIndex < 2 ? currentIndex++ : (currentIndex = 0);
      }, 1000);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="heading leading-[60px] flex flex-col xl:flex-row justify-center xl:gap-4 text-[62px] xl:pr1.25:text-6xl xl:pr1:text-[76px] whitespace-nowrap font-bold overflow-hidden xl:pl-[58px]">
      WE {isMobile && <br />} MAKE IT
      <span className="text-indigo overflow-hidden whitespace-nowrap inline-block min-h-[60px] min-w-[200px]">
        <AnimatePresence mode="sync">
          {!!currentSloganWord &&
            currentSloganWord.split("").map((letter, index) => {
              return (
                <m.span
                  animate="animate"
                  exit="exit"
                  initial="initial"
                  custom={index}
                  key={index}
                  variants={sloganWordVariant}
                  className="inline-block"
                >
                  {letter}
                </m.span>
              );
            })}
        </AnimatePresence>
      </span>
    </h1>
  );
});
