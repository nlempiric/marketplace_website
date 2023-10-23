import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClone ,FaUsers} from "react-icons/fa";
import { FaHandshakeAngle,FaFileLines} from "react-icons/fa6"

const AboutCount = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div
      className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 my-32"
      // data-aos="fade-up"
      // data-aos-offset="300"
      // data-aos-easing="ease-in-sine"
      // data-aos-duration="1000"
    >
      <div className="flex flex-col items-center gap-6 border-r border-[#E0E0F2]">
        <p className="text-[50px] flex justify-center"><FaClone/></p>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[42px]">2000+</h1>
          <p className="text-[#505072]">Project Completed</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 border-r border-[#E0E0F2]">
        <p className="text-[50px] flex justify-center"><FaUsers/></p>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[42px]">800+</h1>
          <p className="text-[#505072]">Total Clients</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 border-r border-[#E0E0F2]">
        <p className="text-[50px] flex justify-center"><FaHandshakeAngle/></p>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[42px]">97%</h1>
          <p className="text-[#505072]">Clients Feedback</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <p className="text-[50px] flex justify-center"><FaFileLines/></p>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[42px]">400+</h1>
          <p className="text-[#505072]">Portfolio Items</p>
        </div>
      </div>
     
    </div>
  );
};

export default AboutCount;
