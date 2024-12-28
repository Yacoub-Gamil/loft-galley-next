"use client";

import { BsInfoLg } from "react-icons/bs";
import gsap from "gsap";
import { useEffect } from "react";
import useStoreContext from "../_context/ContextStore";

function ItemCard({ id, name, image, price, description, quantity }) {
  const { dispatch } = useStoreContext();

  useEffect(() => {
    gsap.to("#itemCard", {
      ease: "power1.inOut",
      opacity: 1,
      duration: 0.2,
      stagger: {
        amount: 1,
        grid: [1, 1],
        from: "start",
        y: -5,
      },
    });
  }, []);

  return (
    <div id="itemCard" className=" opacity-0">
      <div className=" relative group flex flex-col items-center justify-center h-[23rem] rounded-md mb-6 border bg-white ">
        {/* button to see the info about the item  */}
        <div className=" z-30 opacity-0 px-4 italic text-center w-full font-serif text-[1rem] flex justify-center items-center top-10 group-hover:opacity-100 capitalize group-hover:top-2 duration-300 absolute text-black">
          {description}
        </div>

        {/* button to add the item to teh cart */}
        <button
          onClick={() =>
            dispatch({
              type: "addItem",
              payload: { id, name, image, price, description, quantity },
            })
          }
          className="absolute italic group-hover:bottom-[-10px] w-full py-2 bg-[#dc2626] tracking-widest group-hover:opacity-100 duration-500  opacity-0 bottom-[-5px] text-[1.2rem] z-30 font-serif text-white"
        >
          Add To Cart +
        </button>

        <div className="w-[12rem] cursor-pointer">
          <img
            src={image}
            alt={name}
            className=" group-hover:scale-105 duration-300 object-cover "
          />
        </div>
      </div>
      <div className="font-serif flex flex-col justify-center text-[#1b1b1b] items-center mb-[1rem]">
        <h1 className="  uppercase">{name}</h1>
        <p className=" capitalize text-[1rem] tracking-widest ">
          {description.slice(0, 30)}
        </p>
        <h2 className=" text-[1.3rem]">EL {price}</h2>
      </div>
    </div>
  );
}

export default ItemCard;
