"use client";

import Link from "next/link";
import CartItem from "./CartItem";
import useStoreContext from "../_context/ContextStore";
import EmptyCart from "./EmptyCart";
import { useEffect } from "react";
import gsap from "gsap";

function CartOverview() {
  useEffect(() => {
    gsap.fromTo(
      "#cart",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4 }
    );
  }, []);

  const { state, dispatch } = useStoreContext();

  const itemPrice = state?.map((item) => item.price);
  const totalPrice = itemPrice?.reduce((acc, cur) => acc + cur, 0);

  return state.length ? (
    <>
      <div id="cart" className=" relative container mx-auto mt-4  text-[#1b1b1b]">
        <h1 className="capitalize text-[2rem] font-semibold">shopping bag</h1>
        <h2 className=" mx-8">
          <span className=" text-[#dc2626] text-[1.2rem] font-semibold">
            {state.length} items
          </span>{" "}
          in your bag
        </h2>
      </div>
      <div className="container mx-auto mb-8 ">
        <div className=" gap-4 grid grid-cols-[1fr_auto]">
          <div className=" relative border border-stone-400 rounded-lg mt-[2rem]">
            {/* button to clear the cart  */}
            <div className=" absolute top-[-2rem] left-[-2rem] w-full flex justify-end text-[#1b1b1b] ">
              <button
                onClick={() => dispatch({ type: "clearCart" })}
                className=" hover:scale-x-105 duration-300 text-[0.8rem] text-[#dc2626] tracking-wider font-semibold uppercase"
              >
                <span className=" text-[#dc2626] text-[.9rem] ">X</span> clear
                car
              </button>
            </div>

            <ul className="  flex text-[#1b1b1b] justify-between p-4 border-b border-stone-400 font-semibold">
              <li>Prodcut Image</li>
              <li>Prodcut Name</li>
              <li>Quantity</li>
              <li>Price</li>
              <li>Total Price</li>
            </ul>

            <CartItem />
          </div>

          <div className=" sticky top-[8rem] rounded-lg mt-[2rem] text-[#1b1b1b] ">
            <div className="border p-6 border-stone-600  w-[20rem] mb-[1rem] rounded-xl">
              <h1 className=" font-serif capitalize mb-4 ">order summary :</h1>
              <h2 className=" flex justify-between mb-4">
                SubTotal :<span>{totalPrice} EL</span>
              </h2>
              <h3>
                <span className="flex justify-between border-t border-stone-600">
                  Total :<span>{totalPrice} EL</span>
                </span>
              </h3>
            </div>
            <div className=" flex flex-col gap-2 justify-center font-semibold items-center">
              <button className="w-full bg-[#dc2626] text-white bg-opacity-90 capitalize rounded-md p-2">
                proceed to secure checkout
              </button>
              <Link
                href="/collection"
                className=" border-[.1px] border-orange-600 text-[#dc2626]  capitalize rounded-md p-2 w-full text-center  "
              >
                continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <EmptyCart />
  );
}

export default CartOverview;
