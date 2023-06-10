import { AnimatePresence, Variants, motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";

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

export const SloganWords = React.memo(() => {
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
    <m.h1 className="text-indigo overflow-hidden whitespace-nowrap h-[60px] inline-block min-w-[200px]">
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
    </m.h1>
  );
});
