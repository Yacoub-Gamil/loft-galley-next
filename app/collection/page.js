import ItemCard from "../_components/ItemCard";
import { getAllStore } from "../_lib/data-service";

async function page() {
  const store = await getAllStore();
  return (
    <div>
      <div className=" mb-4">
        <h1>wellcome</h1>
      </div>
      <div className=" container mx-auto place-content-center grid grid-cols-5 gap-2 ">
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
