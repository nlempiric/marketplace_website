import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../utils/data";
import NftDetailButtonComp from "../component/NftDetailButtonComp";
import Para from "../component/Para";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/reducer/dataSlice";
import Model from "../utils/Model";
import { motion } from "framer-motion";
import ImageModel from "../utils/ImageModel";
import { ethers } from "ethers";

function NftDetails() {
  const { idata } = useSelector((state) => state.root.clikcedData);
  const [showText, setShowText] = useState(false);
  const [showImage, setshowImage] = useState(false);
  const dispatch = useDispatch();
  const [ismodelopen, setmodel] = useState(false);
  const etherValue = isNaN(Number(idata[1].hex))? 0 : ethers.utils.formatEther(Number(idata[1].hex))

  const handleImageShow = (imgurl) => {
    setshowImage(!showImage);
  };

  return (
    <>
      {idata ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.9 }}
            className="box"
          >
            <div className="container h-full mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex flex-col">
              <div className="flex justify-between gap-10 2xl:!flex-row xl:!flex-row lg:!flex-row py-16 sm:py-7 flex-col">
                <div
                  className="2xl:w-1/2 xl:w-1/2 2xl:h-[385px] xl:h-[385px] lg:h-[385px] h-[385px] sm:h-[300px] rounded-lg lg:w-1/2 flex justify-center items-center hover:cursor-pointer transition-transform transform scale-100 hover:scale-105 duration-300 ease-in-out"
                  onClick={handleImageShow}
                >
                  {idata[5] ? (
                    <img
                      src={idata[5]}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2">
                  <div className="flex flex-col gap-12 h-full">
                    <div className="flex flex-col gap-4">
                      <h2 className="text-[42px] text-[#050515] ">
                        {idata[2]}
                      </h2>
                      <h3 className="text-[30px] text-[#050515] ">
                      {etherValue} ETH
                      {/* // ethers.utils.formatEther(Number(idata[1].hex)) */}
                      </h3>
                    </div>
                    <div className="2xl:hidden xl:hidden lg:hidden ">
                      <Para
                        text={idata.desc}
                        setShowText={setShowText}
                        showText={showText}
                      />
                    </div>

                    <div className="flex flex-col gap-6 flex-wrap w-full">
                      <NftDetailButtonComp
                        btnname="Update"
                        // to={`/nfts/details/UpdateNft/${item.id`}
                        to="/"
                      />
                      <div onClick={() => setmodel(true)}>
                        <NftDetailButtonComp btnname="Transfer" />
                      </div>

                      <NftDetailButtonComp btnname="Remove Sell" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden hidden 2xl:block xl:block lg:block mb-16">
                <Para
                  text={idata[4]}
                  setShowText={setShowText}
                  showText={showText}
                />
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <p>Item not found</p>
      )}

      {ismodelopen && <Model ismodelopen={ismodelopen} setmodel={setmodel} />}
      {showImage && (
        <ImageModel
          item={data.tokenUri}
          showImage={showImage}
          setshowImage={setshowImage}
        />
      )}
    </>
  );
}

export default NftDetails;
