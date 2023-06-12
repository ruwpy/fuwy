import { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <main className="container relative h-[100svh] max-w-[1680px] mx-auto overflow-x-hidden px-6 py-[20px] pt-[100px]">
      {children}
    </main>
  );
};

export default Container;
