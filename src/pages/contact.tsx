import { Link } from "react-router-dom";
import Container from "../components/container";
import { useIsMobile } from "../hooks/useIsMobile";

export const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <div className="h-full flex gap-10 pr1.25:pt-[40px] pr1:pt-[65px]">
        {!isMobile && (
          <img
            className="w-[35%] object-cover flex-grow-0 rounded-[50px] scale-x-[-1] bg-[#e7e7e7]"
            src="https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt="picture of chair"
          />
        )}
        <div>
          <h1 className="font-bold pr1.25:text-6xl pr1:text-[76px]">
            CONTACT <span className="text-indigo">US</span>
          </h1>
          <span className="flex flex-col gap-4 lg:gap-8 mt-20">
            <span className="flex flex-col">
              <span className="text-black/60 pr1.25:text-lg pr1:text-2xl">email</span>
              <Link to="mail:example@mail.com">
                <span className="pr1.25:text-3xl pr1:text-4xl leading-6">example@mail.com</span>
              </Link>
            </span>
            <span className="flex flex-col">
              <span className="text-black/60 pr1.25:text-lg pr1:text-2xl">phone</span>
              <Link to="tel:888-777-6655">
                <span className="pr1.25:text-3xl pr1:text-4xl leading-6">888-777-6655</span>
              </Link>
            </span>
          </span>
          <span className="address absolute bottom-5 flex flex-col leading-[20px] whitespace-nowrap pr-[58px]">
            <span>c. eduardo marquina 9</span>
            <span>málaga 29010</span>
            <span>spain</span>
          </span>
        </div>
      </div>
    </Container>
  );
};
