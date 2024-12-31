"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

import { HiOutlineShoppingCart } from "react-icons/hi2";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import useStoreContext from "../../_context/ContextStore";

const headerLinks = [
  { name: "home", href: "/" },
  { name: "collection", href: "/collection", icon: <TiArrowSortedUp /> },
  { name: "about", href: "/about" },
];
function Header() {
  const pathName = usePathname();
  const { state } = useStoreContext();

  return (
    <header className=" sticky top-0 bg-white z-50 border-b ">
      <div className=" xs:mx-4 xl:mx-[5rem] grid grid-cols-[auto_1fr_auto] place-content-center">
        <Link
          href="/"
          className=" xl:w-[8rem] lg:w-[7rem] sm:w-[5rem] md:w-[5rem] xs:w-[4rem]"
        >
          <Image src={logo} alt="loft-logo" className="object-contain" />
        </Link>
        {/* Navigation Links  */}
        <div className=" flex justify-center items-center relative">
          <div className=" xs:text-[.6rem] sm:text-[.7rem] md:gap-4 lg:text-[1rem]  md:text-[.8rem] sm:gap-3 xl:text-[1rem] flex xs:gap-2 xl:gap-10 lg:gap-6 xs:mt-4 xl:mt-[2.8rem] tracking-widest font-serif text-black uppercase">
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

        <div className=" flex xl:gap-4 xs:gap-2 md:gap-4 xs:text-[.8rem] sm:text-[.9rem] md:text-[1rem] xl:text-[1.6rem] lg:text-[1.4rem] items-center text-black">
          <Link href="/cart" className="relative ">
            {" "}
            {state.length > 0 ? (
              <span className=" xl:text-[.8rem] xs:text-[.5rem] bg-[#dc2626] text-white absolute flex justify-center items-center rounded-full xs:top-[-.6rem] xs:left-0 xl:top-[-1rem] left-5 xl:w-[1.2rem] xs:h-[.6rem] xs:w-[.6rem] xl:h-[1.2rem] sm:w-[1rem] sm:top-[-1rem] sm:h-[1rem] md:w-[1.2rem] md:h-[1.2rem] md:top-[-1.2rem] lg:text-[.8rem]">
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
        </div>
      </div>
    </header>
  );
}

export default Header;
