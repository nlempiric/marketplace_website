import React, { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../utils/data";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/reducer/dataSlice";
import Loader from "react-js-loader";
import { ethers } from "ethers";
import { useAccount } from "wagmi";

const AllNftPage = ({ nftDetail, setnftDetails, loadingforExplore }) => {
  const { address, isConnected } = useAccount();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlenftClick = (i) => {
    dispatch(getData(i));
    navigate("/nfts/details");
  };

  return (
    <>
      {loadingforExplore ? (
        <Loader
          loaded={!loadingforExplore}
          type="bubble-scale"
          bgColor={"#050515"}
          color={"#050515"}
        >
          Loading...
        </Loader>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.9 }}
          className="box"
        >
          <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 min-h-[100vh] h-full py-10 ">
            <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  gap-10">
              {nftDetail &&
                nftDetail?.map((items, i) =>
                  items.nftListed ? (
                    <div
                      key={i}
                      className="justify-self-center border border-1 border-gray-400 bg-white p-4 flex flex-col justify-center items-center rounded-md cursor-pointer"
                      onClick={() => handlenftClick(items)}
                    >
                      <div className="w-[200px] h-[200px] ">
                        <img
                          src={items.tokenUri}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="pt-1 flex flex-col w-full px-2 2xl:text-start xl:text-start lg:text-start md:text-start text-center">
                        <h2 className="text-[22px] ">{items.name}</h2>
                        <h3 className=" text-[16px] 2xl:text-[18px] dsm:text-[16px] flex items-center  justify-center 2xl:justify-start xl:justify-start lg:justify-start md:justify-start">
                          <span>
                            <FaEthereum />
                          </span>
                          <span>
                            {items.price}
                            {/* {items.price &&
                            items.price._hex &&
                            ethers.utils.formatEther(Number(items.price._hex)) +
                              " ETH"}{" "} */}
                          </span>
                        </h3>
                      </div>
                    </div>
                  ) : null
                )}
            </div>
          </div>{" "}
        </motion.div>
      )}
    </>
  );
};

export default AllNftPage;
