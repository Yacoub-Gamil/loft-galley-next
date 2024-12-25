"use client";
import { PuffLoader } from "react-spinners";
function Loading() {
  return (
    <div className=" flex justify-center items-center h-[80vh] ">
      <PuffLoader color="#dc2626" size={200} />
    </div>
  );
}

export default Loading;
