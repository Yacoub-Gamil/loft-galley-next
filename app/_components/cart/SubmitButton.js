"use client";

import useStoreContext from "@/app/_context/ContextStore";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className=" bg-[#dc2626] text-white py-2 text-[1.2rem] w-[20rem]"
    >
      checkout
    </button>
  );
}

export default SubmitButton;
