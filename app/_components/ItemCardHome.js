"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import tray1 from "@/public/tray/tray.png";
import tray2 from "@/public/tray/tray-2.png";
import thonet1 from "@/public/thonet/bg-3.png";
import thonet2 from "@/public/thonet/bg-4.png";
import modern1 from "@/public/modern/modern-1.png";
import modern2 from "@/public/modern/modern-2.png";
import lamp1 from "@/public/lamp/lamp-1.png";
import lamp2 from "@/public/lamp/lamp-2.png";

const itemsLink = [
  {
    image: tray1,
    image2: tray2,
    note: "Our production trays",
    descrption: "collection of design trays",
    link: "/trays",
  },
  {
    image: thonet1,
    image2: thonet2,
    note: "Our hidden treasures of thonet !",
    descrption: "Old Thonet",
    link: "/thonet",
  },
  {
    image: modern1,
    image2: modern2,
    note: "modern furniture",
    descrption: "our Production",
    link: "/modren",
  },

  {
    image: lamp1,
    image2: lamp2,
    note: "Our lamps",
    descrption: "our Production",
    link: "/lamp",
  },
];

function ItemCardHome() {
  return (
    <>
      {itemsLink.map((item) => (
        <div key={item.link} className=" m-[2rem] flex flex-col items-center">
          <div
            className={`group cursor-pointer relative w-[22rem] h-[25rem] mb-4 bg-[#1b1b1b] rounded-md overflow-hidden`}
          >
            <Image
              src={item.image}
              fill
              alt=""
              className=" object-contain group-hover:opacity-0  duration-300 group-hover:scale-105"
            />
            <h1 className=" absolute right-2 top-2 text-[.7rem] bg-orange-600 group-hover:opacity-0 py-1 px-2 rounded-md text-white ">
              Loft Gallery
            </h1>

            <div className=" group-hover:opacity-100  flex flex-col items-center duration-300 opacity-0 bg-gradient-to-t from-black to-bg-[#1b1b1b] h-full absolute w-full ">
              <div className="w-[23rem] h-[23rem] mt-[rem] group-hover:scale-105  duration-300 ">
                <Image
                  src={item.image2}
                  alt=""
                  fill
                  className=" object-contain"
                />
              </div>

              <Link
                href={item.link}
                className=" group italic absolute bottom-4 flex  uppercase tracking-wider rounded-lg  text-[.9rem] font-semibold z-30 hover:scale-105 duration-300 text-white px-4 py-1"
              >
                Discover More
                <FaLocationArrow className=" text-[1.2rem] text-orange-600 mt-[-.5rem] " />
              </Link>
            </div>
          </div>
          <div className=" flex flex-col gap-1 text-white justify-center items-center">
            <p className=" capitalize italic opacity-85">{item.note}</p>
            <Link
              href={item.link}
              className=" group font-serif capitalize text-[1.2rem] duration-300 opacity-85 tracking-wider  justify-center flex items-center "
            >
              {item.descrption}
              <FaLocationArrow className=" text-[1.3rem] group-hover:opacity-100 duration-300 opacity-0 text-orange-600 " />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemCardHome;
