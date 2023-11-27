import React from "react";
import { motion } from "framer-motion";
import { buyNft, removeNft, sellNft } from "./queries";

const CheckModel = ({
  setBannerOpen,
  setmessage,
  change,
  setIsLoading,
  setchange,
  addofToken,
  weiprice,
  tid,
  valueCheck,
  checkmessage,
  ischeckmodelopen,
  setcheckmodel,
}) => {
  const handlebuy = async () => {
    console.log("buynft");
    try {
      if (valueCheck === "buy") {
        console.log("buy");
        setcheckmodel(false);
        setIsLoading(true);
        const buynft = await buyNft(tid, {value:weiprice});
        console.log("buy nft", buynft);
        if (buynft) {
          setIsLoading(false);
          console.log("buy+++", buynft);
          setBannerOpen(true)
          setmessage("Transaction Successfull")
          setchange(!change);
        }
      } else if (valueCheck === "removesell") {
        console.log("removeeee");
        setcheckmodel(false);
        setIsLoading(true);
        const removenft = await removeNft(addofToken, tid);
        console.log("removessss nft", removenft);
        if (removenft) {
          setIsLoading(false);
          console.log("remove selll", removeNft);
          setBannerOpen(true)
          setmessage("NFT Removed Successfullyy")
          setchange(!change);
        }
      } else if (valueCheck === "sell") {
        console.log("selllll");
        setcheckmodel(false);
        setIsLoading(true);
        const sellnft = await sellNft(tid);
        if (sellnft) {
          setIsLoading(false);
          console.log("sell+++l", sellNft);
          setBannerOpen(true)
          setmessage("NFT is On Sell")
          setchange(!change);
        }
      }
    } catch (err) {
      console.log("errorrr", err);
    } finally {
      setcheckmodel(false);
      console.log("finally");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: ischeckmodelopen ? 2 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`w-full fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-20 p-5`}
    >
      <div className="w-full fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-20 p-5">
        <div className="w-[400px] gap-5 py-16 bg-white flex flex-col text-center">
          <h2>{checkmessage}</h2>
          <div className="w-full flex gap-4 justify-center">
            <button
              onClick={handlebuy}
              className="px-10 py-3 bg-[#050515] border border-1 border-[#050515] text-white rounded-md hover:text-[#050515] hover:bg-transparent "
            >
              Yes
            </button>
            <button
              className="px-10 py-3 bg-[#050515] border border-1 border-[#050515] text-white rounded-md hover:text-[#050515] hover:bg-transparent "
              onClick={() => setcheckmodel(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckModel;
