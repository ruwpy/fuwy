import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768 ? true : false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768 ? true : false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
