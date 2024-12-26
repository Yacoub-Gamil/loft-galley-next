import Image from "next/image";
import daybed from "@/public/daybed.jpg";
import bookshelf from "@/public/bookshelf.jpg";

function HeroCardHome() {
  return (
    <div className=" container mx-auto mb-[2rem] text-[#1b1b1b] ">
      <div className=" w-full xl:flex lg:flex justify-evenly items-center ">
        <div className="text-black p-6 xl:w-[50%]">
          <h1 className="xl:text-[3rem] xs:text-[1rem] md:text-[1.3rem] font-serif ">
            Exceptional Furniture&apos;s For Indoor & Outdoor
          </h1>
          <p className=" xl:mx-6 mt-[1rem]  xl:text-[1.4rem] italic opacity-80 ">
            Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean
            vehicula sodales arcu non mattis. Integer dapibus ac dui pretium
            blandit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos
          </p>
        </div>
        <div className="xl:w-[30rem] mx-2 lg:w-[80rem] rounded-md overflow-hidden xl:mt-8">
          <Image src={daybed} alt="daybed" />
        </div>
      </div>

      <div className="flex  xs:flex-col-reverse lg:flex-row justify-evenly items-center xs:mt-8 ">
        <div className=" xl:w-[30rem] mx-2 rounded-md lg:w-[80rem] overflow-hidden">
          <Image src={bookshelf} alt="daybed" />
        </div>
        <div className=" p-6 xl:w-[50%]">
          <h1 className="xl:text-[3rem] xs:text-[1rem] md:text-[1.3rem] font-serif ">
            Exceptional Furniture&apos;s For Indoor & Outdoor
          </h1>
          <p className=" xl:mx-6 mt-[1rem] xl:text-[1.4rem] italic opacity-80">
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
