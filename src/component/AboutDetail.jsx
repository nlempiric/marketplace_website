import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutDetail = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);


  return (
    <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex flex-col 2xl:!flex-row xl:flex-row justify-between py-24 gap-8 2xl:gap-16 xl:gap-16"
    data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1000">
      <div className="2xl:w-1/2 lg:w-full flex justify-center">
        <img src="/aboutPage.webp" alt="" />
      </div>
      <div className="2xl:w-1/2 xl:w-1/2 w-full flex flex-col text-center 2xl:text-start  xl:text-start gap-8">
        <p className="text-[#505072]">Welcome to Nifty</p>
        <h1 className="text-4xl">
          High-quality rendered & equally affordable artwork
        </h1>
        <p className="text-[#505072]">
          By maintain didn't found horn a while hiding has that managers, back
          it the mice again musical approved anywhere gets reported with paper
          he the sides harmonics.
        </p>
        <ul className="text-[18px] font-[interh2] list-disc px-8 flex flex-col gap-4 2xl:items-start xl:items-start items-center">
          <li>Illustration Artist</li>
          <li>3D Model Designer</li>
          <li>Motion Graphics</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutDetail;
