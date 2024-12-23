import { PuffLoader } from "react-spinners";
import ItemCard from "../../_components/ItemCard";
import { getAllStore } from "../../_lib/data-service";
import bgModern from "@/public/bg-modern.png";
import Image from "next/image";

async function page() {
  const data = await getAllStore();
  const trays = data?.filter((item) => item.category === "modernFurniture");

  return (
    <div className="">
      <div className=" container mx-auto text-[#1b1b1b] flex justify-center items-center mb-4">
        <div className=" uppercase font-serif">
          <h1 className=" text-center text-[1.4rem] tracking-widest">
            loft gallery prodction
          </h1>
          <p className=" tracking-widest">
            modern-furniture to make your home beautiful
          </p>
        </div>
        <div>
          <Image
            src={bgModern}
            alt="bg-tray"
            className=" w-[10rem] h-[10rem] mx-auto"
          />
        </div>
      </div>
      <div className=" container mx-auto place-content-center grid grid-cols-5 gap-2">
        {trays.map((modern) => (
          <ItemCard
            key={modern.id}
            id={modern.id}
            image={modern.image}
            name={modern.name}
            description={modern.description}
            price={modern.price}
            quantity={modern.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
