"use client";
import Link from "next/link";
import { GiPaperTray } from "react-icons/gi";
import { FaChair } from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";
import { PiLampPendantLight } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { MdDensitySmall } from "react-icons/md";

const pagesLinks = [
  { name: "all", href: "/collection", icon: <MdDensitySmall /> },
  { name: "thonet", href: "/collection/thonet", icon: <FaChair /> },
  { name: "trays", href: "/collection/trays", icon: <GiPaperTray /> },
  { name: "modern", href: "/collection/modern", icon: <HiHomeModern /> },
  { name: "lamps", href: "/collection/lamps", icon: <PiLampPendantLight /> },
];

function SmallHeader() {
  const pathName = usePathname();

  return (
    <div className=" container sticky xs:top-[2.4rem] xl:top-[8rem] z-50 mx-auto flex xs:justify-center md:justify-end  xl:justify-end mt-8">
      <div
        className="w-fit
       text-[#1b1b1b] duration-300 bg-white flex border-[.2px] border-[#dc2626]"
      >
        {pagesLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center xs:text-[.5rem] lg:text-[.8rem] md:text-[.6rem] xs:gap-2 xl:gap-2 xl:text-[1rem] uppercase  xl:px-4 py-3 xs:px-3 hover:text-white hover:bg-[#dc2626] hover:scale-105 italic font-semibold duration-300 ${
              pathName === link.href ? "bg-[#dc2626] text-white" : ""
            }`}
          >
            <span className=" xs:text-[.6rem] xl:text-[1.2rem]">
              {link.icon}
            </span>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SmallHeader;
