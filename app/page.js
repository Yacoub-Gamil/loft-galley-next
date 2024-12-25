import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import bgHero from "@/public/bg-hero-2.jpg";

import ItemCardHome from "./_components/ItemCardHome";
import HeroCardHome from "./_components/HeroCardHome";

export default function Home() {
  return (
    <main className="">
      <div className=" relative  h-[90vh] bg-[#1b1b1b]">
        <Image
          src={bgHero}
          fill
          className=" object-cover object-bottom opacity-70"
          placeholder="blur"
          quality={80}
          alt="loft gallery "
        />
        <div className="w-full h-full absolute flex justify-center items-center z-30">
          <div className="flex flex-col items-center gap-4 bg-white bg-opacity-90 shadow-[0px_0px_5px_5px_#e2e8f0] p-4 xs:w-[20rem] xl:w-[40rem]">
            <img src="logo.png" alt="loft logo" className=" xs:w-[8rem] xl:w-[14rem]"/>
            <p className=" xl:text-[2rem] italic font-serif">Still better, visit us in <span className=" text-[#dc2626] xs:text-[1.4rem] xl:text-[2.3rem]">person!</span> </p>
            <Link
              href="/collection"
              className="flex items-center gap-2 group tracking-widest font-serif xl:text-[1.6rem] border-b border-[#dc2626] text-black px-7 py-2"
            >
              <span className=" text-[#dc2626] font-semibold underline">
                Shop
              </span>
              Now
              <span>
                <FaLocationArrow className="  duration-300 text-[#dc2626]" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full mt-[2rem] z-30">
        <ItemCardHome />
      </div>

      {/* <div className=" mt-[2rem]">
        <HeroCardHome />
      </div> */}
    </main>
  );
}
