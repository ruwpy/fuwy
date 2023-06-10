import Container from "../components/container";
import { Icons } from "../components/icons";
import { useCartStore } from "../store/cartStore";

export const Cart = () => {
  const { cartItems, removeItemFromCart } = useCartStore();

  return (
    <Container>
      <h1 className="text-center font-bold pr1.25:text-6xl pr1:text-[76px]">
        YOUR <span className="text-indigo">CART</span>
      </h1>
      <div className="flex gap-5 mt-[60px]">
        <div className="flex flex-col flex-grow gap-[20px]">
          {cartItems.length ? (
            cartItems.map((item) => {
              return (
                <div className="w-full relative flex justify-between p-[15px] h-[180px] bg-[#efefef] rounded-[50px]">
                  <div className="flex h-full gap-[20px] items-center">
                    <img
                      className="h-full rounded-[30px] aspect-square object-cover"
                      src={item.image}
                      alt="product image"
                    />
                    <div className="flex flex-col">
                      <span className="text-[24px]">{item.name}</span>
                      <span className="text-black/60 mt-[5px]">size: {item.size}</span>
                      <span className="text-black/60">color: {item.color}</span>
                    </div>
                  </div>
                  <span className="text-[24px] pr-[20px] pt-[16px]">{item.price}.00 $</span>
                  <button
                    onClick={() => item.id && removeItemFromCart(item.id)}
                    className="absolute -top-2 -right-2 p-2 rounded-full bg-[#d9d9d9] hover:bg-[#c3c3c3] transition-colors"
                  >
                    <Icons.x width={25} height={25} color="black" />
                  </button>
                </div>
              );
            })
          ) : (
            <span className="text-black/60 text-center mt-[60px] text-2xl">
              you have no items in your cart
            </span>
          )}
          {}
        </div>
        <div className="w-[400px] p-[35px] flex flex-col justify-between bg-[#efefef] h-[275px] rounded-[50px]">
          <div>
            <span className="flex justify-between text-[24px]">
              <span>total</span>
              <span>${cartItems.reduce((acc, cur) => acc + cur.price, 0)}</span>
            </span>
            <span className="text-[18px] text-black/60">
              {cartItems.length} {cartItems.length > 1 ? "items" : "item"}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <button className="w-full bg-indigo hover:bg-indigoHover transition-colors text-white rounded-full h-[50px] text-[18px]">
              proceed to checkout
            </button>
            <div className="relative">
              <input
                className="w-full text-[18px] px-[20px] h-[50px] rounded-full outline-none"
                placeholder="discount code"
                type="text"
                name="discount-code"
              />
              <button className="absolute right-0 bg-indigo hover:bg-indigoHover transition-colors h-full px-[30px] py-[4px] text-white rounded-full text-[18px]">
                apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
