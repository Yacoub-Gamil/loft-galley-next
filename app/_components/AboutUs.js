"use client";

import gsap from "gsap";
import OurTeam from "./OurTeam";
import TitiCard from "./TitiCard";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    gsap.fromTo(
      "#aboutUs",
      { opacity: 0, y: -5 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div id="aboutUs" className=" container mx-auto">
      {/* 1 */}
      <div className=" xl:w-full mx-auto xl:flex mb-[2rem] text-slate-100">
        <div className="w-full">
          <h1 className=" font-bold xs:mx-1 xl:text-[2rem] mt-[1.4rem] mb-[.5rem]">
            loft gallery
          </h1>
          <p className=" xl:text-[1.2rem] xs:text-[.8rem] mx-[2rem]">
            THE LOFT gallery is located in the smart Zamalek district of Cairo.
            The owner, Hani Gamil, opened the Gallery in November 2002 in a
            large apartment of a charming 30&apos;s house. As soon as you enter
            the Loft you are immediately aware of the quietude of the premises -
            an atmosphere in complete contrast to the hustle and bustle of the
            city. You are in another world. You are also immediately aware of
            the size of the rooms with their high ceilings, typical of old
            houses of that epoch. Thanks to this space the Loft can expose a
            large collection of lightings - many of which are it&apos;s own
            creations: chandeliers, table lamps - a multitude of brightness.
            Within its rather rustic décor and oriental atmosphere you will find
            a perfect combination of antique and new furniture, all sorts of
            home accessories and a treasure trove of curiosities - all coming
            together in harmony
          </p>
        </div>
        <div className=" xl:w-full rounded-sm grid grid-cols-3 mt-[2.2rem] p-2 place-content-center gap-[2px]">
          <img src="loft-team/bg-1.jpg" alt="" />
          <img src="loft-team/bg-2.jpg" alt="" />
          <img src="loft-team/bg-3.jpg" alt="" />
          <img src="loft-team/bg-4.jpg" alt="" />
          <img src="loft-team/bg-5.jpg" alt="" />
          <img
            className="xl:h-full xs:h-[4.7rem] md:h-[9.7rem] sm:h-[7.2rem] lg:h-full"
            src="loft-team/bg-6.jpg"
            alt=""
          />
        </div>
      </div>
      {/* 2 */}
      <div className=" xl:w-full gap-8 mx-auto xl:flex justify-between mb-[2rem]">
        <div className=" w-full xl:w-[40rem]">
          <img
            className="xl:mx-[2rem] xs:h-[18rem] xs:mx-2 sm:mx-auto xl:h-[25rem] xl:w-[30rem] rounded-sm"
            src="loft-team/hani.jpg"
            alt=""
          />
        </div>
        <div className=" w-full xl:w-[40rem] text-slate-100">
          <h1 className=" xs:mx-1 xl:text-[2rem] font-bold  mb-[.5rem] ">
            Hani Gamil
          </h1>
          <p className=" xl:text-[1.2rem] xs:text-[.8rem] mx-[2rem]">
            The owner, Hani Gamil, is a young decorator originating from Upper
            Egypt. He is a &quot;self-made&quot; man who learnt his trade
            &quot;on the job&quot; in the Egyptian capital Cairo. In spite of
            his young age (born in 1978), he already has long experience in the
            field of interior design. From the age of 18 he has worked for some
            well known &quot;avant-guard&quot; Egyptian interior designers. He
            is typical of the new generation of Egyptian creators. In 2002 he
            decided to take the plunge and open his own workshop and gallery,
            namely the LOFT. He gathered together all his extensive knowledge
            and experience and, also thanks to his close friends who believed in
            his aims and have been a continual support, the LOFT was realised.
          </p>
        </div>
      </div>

      {/* 3 */}
      <div>
        <OurTeam />
        <TitiCard />
      </div>
    </div>
  );
}

export default AboutUs;
