"use client";

import CartItem from "./CartItem";
import useStoreContext from "../../_context/ContextStore";
import EmptyCart from "./EmptyCart";
import { useEffect, useState } from "react";
import gsap from "gsap";
import CartPayment from "./CartPayment";
import ClearCartButton from "./ClearCartButton";
import CartHeader from "./CartHeader";
import Modal from "./Modal";

function CartOverview() {
  const [showModal, setShowModal] = useState(false);
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
  }, [showModal]);

  const { state, dispatch } = useStoreContext();
  const itemPrice = state?.map((item) => item.price);
  const totalPrice = itemPrice?.reduce((acc, cur) => acc + cur, 0);

  return state.length ? (
    !showModal ? (
      <div className=" container mx-auto p-4">
        <CartHeader state={state.length} />
        <div className=" gap-4 grid xl:grid-cols-[1fr_auto]">
          <div className=" relative border bg-white mt-[2rem]">
            <ClearCartButton dispatch={dispatch} />
            <CartItem />
          </div>
          <CartPayment totalPrice={totalPrice} setShowModal={setShowModal} />
        </div>
      </div>
    ) : (
      <div className=" container flex  mx-auto  h-[90vh] items-center ">
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          totalPrice={totalPrice}
        />
      </div>
    )
  ) : (
    <EmptyCart />
  );
}

export default CartOverview;
