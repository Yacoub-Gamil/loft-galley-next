import Image from "next/image";
import logo from "@/public/logo.png";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

const links = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "collections", href: "/collections" },
  { name: "contact us", href: "/contact" },
];

function Header() {
  return (
    <div className=" bg-[#141414] bg-opacity-80 sticky top-[0px] z-50">
      <div className=" mx-[4rem] grid grid-cols-[auto_1fr_auto]">
        <div className=" w-[9rem]">
          <Image src={logo} alt="loft logo" className=" object-contain" />
        </div>
        <div className=" flex justify-center items-center ">
          <ul className=" text-[1.3rem] mb-4 flex gap-6 mt-[4rem] tracking-widest font-semibold italic text-white uppercase">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-orange-600 hover:scale-x-110 duration-300"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="  flex  gap-4 text-[2rem] items-center text-white">
          <Link href="/cart" className=" relative">
            <span className="  bg-orange-600 absolute rounded-full top-[-.5rem] left-5 w-[.6rem] h-[.6rem]"></span>
            <HiOutlineShoppingCart className="hover:text-orange-600 hover:scale-x-105 duration-300" />
          </Link>
          <Link href="">
            <CiUser className=" hover:text-orange-600 hover:scale-x-105 duration-300 " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
