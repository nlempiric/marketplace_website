import React, { useEffect } from "react";
import { FaEthereum } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";


const HomeExploreNft = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const data = [
    {
      imageUrl: "/collection1.webp",
      Name: "Abstract Art",
      price: "175",
    },
    {
      imageUrl: "/collection2.webp",
      Name: "Colorful Abstract",
      price: "25",
    },
    {
      imageUrl: "/collection3.webp",
      Name: "Colorful Abstract",
      price: "40",
    },
    {
      imageUrl: "/collection4.webp",
      Name: "Colorful Abstract",
      price: "40",
    },
    {
      imageUrl: "/collection5.webp",
      Name: "Colorful Abstract",
      price: "40",
    },
    {
      imageUrl: "/collection6.webp",
      Name: "Colorful Abstract",
      price: "40",
    },
  ];

  return (
    <>
      <div
        id="collection"
        className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 my-32 font"
      >
        <h1 className="text-4xl font-semibold my-12">Explore NFTs</h1>
        <div
          className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 "
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          {data.map((items,index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, opacity: 0.9 }} // Adjust scale and opacity as needed
              // data-aos="fade-up"
              // data-aos-offset="300"
              transition={{ duration: 0.5, ease: "easeInOut" }}
             
            >
              <div className="flex flex-col items-center p-5 justify-center border border-1 border-gray-300 rounded-md hover:shadow-lg">
                <div>
                  <img src={items.imageUrl} alt="" />
                </div>
                <div className="py-3 self-center 2xl:self-start flex flex-col gap-1">
                  <h1 className="text-[22px] ">{items.Name} </h1>
                  <h2 className="text-[20px] flex items-center">
                    <span>
                      <FaEthereum />
                    </span>
                    <span>{items.price} ETH</span>
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-14">
          <button className="px-10 py-3 border border-1 border-gray-400 rounded-md text-[#050515] hover:bg-[#050515] hover:text-white">
            <h3>See More</h3>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeExploreNft;
