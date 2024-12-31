import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import bgHero from "@/public/bg-hero-2.jpg";
import logo from "@/public/logo.png";

function HeroSection() {
  return (
    <div className=" grid xl:grid-cols-2 xs:grid-cols-1  mx-2 xl:mx-auto bg-white rounded-md ">
      <div className="flex flex-col items-center relative xl:justify-between xl:gap-4 rounded-md p-4 ">
        <div className=" xs:w-[14rem] xl:w-[17rem] ">
          <Image src={logo} alt="loft-logo" className=" object-cover" />
        </div>

        <div className="">
          <h1 className=" xl:text-[2rem] lg:text-[1.2rem] italic font-serif text-center">
            Still better, visit us in
            <span className=" text-[#dc2626] xs:text-[1.4rem] xl:text-[2.3rem] lg:text-[2rem]">
              person!
            </span>
          </h1>
          <p className="text-[1.2rem] font-serif text-center">
            We love our customers, so feel free to visit us.
          </p>
        </div>

        <Link
          href="/collection"
          className="flex items-center gap-2 group tracking-widest font-serif xl:text-[1.6rem] lg:text-[1.3rem] border-b border-[#dc2626] text-black"
        >
          <span className=" text-[#dc2626] font-semibold underline">Shop</span>
          Now
          <span>
            <FaLocationArrow className=" duration-300 text-[#dc2626]" />
          </span>
        </Link>
      </div>

      <div>
        <Image
          src={bgHero}
          className=" rounded-md xl:scale-110"
          placeholder="blur"
          quality={100}
          alt="loft gallery "
        />
      </div>
    </div>
  );
}

export default HeroSection;
