"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <footer className=" text-[#52525b] bg-white p-2">
      <div className=" flex justify-center">
        <Image className="xs:w-[8rem] xl:w-[8rem]" src={logo} alt="" />
      </div>
      <div className="">
        <h1 className=" m-[1rem] font-semibold xs:text-[0.8rem] xl:text-[1rem] text-center tracking-widest uppercase">
          Connect With Us! We are on
        </h1>
        <div className=" flex xs:text-[.8rem] xs:gap-4 xl:gap-6 justify-center items-center xl:text-[1rem] ">
          <a
            target="blank"
            href="https://www.facebook.com/LoftGalleryEgypt/"
            className=" border border-[#52525b] rounded-full p-1 cursor-pointer hover:bg-white hover:text-black"
          >
            <FaFacebookF />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/loftgalleryegypt/"
            className=" border border-[#52525b] rounded-full p-1 cursor-pointer hover:bg-white hover:text-black"
          >
            <FaInstagram />
          </a>
          <a
            target="blank"
            href=""
            className=" border border-[#52525b] rounded-full p-1 cursor-pointer hover:bg-white hover:text-black"
          >
            <MdOutlineEmail />
          </a>
        </div>
        <div className=" sx:text-[.8rem] xl:text-[1rem] mb-[1rem] xs:gap-1 flex xl:gap-6 justify-center mt-[1rem]">
          <h1>(+02) 121 095 5561</h1>
          -<FaWhatsapp className=" text-[1.4rem]" />-<h1>(+02) 122 2276 680</h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
