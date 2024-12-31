"use client";
function ClearCartButton({ dispatch }) {
  return (
    <div className=" absolute top-[-2rem] left-[-2rem] w-full flex justify-end text-[#1b1b1b] ">
      <button
        onClick={() => dispatch({ type: "clearCart" })}
        className=" hover:scale-x-105 duration-300 xs:text-[.6rem] xl:text-[0.8rem] text-[#dc2626] tracking-wider font-semibold uppercase"
      >
        <span className=" text-[#dc2626] xs:text-[.6rem] xl:text-[.9rem] ">
          X
        </span>
        clear car
      </button>
    </div>
  );
}

export default ClearCartButton;
