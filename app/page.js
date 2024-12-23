import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import bgHero from "@/public/bg-hero-2.jpg";

import ItemCardHome from "./_components/ItemCardHome";
import HeroCardHome from "./_components/HeroCardHome";

export default function Home() {
  return (
    <main className="">
      <div className=" w-[12rem] left-[45%] absolute z-30 ">
        <img src="logo.png" alt="" />
      </div>

      <div className=" h-[90vh] bg-[#1b1b1b]">
        <Image
          src={bgHero}
          fill
          className=" object-cover object-bottom opacity-70"
          placeholder="blur"
          quality={100}
          alt="loft gallery "
        />
      </div>

      <div className="w-full mt-[2rem] z-30">
        <ItemCardHome />
      </div>

      <div className=" mt-[2rem]">
        <HeroCardHome />
      </div>
    </main>
  );
}
