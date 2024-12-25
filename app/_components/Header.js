"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import useStoreContext from "../_context/ContextStore";

const headerLinks = [
  { name: "home", href: "/" },
  { name: "collection", href: "/collection", icon: <TiArrowSortedUp /> },
  { name: "about", href: "/about" },
  { name: "contact us", href: "/contact" },
];

function Header() {
  const pathName = usePathname();
  const { state } = useStoreContext();

  return (
    <div className=" sticky top-0 bg-white z-50">
      <div className=" xs:mx-4 xl:mx-[5rem] grid grid-cols-[auto_1fr_auto] place-content-center">
        <Link href="/" className=" xl:w-[8rem] xs:w-[4rem]">
          <Image src={logo} alt="loft logo" className=" object-contain" />
        </Link>
        <div className=" flex justify-center items-center relative">
          <div className=" xs:text-[.5rem] xl:text-[1rem] flex xs:gap-2 xl:gap-10 xs:mt-4 xl:mt-[2.8rem] tracking-widest  font-serif text-black uppercase">
            {/* Navigation Links  */}
            {headerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-[#dc2626] hover:scale-x-110 duration-300 flex flex-col items-center ${
                  pathName === link.href ? "text-[#dc2626] scale-x-110" : ""
                } `}
              >
                {link.name}
                {link.href === "" && (
                  <span className=" xl:text-[1.4rem] text-[#dc2626] ">
                    {showCollection ? link.icon : <TiArrowSortedDown />}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Cart & User  */}
        <div className=" flex xl:gap-4 xs:gap-2 xs:text-[.8rem] xl:text-[1.6rem] items-center text-black">
          <Link href="/cart" className="relative ">
            {state.length > 0 ? (
              <span className=" text-[.8rem] bg-[#dc2626] text-white absolute flex justify-center items-center rounded-full top-[-1rem] left-5 w-[1.2rem] h-[1.2rem]">
                {state.length}
              </span>
            ) : (
              <span
                className=" bg-[#dc2626] absolute rounded-full top-[-.5rem] xl:
              left-5 xs:left-2 w-[.4rem] h-[.4rem]"
              ></span>
            )}
            <HiOutlineShoppingCart className="hover:text-[#dc2626] hover:scale-x-105 duration-300" />
          </Link>
          <Link href="">
            <CiUser className=" hover:text-[#dc2626] hover:scale-x-105 duration-300 " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
