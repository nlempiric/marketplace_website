import React from "react";
import HomePageDetails from "../component/HomePageDetails";
import HomeCardsComp from "../component/HomeCardsComp";
import HomeExploreNft from "../component/HomeExploreNft";
import HomeCreateSellComp from "../component/HomeCreateSellComp";
import ListsinFooter from "../component/ListsinFooter";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Homepage = ({nftDetail,loadingforExplore,setnftDetails}) => {


  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center w-full"
        style={{ backgroundImage: 'url("/bg.webp")' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.9 }}
          className="box"
        >
          <HomePageDetails />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.9 }}
          className="box"
        >
          <HomeCardsComp />
        </motion.div>
      </div>
      <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.9 }}
          className="box"
        >
        <HomeExploreNft nftDetail={nftDetail} loadingforExplore={loadingforExplore} setnftDetails={setnftDetails}/>
        
      </motion.div>
      <div className="bg-gradient-to-r from-[#d6ebdc] to-[#f6d8c8] via-[#dfe8dd] via-[#e6e8dc] via-[#eae8dd] via-[#f0dece] md:bg-gradient-to-b dsm:bg-gradient-to-b">
        <HomeCreateSellComp />
      </div>
      <div className="">
        <ListsinFooter />
      </div>
    </div>
  );
};

export default Homepage;
