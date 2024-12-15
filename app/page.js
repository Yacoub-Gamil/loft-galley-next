import Image from "next/image";
import Link from "next/link";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { MdCameraIndoor } from "react-icons/md";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";

import bgHero from "@/public/bg-2.png";
import daybed from "@/public/daybed.jpg";
import bookshelf from "@/public/bookshelf.jpg";
import ItemCardHome from "./_components/ItemCardHome";

export default function Home() {
  return (
    <div className="">
      <div className="z-10 ">
        <Image
          src={bgHero}
          fill
          placeholder="blur"
          alt="heroImage"
          className=" object-bottom"
        />
      </div>
      <div className=" relative z-20 bg-[#141414] bg-opacity-80 flex justify-center h-[100vh]">
        <div className="container font-serif h-[60%] p-4 text-white flex flex-col items-center gap-10 mt-[12rem]">
          <h1 className=" text-[4rem] italic">
            Discover Furniture&apos;s For Living
          </h1>
          <p className=" font-serif text-center text-[1.6rem] italic w-[50rem] tracking-wide">
            Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et
            tortor consequat id. Fermentum egestas tellus. Nunc eu hendrerit
            turpis. Fusce non lectus sem. In pellentesque nunc non Donec pretium
            gravida neque et placerat.
          </p>
          <Link
            href=""
            className=" group uppercase text-[1.8rem] rounded-sm hover:scale-x-105 gap-2 duration-300 flex justify-center tracking-wider items-center mt-[8rem]"
          >
           <span className=" text-orange-600 border-b">shop</span> now 
            <span className="  text-orange-600">
              <FaLocationArrow />
            </span>
          </Link>
        </div>
      </div>

      <div className="mb-[2rem]">
        <div className="  justify-between mx-[2rem] flex items-center">
          <div className="text-white   p-6 w-[65rem]">
            <h1 className="text-[4rem] ">
              Exceptional Furniture&apos;s For Indoor & Outdoor
            </h1>
            <p className=" mx-6 mt-[1rem] text-[1.4rem] italic opacity-80">
              Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean
              vehicula sodales arcu non mattis. Integer dapibus ac dui pretium
              blandit. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos
            </p>
          </div>
          <div className=" w-[45rem] rounded-md overflow-hidden mt-8">
            <Image src={daybed} alt="daybed" />
          </div>
        </div>

        <div className="flex justify-between mx-[2rem] items-center mt-[-4rem]">
          <div className=" w-[45rem] rounded-md overflow-hidden">
            <Image src={bookshelf} alt="daybed" />
          </div>
          <div className="text-white p-6 w-[65rem]">
            <h1 className="text-[4rem] ">
              Exceptional Furniture&apos;s For Indoor & Outdoor
            </h1>
            <p className=" mx-6 mt-[1rem] text-[1.4rem] italic opacity-80">
              Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean
              vehicula sodales arcu non mattis. Integer dapibus ac dui pretium
              blandit. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-[5rem] mx-auto">
        <h1 className=" text-[3rem] font-serif text-center text-white">
          Luxurious Haven Collection
        </h1>
        <div className="flex justify-center gap-10 mt-[2.4rem] text-white text-[1.2rem]  opacity-50 ">
          <h2 className=" flex items-center gap-1">
            <SiHomeassistantcommunitystore /> Home Decoration
          </h2>
          <h2 className=" flex items-center gap-1">
            <HiMiniBuildingOffice2 /> Office Decoration
          </h2>
          <h2 className=" flex items-center gap-1">
            {" "}
            <MdCameraIndoor /> Indoor Decoration
          </h2>
          <h2 className=" flex items-center gap-1">
            <FaBuildingCircleArrowRight /> Outdoor Decoration
          </h2>
        </div>
        <div className=" w-[90%] gap-[2rem]  mx-auto grid grid-cols-4">
          <ItemCardHome />
        </div>
      </div>
    </div>
  );
}
