import ItemCard from "../../_components/ItemCard";
import { getAllStore } from "../../_lib/data-service";
import bgTray from "@/public/bg-tray.png";
import Image from "next/image";

export const metadata = {
  title: "Trays",
};

async function page() {
  const data = await getAllStore();
  const trays = data?.filter((item) => item.category === "trays");

  return (
    <div className="">
      <div className=" container mx-auto text-[#1b1b1b] flex justify-center items-center mb-4">
        <div className=" uppercase font-serif">
          <h1 className=" text-center  xl:text-[1.4rem] tracking-widest">
            loft gallery Thonet
          </h1>
          <p className=" tracking-widest xs:text-[.6rem] md:text-[1rem]">
            Our hidden treasures of thonet !
          </p>
        </div>
        <div>
          <Image
            src={bgTray}
            alt="bg-tray"
            className=" xl:w-[10rem] xl:h-[10rem] xs:w-[5rem] mx-auto"
          />
        </div>
      </div>
      <div className="container p-2 xs:grid-cols-1  mx-auto place-content-center grid   md:grid-cols-2 xl:grid-cols-5 gap-2 ">
        {trays.map((trays) => (
          <ItemCard
            key={trays.id}
            id={trays.id}
            image={trays.image}
            name={trays.name}
            description={trays.description}
            quantity={trays.quantity}
            price={trays.price}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
