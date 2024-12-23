"use client";
import { PuffLoader } from "react-spinners";
function Loading() {
  return (
    <div className=" flex justify-center items-center h-[80vh] ">
      <PuffLoader color="#ea580c" size={200} />
    </div>
  );
}

export default Loading;
