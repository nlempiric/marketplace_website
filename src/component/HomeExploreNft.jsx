import React, { useEffect } from "react";
import { FaEthereum } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "react-js-loader";
import { getData } from "../redux/reducer/dataSlice";

const HomeExploreNft = ({ nftDetail, loadingforExplore, setnftDetails }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const settings = {
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3 ,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 488,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const handleclickNft = (items) => {
    dispatch(getData(items));
    navigate("/nfts/details");
  };

  return (
    <>
      <div
        id="collection"
        className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 my-32 font"
      >
        <h1 className="text-4xl font-semibold my-12">Explore NFTs</h1>

        {loadingforExplore ? (
          <div className="py-32">
            <Loader
              loaded={!loadingforExplore}
              type="bubble-scale"
              bgColor={"#050515"}
              color={"#050515"}
            >
              Loading...
            </Loader>
          </div>
        ) : (
          <Slider {...settings}>
            {nftDetail?.map((items, index) =>
              items.nftListed ? (
                <>
                  <motion.div
                    key={items?.tokenId}
                    whileHover={{ scale: 1.1, opacity: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="p-6 m-auto"
                  >
                    <div
                      className=" w-fit p-5 m-auto flex flex-col mt-1 items-center justify-center border border-1 border-gray-300 rounded-md hover:shadow-lg cursor-pointer"
                      onClick={(e) => handleclickNft(items)}
                    >
                      <div className="w-[200px] h-[200px] 2xl:w-[250px] 2xl:h-[280px] xl:w-[200px] xl:h-[210px] lg:w-[180px] lg:h-[200px] md:w-[200px] md:h-[200px]">
                        <img
                          src={items?.tokenUri}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full py-3 self-center 2xl:self-start flex flex-col gap-1">
                        <h1 className="text-[18px] 2xl:text-[22px] dsm:text-[17px] break-all">
                          {items?.name}
                        </h1>
                        <h2 className="text-[16px] 2xl:text-[20px] dsm:text-[15px] flex items-center">
                          <span>
                            <FaEthereum />
                          </span>
                          <span>
                            {items.price}
                            {/* {ethers.utils.formatEther(Number(items?.price._hex))}{" "} */}
                            ETH
                          </span>
                        </h2>
                      </div>
                    </div>
                  </motion.div>
                </>
              ) : null
            )}
          </Slider>
        )}

        <div className="flex justify-center pt-14">
          <button className="px-10 py-3 border border-1 border-gray-400 rounded-md text-[#050515] hover:bg-[#050515] hover:text-white">
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
