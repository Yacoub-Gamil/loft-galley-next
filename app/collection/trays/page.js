import { PuffLoader } from "react-spinners";
import ItemCard from "../../_components/ItemCard";
import { getAllStore } from "../../_lib/data-service";
import bgTray from "@/public/bg-tray.png";
import Image from "next/image";

async function page() {
  const data = await getAllStore();
  const trays = data?.filter((item) => item.category === "trays");
  return (
    <div className="">
      <div className=" container mx-auto text-[#1b1b1b] flex justify-center items-center mb-4">
        <div className=" uppercase font-serif">
          <h1 className=" text-center text-[1.4rem] tracking-widest">
            loft gallery prodction
          </h1>
          <p className=" tracking-widest">
            beautiful trays to make your home warm
          </p>
        </div>
        <div>
          <Image
            src={bgTray}
            alt="bg-tray"
            className=" w-[10rem] h-[10rem] mx-auto"
          />
        </div>
      </div>
      <div className=" container mx-auto place-content-center grid grid-cols-5 gap-2">
        {trays.map((tray) => (
          <ItemCard
            key={tray.id}
            id={tray.id}
            image={tray.image}
            name={tray.name}
            description={tray.description}
            price={tray.price}
            quantity={tray.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
