import Link from "next/link";

function CartPayment({ totalPrice, setShowModle }) {
  return (
    <div className=" relative">
      <div className=" sticky top-[8rem]">
        <div className="border p-6 xL:w-[20rem] mb-[1rem] bg-white rounded-xl">
          <h1 className=" font-serif capitalize mb-4 ">order summary :</h1>
          <h2 className=" flex justify-between mb-4">
            SubTotal :<span>{totalPrice} EL</span>
          </h2>
          <h3>
            <span className=" flex justify-between border-t border-stone-600">
              Total :<span>{totalPrice} EL</span>
            </span>
          </h3>
        </div>
        <div className=" flex flex-col gap-2 justify-center font-semibold items-center">
          <button
            onClick={() => setShowModle((show) => !show)}
            className="w-full bg-[#dc2626] duration-300 hover:scale-x-105 text-white bg-opacity-90 capitalize rounded-md p-2"
          >
            proceed to secure checkout
          </button>
          <Link
            href="/collection"
            className=" border-[.1px] border-orange-600 duration-300 hover:scale-105 text-[#dc2626] capitalize rounded-md p-2 w-full text-center"
          >
            continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPayment;
