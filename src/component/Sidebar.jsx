import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/reducer/togglesidebar";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { PiCaretDownBold } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";

const Sidebar = () => {
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggledropdown, settoggledropdown] = useState(false);

  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      duration: 1500,
      smooth: "easeInOutQuart",
    });
  };

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar(false));
  };

  const handleDropdown = () => {
    settoggledropdown(!toggledropdown);
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          exit={{ x: -500 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="fixed top-0 right-0 w-full bg-opacity-90 bg-black z-50 overflow-hidden p-0 text-white h-[100vh]"
        >
          <div
            className={`2xl:hidden fixed top-0 right-0 w-full bg-opacity-90 bg-black z-50 overflow-hidden p-0 text-white h-[100vh]`}
          >
            <div>
              <div className="sbfdivClass">
                <div
                  className="flex justify-end m-3"
                  onClick={handleCloseSidebar}
                >
                  <span className="text-2xl ">
                    <AiOutlineClose />
                  </span>
                </div>
                <div className="flex flex-col justify-start text-center text-lg">
                  <Link
                    to="/"
                    className="w-full hover:bg-[#303030]"
                    onClick={handleCloseSidebar}
                  >
                    <button className="py-3 text-center px-4 ">Home</button>
                  </Link>
                  <Link
                    to="/about"
                    className="w-full hover:bg-[#303030]"
                    onClick={handleCloseSidebar}
                  >
                    <button className="py-3 text-center px-4 ">About</button>
                  </Link>
                  <Link
                    to="/blog"
                    className="w-full hover:bg-[#303030]"
                    onClick={handleCloseSidebar}
                  >
                    <button className="py-3 text-center px-4 ">Blog</button>
                  </Link>
                  <Link
                    to="/AllNftPage"
                    className="w-full hover:bg-[#303030]"
                    onClick={handleCloseSidebar}
                  >
                    <button className="py-3 text-center px-4 ">
                      Collection
                    </button>
                  </Link>

                  {isConnected && (
                    <button
                      className="flex gap-4 justify-center items-center py-3 text-center px-4 hover:bg-[#303030] "
                      onClick={handleDropdown}
                    >
                      Explore <PiCaretDownBold />
                    </button>
                  )}

                  {toggledropdown && (
                    <>
                      <button
                        className="py-3 text-gray-400 text-center px-8 hover:bg-[#303030] "
                        onClick={handleCloseSidebar}
                      >
                        <Link to="/MintNftPage">Mint Nft</Link>
                      </button>
                      {/* <button className="py-3 text-gray-400 text-start px-8 hover:bg-[#303030] ">
          <Link to="/TransferNft">Transfer Nft</Link>
          </button> */}
                      <button
                        className="py-3 text-gray-400 text-center px-8 hover:bg-[#303030] "
                        onClick={handleCloseSidebar}
                      >
                        <Link to="/MyCollection">My Collection</Link>
                      </button>
                    </>
                  )}
                  <button
                    className="py-3 text-center px-4 hover:bg-[#303030] "
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                      setTimeout(() => {
                        scrollTo("contact");
                      }, 500);
                      handleCloseSidebar();
                    }}
                  >
                    <Link>Contact</Link>
                  </button>
                  {/* <button className="py-3 text-center px-4 hover:bg-[#303030] justify-center items-center hidden dsm:!flex">
                    <Link to="/blog">Connect Wallet</Link>
                  </button> */}
                  <button
                    className="py-3 text-center px-4 hover:bg-[#303030] justify-center items-center hidden dsm:!flex"
                    onClick={() => open()}
                  >
                    {" "}
                    {isConnected
                      ? `${address.substring(0, 12)}...`
                      : "Connect wallet"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
export default Sidebar;
