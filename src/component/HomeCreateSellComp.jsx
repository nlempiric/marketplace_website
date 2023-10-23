import React from "react";
import {
  FaWallet,
  FaFolderOpen,
  FaFolderPlus,
  FaListAlt,
} from "react-icons/fa";

const HomeCreateSellComp = () => {
  const data = [
    {
      Name: "Set up your wallet ",
      icon: <FaWallet fill="white"/>,
      detail:
        "Audiences multi align dry the above so how have asking contribution tones reposed a the be in the date.",
    },
    {
      Name: "Create collection",
      icon: <FaFolderOpen fill="white" />,
      detail:
        "Audiences multi align dry the above so how have asking contribution tones reposed a the be in the date.",
    },
    {
      Name: "Add your NFTs",
      icon: <FaFolderPlus fill="white" />,
      detail:
        "Audiences multi align dry the above so how have asking contribution tones reposed a the be in the date.",
    },
    {
      Name: "List them for sell",
      icon: <FaListAlt fill="white" />,
      detail:
        "Audiences multi align dry the above so how have asking contribution tones reposed a the be in the date.",
    },
  ];
  return (
    <div
      className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 py-14"
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <h1 className="text-4xl font-semibold my-12">
        Create and sell your NFTs
      </h1>
      <div
        className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 "
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        {data.map((items) => (
          <div className="flex flex-col gap-2 items-center p-5 justify-center rounded-md">
            <div className="bg-[#050515] self-start p-5 rounded-full text-3xl">
            {/* <div className="bg-gradient-to-r from-[#f2ebd9] to-[#d1dfe5] via-[#dfe8dd]  p-5 rounded-full text-3xl self-start"> */}
              {items.icon}
            </div>
            <div className="py-3 self-center 2xl:self-start ">
              <h1 className="text-[20px] font-semibold py-3">
                Set up your wallet{" "}
              </h1>
              <p className="flex items-center text-[#505072]">
                Audiences multi align dry the above so how have asking
                contribution tones reposed a the be in the date.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCreateSellComp;
