"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { MdCameraIndoor } from "react-icons/md";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";

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
    link: "/collection/trays",
    name: "trays",
  },
  {
    image: thonet1,
    image2: thonet2,
    note: "Our hidden treasures of thonet !",
    descrption: "Old Thonet",
    link: "/collection/thonet",
    name: "thonet",
  },
  {
    image: modern1,
    image2: modern2,
    note: "modern furniture",
    descrption: "our Production",
    link: "/collection/modern",
    name: "modern",
  },

  {
    image: lamp1,
    image2: lamp2,
    note: "Our lamps",
    descrption: "our Production",
    link: "/collection/lamps",
    name: "lamps",
  },
];

function ItemCardHome() {
  return (
    <div className=" mx-auto xl:container mt-[4rem] mb-[6rem]">
      <h1 className=" w-full xs:text-[1rem] md:text-[1.4rem] xl:text-[3rem] font-serif text-center text-[#1b1b1b]">
        Luxurious Haven Collection
      </h1>

      <div className=" flex justify-center xs:text-[.8rem] md:text-[1rem] xs:gap-4  xl:gap-10 mt-[2rem] mb-8 text-[#1b1b1b] xl:text-[1.2rem] opacity-70 ">
        <h2 className=" flex items-center gap-1">
          <SiHomeassistantcommunitystore /> Home 
        </h2>
        <h2 className=" flex items-center gap-1">
          <HiMiniBuildingOffice2 /> Office 
        </h2>
        <h2 className=" flex items-center gap-1">
          {" "}
          <MdCameraIndoor /> Indoor 
        </h2>
        <h2 className=" flex items-center gap-1">
          <FaBuildingCircleArrowRight /> Outdoor
        </h2>
      </div>

      <div className=" w-[90%] mx-auto grid xs:grid-cols-1 lg:grid-cols-2  xl:grid-cols-4 gap-8 xl:gap-2">
        {itemsLink.map((item) => (
          <div key={item.link} className=" flex flex-col items-center">
            <div
              className={`group cursor-pointer relative w-full xs:h-[18rem] xl:h-[22rem] mb-4 bg-[#f1f5f8] bg-gradient-to-b from-black to-bg-[#1b1b1b] rounded-md overflow-hidden`}
            >
              <Image
                src={item.image}
                fill
                alt=""
                className=" object-contain group-hover:opacity-0 duration-300 group-hover:scale-105"
              />
              <h1 className=" uppercase absolute right-2 top-2 text-[.6rem] bg-[#dc2626] group-hover:opacity-0 py-1 px-2 rounded-md text-white font-semibold ">
                {item.name}
              </h1>

              <div className=" group-hover:opacity-100 flex flex-col items-center duration-300 opacity-0 bg-gradient-to-t from-[#1b1b1b] to-bg-[#f1f5f8] h-full absolute w-full ">
                <div className="xl:w-[23rem]  xl:h-[23rem] xs:w-[12rem] xs:h-[15rem] group-hover:scale-105  duration-300 ">
                  <Image
                    src={item.image2}
                    alt=""
                    fill
                    className=" object-contain"
                  />
                </div>

                <Link
                  href={item.link}
                  className=" group italic absolute bottom-4 flex uppercase tracking-wider rounded-lg  xl:text-[1rem] font-semibold z-30 hover:scale-105 duration-300 text-white px-4 py-1"
                >
                  Discover More
                  <FaLocationArrow className=" xl:text-[1.2rem] text-[#dc2626] mt-[-.5rem] " />
                </Link>
              </div>
            </div>

            <div className=" flex flex-col gap-1 text-[#1b1b1b] justify-center items-center">
              <p className=" capitalize italic text-[1rem] opacity-85">
                {item.note}
              </p>
              <Link
                href={item.link}
                className=" group font-serif capitalize text-[1.2rem] duration-300 opacity-85 tracking-wider  justify-center flex items-center "
              >
                {item.descrption}
                <FaLocationArrow className=" xl:text-[1.3rem] group-hover:opacity-100 duration-300 opacity-0 text-[#dc2626] " />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemCardHome;
