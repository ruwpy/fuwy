import Container from "../components/container";
import { Icons } from "../components/icons";
import { useIsMobile } from "../hooks/useIsMobile";
import { useCartStore } from "../store/cartStore";

export const Cart = () => {
  const isMobile = useIsMobile();
  const { cartItems, removeItemFromCart } = useCartStore();

  return (
    <Container>
      <h1 className="lg:text-center font-bold pr1.25:text-6xl pr1:text-[76px]">
        YOUR <span className="text-indigo">CART</span>
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 mt-[60px]">
        <div className="flex flex-col order-2 lg:order-1 flex-grow gap-[20px]">
          {cartItems.length ? (
            cartItems.map((item) => {
              return (
                <div className="w-full relative flex justify-between p-[15px] h-[180px] bg-[#efefef] rounded-[50px]">
                  <div className="flex h-full gap-[15px] lg:gap-[20px] items-center">
                    <img
                      className="h-full aspect-[6/7] rounded-[30px] object-cover"
                      src={item.image}
                      alt="product image"
                    />
                    <div className="flex flex-col">
                      <span className="text-[22px] lg:text-[24px] flex flex-col whitespace-nowrap">
                        {item.name}
                        {isMobile && (
                          <span className="text-[14px] text-black/60">{item.price}.00 $</span>
                        )}
                      </span>
                      <span className="text-black/60 mt-[15px]">size: {item.size}</span>
                      <span className="text-black/60">color: {item.color}</span>
                    </div>
                  </div>
                  {!isMobile && (
                    <span className="text-black text-[24px] pr-[20px] pt-[16px]">
                      {item.price}.00 $
                    </span>
                  )}
                  <button
                    onClick={() => item.id && removeItemFromCart(item.id)}
                    className="absolute -top-2 -right-2 p-2 rounded-full bg-[#d9d9d9] hover:bg-[#c3c3c3] transition-colors"
                  >
                    <Icons.trash width={25} height={25} color="black" />
                  </button>
                </div>
              );
            })
          ) : (
            <span className="text-black/60 text-center mt-[60px] text-xl lg:text-2xl">
              you have no items in your cart
            </span>
          )}
          {}
        </div>
        <div className="lg:w-[400px] order-1 lg:order-2 p-[35px] flex flex-col justify-between bg-[#efefef] h-[240px] lg:h-[275px] rounded-[50px]">
          <div>
            <span className="flex justify-between text-[20px] lg:text-[24px]">
              <span>total</span>
              <span>${cartItems.reduce((acc, cur) => acc + cur.price, 0)}</span>
            </span>
            <span className="text-[14px] lg:text-[18px] text-black/60">
              {cartItems.length} {cartItems.length > 1 ? "items" : "item"}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <button className="w-full bg-indigo hover:bg-indigoHover transition-colors text-white rounded-full h-[40px] lg:h-[50px] text-base lg:text-[18px]">
              proceed to checkout
            </button>
            <div className="relative">
              <input
                className="w-full text-base lg:text-[18px] px-[20px] h-[40px] lg:h-[50px] rounded-full outline-none"
                placeholder="discount code"
                type="text"
                name="discount-code"
              />
              <button className="absolute right-0 bg-indigo hover:bg-indigoHover transition-colors h-full px-[30px] py-[4px] text-white rounded-full text-base lg:text-[18px]">
                apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
