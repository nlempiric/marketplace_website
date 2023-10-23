import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/reducer/togglesidebar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar(false));
  };

  return (
    <div
      className={`2xl:hidden xl:hidden lg:hidden fixed top-0 right-0 w-[15rem] bg-black z-50 overflow-hidden p-0 text-white h-[100vh]`}
      style={{ position: "fixed" }}
    >
      <div>
        <div className="sbfdivClass">
          <div className="flex justify-end m-3" onClick={handleCloseSidebar}>
            <span className="text-2xl ">
              <AiOutlineClose />
            </span>
          </div>
          <div className="flex flex-col justify-start text-start text-lg">
            <button className="py-3 text-start px-4 hover:bg-[#303030]">
              <Link to="/">Home</Link>
            </button>
            <button className="py-3 text-start px-4 hover:bg-[#303030] ">
              <Link to="/about">About</Link>
            </button>
            <button className="py-3 text-start px-4 hover:bg-[#303030] ">
              <Link to="/blog">Blog</Link>
            </button>
            <button className="py-3 text-start px-4 hover:bg-[#303030] ">
              <Link to="/blog">Collection</Link>
            </button>
            <button className="py-3 text-start px-4 hover:bg-[#303030] justify-between items-center hidden dsm:!flex">
              <Link to="/blog">Connect Wallet</Link>
            </button>
            {/* <button className="py-3 text-start px-4 hover:bg-[#303030] justify-between items-center hidden dsm:!flex">
              <Link to="/blog">Connect Wallet</Link>
            </button> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
