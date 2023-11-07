import React, { useEffect } from "react";
import Heading from "../component/Heading";
import ListsinFooter from "../component/ListsinFooter";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutDetail from "../component/AboutDetail";
import AboutMyService from "../component/AboutMyService";
import AboutCount from "../component/AboutCount";
import AboutExplore from "../component/AboutExplore";
import { motion } from "framer-motion";

const Aboutpage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      {/* <div
        className="bg-gradient-to-r from-[#d6ebdc] to-[#f6d8c8] via-[#dfe8dd] via-[#e6e8dc] via-[#eae8dd] via-[#f0dece] md:bg-gradient-to-b dsm:bg-gradient-to-b"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        style={{ zIndex: "-20" }}
      >
        <Heading headingName="About Me" />
      </div> */}
      <div 
             className="bg-gradient-to-r from-[#d6ebdc] to-[#f6d8c8] via-[#dfe8dd] via-[#e6e8dc] via-[#eae8dd] via-[#f0dece] md:bg-gradient-to-b dsm:bg-gradient-to-b"
             >

      <motion.div
        initial={{ opacity: 0, y: 90 }} // Initial state
        animate={{ opacity: 1, y: 0 }}   // Animate to this state
        exit={{ opacity: 0, y: 20 }}     // Exit state (if needed)
        transition={{ duration: 0.9 }}  // Transition settings
        className="box"                  // Add your class or styles here
      >
        <Heading headingName="About Me" />
      </motion.div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.9 }}
          className="box"
        >
          <AboutDetail />
        </motion.div>
      </div>
      <div
        className="bg-gradient-to-r from-[#d6ebdc] to-[#f6d8c8] via-[#dfe8dd] via-[#e6e8dc] via-[#eae8dd] via-[#f0dece] md:bg-gradient-to-b dsm:bg-gradient-to-b"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <AboutMyService />
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <AboutCount />
      </div>
      <div
        className="bg-gradient-to-r from-[#d6ebdc] to-[#f6d8c8] via-[#dfe8dd] via-[#e6e8dc] via-[#eae8dd] via-[#f0dece] md:bg-gradient-to-b dsm:bg-gradient-to-b"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <AboutExplore />
      </div>
      <div>
        <ListsinFooter />
      </div>
    </>
  );
};

export default Aboutpage;
