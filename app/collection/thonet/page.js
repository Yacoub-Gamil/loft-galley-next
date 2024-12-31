import Image from "next/image";
import { getAllStore } from "../../_lib/data-service";
import ItemCard from "../../_components/ItemCard";
import bgThonet from "@/public/bg-thonet.png";

export const metadata = {
  title: "Thonet",
};

async function page() {
  const data = await getAllStore();
  const thonet = data?.filter((item) => item.category === "thonet");

  return (
    <div className="">
      <div className=" container mx-auto text-[#1b1b1b] flex justify-center items-center mb-4">
        <div className=" uppercase font-serif">
          <h1 className=" text-center xl:text-[1.4rem] tracking-widest">
            loft gallery Thonet
          </h1>
          <p className=" tracking-widest xs:text-[.6rem] md:text-[1rem]">
            Our hidden treasures of thonet !
          </p>
        </div>
        <div>
          <Image
            src={bgThonet}
            alt="bg-tray"
            className=" xl:w-[10rem] xl:h-[10rem] xs:w-[5rem] mx-auto"
          />
        </div>
      </div>
      <div className=" container p-2 xs:grid-cols-1   mx-auto place-content-center grid md:grid-cols-2 xl:grid-cols-5 gap-2">
        {thonet.map((thonet) => (
          <ItemCard
            key={thonet.id}
            id={thonet.id}
            image={thonet.image}
            name={thonet.name}
            description={thonet.description}
            quantity={thonet.quantity}
            price={thonet.price}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
