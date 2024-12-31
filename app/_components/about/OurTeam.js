function OurTeam() {
  return (
    <div className="xl:w-full xs:w-[21rem] sm:w-[30rem] mx-auto ">
      <h1 className=" uppercase xl:text-[2.4rem] italic font-serif  text-[#52525b] mb-[1rem] text-center">
        Loft Gallery Team
      </h1>
      <div className="grid grid-cols-5 gap-2 xl:mb-[10rem] xs:mb-[1rem] sm:h-[6rem] w-full ">
        <img
          className=" rounded-md xs:h-[4rem] xl:h-[15rem] sm:h-[6rem] w-full"
          src="loft-team/shnouda.jpg"
          alt=""
        />
        <img
          className=" rounded-md  xs:h-[4rem] xl:h-[15rem] sm:h-[6rem] w-full "
          src="loft-team/pierre.jpg"
          alt=""
        />
        <img
          className=" rounded-md  xs:h-[4rem] xl:h-[15rem] sm:h-[6rem] w-full "
          src="loft-team/hani.jpg"
          alt=""
        />
        <img
          className=" rounded-md  xs:h-[4rem] xl:h-[15rem] sm:h-[6rem] w-full "
          src="loft-team/yacoub.jpg"
          alt=""
        />
        <img
          className=" rounded-md xs:h-[4rem] xl:h-[15rem] sm:h-[6rem] w-full "
          src="loft-team/mina.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default OurTeam;
