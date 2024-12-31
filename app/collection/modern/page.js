import { PuffLoader } from "react-spinners";
import ItemCard from "../../_components/ItemCard";
import { getAllStore } from "../../_lib/data-service";
import bgModern from "@/public/bg-modern.png";
import Image from "next/image";

export const metadata = {
  title: "Modern",
};

async function page() {
  const data = await getAllStore();
  const trays = data?.filter((item) => item.category === "modernFurniture");

  return (
    <>
      <div className=" container mx-auto text-[#1b1b1b] flex justify-center items-center mb-4">
        <div className=" uppercase font-serif">
          <h1 className=" text-center xl:text-[1.4rem] tracking-widest">
            loft gallery prodction
          </h1>
          <p
            className=" tracking-widest xs:text-[.6rem] md:text-[1rem] mx-2
          "
          >
            modern-furniture to make your home beautiful
          </p>
        </div>
        <div>
          <Image
            src={bgModern}
            alt="bg-tray"
            className=" xl:w-[10rem] xl:h-[10rem] mx-auto"
          />
        </div>
      </div>
      <div className="container mx-auto xs:grid-cols-1  p-2 place-content-center grid md:grid-cols-2 xl:grid-cols-5 gap-2 ">
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
    </>
  );
}

export default page;
