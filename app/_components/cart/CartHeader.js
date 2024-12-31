"use client";
function CartHeader({ state }) {
  return (
    <div id="cart" className=" relative container mx-auto mt-4  text-[#1b1b1b]">
      <h1 className="capitalize xs:text-[1rem] mx-1 xl:text-[2rem] font-semibold">
        shoping bag
      </h1>
      <h2 className=" mx-8">
        <span className=" text-[#dc2626] xs:text-[.8rem] xl:text-[1.2rem] font-semibold">
          {state} items{" "}
        </span>
        in your bag
      </h2>
    </div>
  );
}

export default CartHeader;
