import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const ListsinFooter = () => {
  return (
    <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex justify-between gap-2 md:flex-col dsm:flex-col my-24 md:gap-9 dsm:gap-9 ">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-medium">Nifty</h1>
        <p className="flex items-center text-[#505072] break-words 2xl:w-72 xl:w-72">
          Audiences multi align dry the above so how have asking contribution
          tones reposed a the be in the date.
        </p>  
        <h2 className="text-[22px] font-medium">Join the community</h2>
        <div className="flex gap-2 text-lg">
          <div className="border border-1 border-[#505072] rounded-full p-2 ">
            <FaFacebookF fill="#505072" />
          </div>
          <div className="border border-1 border-[#505072] rounded-full p-2">
            <FaTwitter fill="#505072" />
          </div>
          <div className="border border-1 border-[#505072] rounded-full p-2">
            <FaLinkedinIn fill="#505072" />
          </div>
          <div className="border border-1 border-[#505072] rounded-full p-2">
            <FaPinterestP fill="#505072" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-[22px] font-medium">NFT</h2>
        <ul className="text-[#505072] flex flex-col gap-4">
          <li>Explore</li>
          <li>Help Center</li>
          <li>About</li>
          <li>Blog</li>
          <li>Collections</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-[22px] font-medium">Community</h2>
        <ul className="text-[#505072] flex flex-col gap-4">
          <li>ARAI Token</li>
          <li>Discussion</li>
          <li>Voting</li>
          <li>Suggest Feature</li>
          <li>NFT Protocol</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 ">
        <h2 className="text-[22px] font-medium">Get the latest NFT updates</h2>
        <div className="flex justify-between bg-white p-2 rounded-md shadow-lg lg:flex-col">
          <input
            type="email"
            placeholder="Your Email"
            className="w-[65%] py-3 lg:w-full focus:outline-gray-300"
          />
          <button className="w-1/3 lg:w-full py-3 px-5 2xl:px-8 border border-1 border-gray-300 rounded-md text-[#050515] hover:bg-[#050515] hover:text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListsinFooter;
