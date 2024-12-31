"use client";

import CartItem from "./CartItem";
import useStoreContext from "../../_context/ContextStore";
import EmptyCart from "./EmptyCart";
import { useEffect, useState } from "react";
import gsap from "gsap";
import CartPayment from "./CartPayment";
import ClearCartButton from "./ClearCartButton";
import CartHeader from "./CartHeader";
import Input from "./Input";

function CartOverview() {
  const [showModle, setShowModle] = useState(false);
  useEffect(() => {
    gsap.fromTo(
      "#cart",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4 }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#modle",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4 }
    );
  }, [showModle]);

  const { state, dispatch } = useStoreContext();
  const itemPrice = state?.map((item) => item.price);
  const totalPrice = itemPrice?.reduce((acc, cur) => acc + cur, 0);

  return state.length ? (
    <>
      <CartHeader state={state.length} />
      <div className="container mx-auto mb-8 relative  xs:p-2">
        {showModle && (
          <div
            id="modle"
            className=" absolute w-[80%] bg-white h-full p-8 rounded-md  z-20"
          >
            <button onClick={() => setShowModle(false)} className=" mb-6">
              <span className=" text-[#dc2626]">X</span> Close
            </button>
            <from className="w-full flex flex-col gap-6">
              <Input type="email" placeholder="Email" required={true} />
              <div className=" grid grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" required={true} />
                <Input type="text" placeholder="Last Name" required={true} />
              </div>
              <Input type="text" placeholder="Address" required={true} />
              <div className=" grid grid-cols-2 gap-6">
                <Input type="text" placeholder="City" required={true} />
                <Input
                  type="number"
                  placeholder="Phone Number"
                  required={true}
                />
              </div>
              <button></button>
            </from>
          </div>
        )}
        <div className=" gap-4 grid xl:grid-cols-[1fr_auto]">
          <div className=" relative border bg-white rounded-lg mt-[2rem]">
            <ClearCartButton dispatch={dispatch} />
            <CartItem />
          </div>
          <CartPayment totalPrice={totalPrice} setShowModle={setShowModle} />
        </div>
      </div>
    </>
  ) : (
    <EmptyCart />
  );
}

export default CartOverview;
