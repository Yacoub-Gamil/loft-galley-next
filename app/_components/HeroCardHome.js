import Image from "next/image";
import daybed from "@/public/daybed.jpg";
import bookshelf from "@/public/bookshelf.jpg";

function HeroCardHome() {
  return (
    <div className=" container mx-auto mb-[2rem]">
      <div className=" w-full flex justify-evenly items-center ">
        <div className="text-black p-6 w-[50%]">
          <h1 className="text-[3rem] ">
            Exceptional Furniture&apos;s For Indoor & Outdoor
          </h1>
          <p className=" mx-6 mt-[1rem] text-[1.4rem] italic opacity-80">
            Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean
            vehicula sodales arcu non mattis. Integer dapibus ac dui pretium
            blandit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos
          </p>
        </div>
        <div className="w-[30rem] bg-black rounded-md overflow-hidden mt-8">
          <Image src={daybed} alt="daybed" />
        </div>
      </div>

      <div className="flex justify-evenly items-center ">
        <div className=" w-[30rem] rounded-md overflow-hidden">
          <Image src={bookshelf} alt="daybed" />
        </div>
        <div className="text-black p-6 w-[50%]">
          <h1 className="text-[3rem] ">
            Exceptional Furniture&apos;s For Indoor & Outdoor
          </h1>
          <p className=" mx-6 mt-[1rem] text-[1.4rem] italic opacity-80">
            Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean
            vehicula sodales arcu non mattis. Integer dapibus ac dui pretium
            blandit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroCardHome;
