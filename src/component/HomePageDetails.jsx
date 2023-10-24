import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { scroller } from "react-scroll";


const HomePageDetails = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      duration: 1000, 
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div
      className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex flex-col justify-center items-center py-10 2xl:py-10"
      data-aos="fade-up"
      data-aos-offset="400"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="px-24 text-center dsm:px-0 md:px-0 xl:px-6 lg:px-5">
        <h1 className="text-[35px] 2xl:text-[65px] xl:text-[60px] lg:text-[58px] md:text-[55px] sm:text-[30px] ">
          Discover Rare Digital Art and Collect NFT
        </h1>
      </div>
      <div>
        <p className="px-8 2xl:px-52 xl:px-40 lg:px-28 md:px-20 sm:px-6  py-5 text-center text-[#505072]">
          Audiences multi align dry the above so how have into asking tones may
          reposed in the date technology{" "}
        </p>
      </div>
      <div className="text-lg py-4">
        <button
          className="px-10 py-3 border border-1 border-gray-400 rounded-md text-[#050515] hover:bg-[#050515] hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("collection");
          }}
        >
          <h3>Explore Now</h3>
        </button>
      </div>
    </div>
  );
};

export default HomePageDetails;
