"use client";
import Link from "next/link";
import { GiPaperTray } from "react-icons/gi";
import { FaChair } from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";
import { PiLampPendantLight } from "react-icons/pi";
import { usePathname } from "next/navigation";

const pagesLinks = [
  { name: "all", href: "/collection", icon: <FaChair /> },
  { name: "thonet", href: "/collection/thonet", icon: <FaChair /> },
  { name: "trays", href: "/collection/trays", icon: <GiPaperTray /> },
  { name: "modern", href: "/collection/modern", icon: <HiHomeModern /> },
  { name: "lamps", href: "/collection/lamps", icon: <PiLampPendantLight /> },
];

function SmallHeader() {
  const pathName = usePathname();

  return (
    <div className=" container  mx-auto flex xs:justify-center md:justify-end  xl:justify-end mt-8">
      <div
        className="w-fit
       text-[#1b1b1b] duration-300 bg-[#f1f5f8] flex border-[.2px] border-stone-600"
      >
        {pagesLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center xs:text-[.5rem] lg:text-[.8rem] md:text-[.6rem] xs:gap-2 xl:gap-2 xl:text-[1rem] uppercase  xl:px-4 py-3 xs:px-3 hover:text-white hover:bg-[#dc2626] hover:scale-105 italic font-semibold duration-300 ${
              pathName === link.href ? "bg-[#dc2626] text-white" : ""
            }`}
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SmallHeader;
