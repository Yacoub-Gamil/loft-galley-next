function TitiCard() {
  return (
    <div className=" xl:w-full xs:w-[21rem] overflow-hidden relative sm:w-[30rem] m-auto bg-no-repeat bg-cover xs:h-[10rem] xl:h-[20rem] mb-[2rem]  flex justify-end items-center">
      <img src="titi.png" alt="titi" className=" absolute w-full z-10" />
      <div className=" bg-slate-400 z-30  bg-opacity-40 xl:w-[30%] xl:h-[50%]  shadow-[0px_0px_15px_0px_#1a202c] flex text-center items-center">
        <h1 className=" text-white  xl:text-[2rem] font-serif">
          Our cat Nefertiti (or Titi) is the real boss of the Loft 🦁
        </h1>
      </div>
    </div>
  );
}

export default TitiCard;
