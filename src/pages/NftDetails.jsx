import React, {  useState } from "react";
import NftDetailButtonComp from "../component/NftDetailButtonComp";
import Para from "../component/Para";
import {  useSelector } from "react-redux";
import Model from "../utils/Model";
import { motion } from "framer-motion";
import ImageModel from "../utils/ImageModel";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import BannerModel from "../utils/BannerModel";
import CheckModel from "../utils/CheckModel";
import Loader from "react-js-loader";

function NftDetails({ change, filteredAddress, setchange }) {
  const { address, isConnected } = useAccount();
  const { idata } = useSelector((state) => state.root.clikcedData);
  const [showText, setShowText] = useState(false);
  const [showImage, setshowImage] = useState(false);
  const [ismodelopen, setmodel] = useState(false);
  const [ischeckmodelopen, setcheckmodel] = useState(false);
  const [checkmessage, setcheckmessage] = useState();
  const [message, setmessage] = useState("");
  const [valueCheck, setvalueCheck] = useState("");
  const [isBannerOpen, setBannerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const tid = idata.tokenId;
  const addofToken = idata.add;
  const weiprice = Number(ethers.utils.parseEther(idata.price));
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
            {/* <div className="container h-full mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex flex-col"> */}
            <div
              className={`container h-full mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex flex-col ${
                isLoading ? " opacity-20" : ""
              }`}
            >
              {/* <div className="flex justify-between gap-10 2xl:!flex-col xl:!flex-row lg:!flex-row py-16 sm:py-7 flex-col"> */}

              <div
                className={`${
                  address == addofToken
                    ? "flex gap-10  py-16 sm:py-7 2xl:!flex-row xl:!flex-row lg:!flex-row flex-col"
                    : "flex gap-6 items-center  py-16 sm:py-7 flex-col"
                }`}
              >
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
                <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-[75%] w-full">
                  <div className="flex flex-col gap-12 h-full">
                    <div className="flex flex-col gap-4">
                      <h2 className="text-[42px] text-[#050515] ">
                        {idata[2]}
                      </h2>
                      <h3 className="text-[30px] text-[#050515] ">
                        {idata.price}
                        {/* {ethers.utils.formatEther(idata[3]?.hex)} ETH */}
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
                    {isConnected ? (
                      <>
                        {addofToken == address ? (
                          <div className="flex flex-col gap-6 flex-wrap w-full">
                            <NftDetailButtonComp
                              btnname="Update"
                              to={`/nfts/details/UpdateNft`}
                            />
                            <div onClick={() => setmodel(true)}>
                              <NftDetailButtonComp btnname="Transfer" />
                            </div>
                            {idata.nftListed ? (
                              <div
                                onClick={() => {
                                  setvalueCheck("removesell");
                                  setcheckmodel(true);
                                  setcheckmessage(
                                    "Are You Sure Want To Remove NFT?"
                                  );
                                }}
                              >
                                <NftDetailButtonComp btnname="Remove Sell" />
                              </div>
                            ) : (
                              <div
                                onClick={() => {
                                  setvalueCheck("sell");
                                  setcheckmodel(true);
                                  setcheckmessage(
                                    "Are You Sure Want To Sell NFT?"
                                  );
                                }}
                              >
                                <NftDetailButtonComp btnname=" Sell" />
                              </div>
                            )}
                          </div>
                        ) : (
                          <div
                            onClick={() => {
                              setvalueCheck("buy");
                              setcheckmodel(true);
                              setcheckmessage("Are You Sure Want To Buy NFT?");
                            }}
                          >
                            <NftDetailButtonComp btnname="Buy" />
                          </div>
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="md:hidden hidden 2xl:block xl:block lg:block mb-16">
                <Para
                  text={idata.desc}
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

      {isLoading ? (
        <div className="absolute top-[390px] mx-[45%]">
          <Loader
            loaded={isLoading}
            type="bubble-scale"
            bgColor={"#050515"}
            color={"#050515"}
          >
            Loading...
          </Loader>
        </div>
      ) : (
        ""
      )}
      {ismodelopen && (
        <Model
          change={change}
          setchange={setchange}
          tid={tid}
          filteredAddress={filteredAddress}
          ismodelopen={ismodelopen}
          setmodel={setmodel}
          setBannerOpen={setBannerOpen}
          setmessage={setmessage}
        />
      )}
      {showImage && (
        <ImageModel
          item={idata.tokenUri}
          showImage={showImage}
          setshowImage={setshowImage}
        />
      )}
      {isBannerOpen && (
        <BannerModel
          isBannerOpen={isBannerOpen}
          setBannerOpen={setBannerOpen}
          message={message}
          navigate={"/"}
        />
      )}
      {ischeckmodelopen && (
        <CheckModel
        setBannerOpen={setBannerOpen}
          setmessage={setmessage}
          setIsLoading={setIsLoading}
          change={change}
          setchange={setchange}
          addofToken={addofToken}
          tid={tid}
          weiprice={weiprice}
          valueCheck={valueCheck}
          checkmessage={checkmessage}
          ischeckmodelopen={ischeckmodelopen}
          setcheckmodel={setcheckmodel}
        />
      )}
    </>
  );
}

export default NftDetails;
