import { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <main className="container relative h-[100dvh] max-w-[1680px] mx-auto px-6 py-[20px] overflow-x-hidden pt-[100px]">
      {children}
    </main>
  );
};

export default Container;
