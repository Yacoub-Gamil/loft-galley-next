import ItemCard from "../_components/ItemCard";
import { getAllStore } from "../_lib/data-service";

async function page() {
  const store = await getAllStore();
  return (
    <div>
      <h1 className=" text-center mb-8 font-serif mx-2  xl:text-[1.4rem] italic">Form  here you can check what we have in our store</h1>
      <div className=" container p-2 xs:grid-cols-1   place-content-center grid md:grid-cols-2 xl:grid-cols-5 gap-2 ">
        {store?.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
