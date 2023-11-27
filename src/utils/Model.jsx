import React, { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { MintTo, transferNft } from "./queries";
import { useAccount } from "wagmi";
import BannerModel from "./BannerModel";

function Model({change,setmessage,setBannerOpen, setchange, tid, ismodelopen, setmodel, filteredAddress }) {
  const { address, isConnected } = useAccount();
  const [isDropdownAddressOpen, setDropdownAddressOpen] = useState(false);
  const [selectedAddress, setselectedAddress] = useState("Select address");
 

  const toggleDropdownforAddress = () => {
    setDropdownAddressOpen(!isDropdownAddressOpen);
  };
  const handleselectAddress = (optionValue) => {
    setselectedAddress(optionValue);
    setDropdownAddressOpen(false);
  };
  const handleClose = () => {
    setmodel(false);
  };

  const handleTransfer = async () => {
    if (filteredAddress.includes(selectedAddress)) {
      try {
        console.log("seleced address", selectedAddress);
        console.log("siddddd", tid);
        const transfernft = await transferNft(address, selectedAddress, tid);
        console.log("logggg.................................", transfernft);
        setmessage("Nft Transfered Successfully");
        setchange(!change);
      } catch (err) {
        console.log("errror", err);
        setmessage("Transaction Failed");
      } finally {
        setBannerOpen(true);
        setmodel(false);
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ismodelopen ? 2 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className={`w-full fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-20 p-5`}
      >
        <div className="w-full fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-20 p-5">
          <div className="w-[500px] p-6  bg-white flex flex-col">
            <div className="flex justify-end">
              <AiOutlineClose onClick={handleClose} />
            </div>
            <div className="flex flex-col gap-6 py-16">
              <div className="relative inline-block">
                <input
                  type="text"
                  id="selectAddress"
                  className="w-full py-3 px-3 cursor-pointer bg-gray-100 border border-gray-100 outline-none focus:border-gray-400 rounded"
                  onClick={toggleDropdownforAddress}
                  value={selectedAddress}
                  readOnly
                />
                <PiCaretDownBold
                  onClick={toggleDropdownforAddress}
                  className="absolute top-4 right-4 cursor-pointer"
                />
                {isDropdownAddressOpen && (
                  <div className="absolute z-10 mt-2 py-2 bg-white border border-t-0 rounded-b w-full">
                    <div className="hover:bg-gray-100 cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap"></div>
                    {filteredAddress?.map((items, index) => (
                      <>
                        <div
                          className="p-2 hover:bg-gray-100 cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap"
                          onClick={() => handleselectAddress(items)}
                        >
                          {items}
                        </div>
                      </>
                    ))}
                  </div>
                )}
              </div>
              <button
                className="px-9 py-3 bg-[#050515] border border-1 border-[#050515] text-white rounded-md hover:text-[#050515] hover:bg-transparent "
                onClick={handleTransfer}
              >
                Transfer
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      
    </>
  );
}

export default Model;
