import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/reducer/togglesidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import { scroller } from "react-scroll";
import Dropdown from "./Dropdown";


const Header = () => {
  const navigate = useNavigate();


  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      duration: 1500, 
      smooth: "easeInOutQuart",
    });
  };


  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const dispatch = useDispatch();
  const sidebarisOpen = useSelector((state) => state.root.sidebar.isOpen);
  console.log(sidebarisOpen, "+++++++++++++++++++++++");
  const handleOpenSidebar = () => {
    dispatch(toggleSidebar(true));
  };

  return (
    <>
    <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex justify-between items-center py-8"
      data-aos="fade-down"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine"
       data-aos-duration="1000">
      <div>
        <Link to="/">
            <h1 className="text-4xl font-bold font-serif">Nifty</h1>
        </Link>
      </div>
      <div className="flex items-center gap-8 lg:gap-5">
        <div>
          <ul className="hidden 2xl:!flex lg:hidden xl:hidden md:hidden sm:hidden text-[#505072] text-lg gap-10 lg:gap-5 items-center">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            
            <li
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => {
                  scrollTo("collection");
                }, 500);
              }}
            >
              <Link>
                Collection
              </Link>
            </li>
            <li>
             <Dropdown/>
            </li>
            <li 
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => {
                  scrollTo("contact");
                }, 500);
              }}
            >
                <Link>
                Contact
                </Link>
            </li>
          </ul>
        </div>
        <div className="text-lg sm:hidden dsm:hidden">
          <button className="px-5 py-3 border border-1 border-gray-400 rounded-md text-[#050515] hover:bg-[#050515] hover:text-white">
            Connect Wallet
          </button>
        </div>
        <div
          className="hidden xl:!flex lg:!flex md:!flex dsm:!flex text-3xl"
          onClick={handleOpenSidebar}
        >
          <HiMenu />
        </div>
      </div>
    </div>
    {sidebarisOpen && <Sidebar />}
    </>
  );
};

export default Header;
