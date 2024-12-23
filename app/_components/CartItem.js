"use client";
import { useEffect } from "react";
import useStoreContext from "../_context/ContextStore";
import gsap from "gsap";

function CartItem() {
  const { state, dispatch } = useStoreContext();
  useEffect(() => {
    gsap.fromTo(
      "#item",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4, delay: 0.6 }
    );
  }, []);

  return (
    <div id="item" className=" [&>:not(:last-child)]:border-b ">
      {state?.map((item) => (
        <div key={item.id} className=" relative  border-stone-200">
          {/* button to remove item from the cart shopping  */}
          <div className=" w-full flex justify-end p-4">
            <button
              onClick={() => dispatch({ type: "deleteItem", payload: item.id })}
              className=" rounded-full border  border-stone-200 w-[1.4rem] h-[1.4rem] text-[.8rem] text-[#dc2626]"
            >
              X
            </button>
          </div>

          <div
            key={item.id}
            className=" relative flex text-[#1b1b1b] justify-between items-center p-4 mb-1"
          >
            <div>
              <img src={item.image} alt={item.name} className=" w-[7rem]" />
            </div>
            <div>{item.name}</div>
            <div>{item.quantity}</div>
            <div>{item.price}</div>
            <div>{item.price * item.quantity}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
