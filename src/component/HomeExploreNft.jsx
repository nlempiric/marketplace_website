import React, { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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

const HomeExploreNft = () => {
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(
    data.length <= 3
  );

  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow:  3 ,
    slidesToScroll:3 ,
    prevArrow: <MdOutlineArrowBackIos fill="gray"/>,
    nextArrow: <MdOutlineArrowForwardIos fill="gray"/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 488,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [data]);

  return (
    <>
      <div
        id="collection"
        className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 my-32 font"
      >
        <h1 className="text-4xl font-semibold my-12">Explore NFTs</h1>
        <Slider {...settings}>
          {data.map((items, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex flex-col m-5 items-center p-5 justify-center border border-1 border-gray-300 rounded-md hover:shadow-lg">
                <div>
                  <img src={items.imageUrl} alt="" />
                </div>
                <div className="py-3 self-center 2xl:self-start flex flex-col gap-1">
                  <h1 className="text-[18px] 2xl:text-[22px] dsm:text-[17px] break-all">
                    {items.Name}
                  </h1>
                  <h2 className="text-[16px] 2xl:text-[20px] dsm:text-[15px] flex items-center">
                    <span>
                      <FaEthereum />
                    </span>
                    <span>{items.price} ETH</span>
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
        <div className="flex justify-center pt-14">
          <button
            className="px-10 py-3 border border-1 border-gray-400 rounded-md text-[#050515] hover:bg-[#050515] hover:text-white"
            disabled={prevButtonDisabled}
          >
            <Link to="/AllNftPage">
              <h3>See All</h3>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeExploreNft;
